#include "IRSDKWrapper.h"
#include <iostream>

NodeIrSdk::IRSDKWrapper::IRSDKWrapper():
hMemMapFile(NULL), pSharedMem(NULL), pHeader(NULL), lastTickCount(INT_MIN), lastSessionInfoUpdate(INT_MIN), 
data(NULL), sessionInfoStr()
{
}


NodeIrSdk::IRSDKWrapper::~IRSDKWrapper()
{
}

bool NodeIrSdk::IRSDKWrapper::startup()
{

  if (!hMemMapFile)
  {
    hMemMapFile = OpenFileMapping(FILE_MAP_READ, FALSE, IRSDK_MEMMAPFILENAME);
    pSharedMem = (const char *)MapViewOfFile(hMemMapFile, FILE_MAP_READ, 0, 0, 0);
    pHeader = (irsdk_header *)pSharedMem;
    lastTickCount = INT_MIN;
    data = new char[pHeader->bufLen];
  }

  return true;
}

bool NodeIrSdk::IRSDKWrapper::isInitialized() const 
{
  if (!hMemMapFile) return false;
  return true;
}

bool NodeIrSdk::IRSDKWrapper::isConnected() const 
{
  return pHeader->status == irsdk_stConnected;
}

void NodeIrSdk::IRSDKWrapper::shutdown() 
{
  if (pSharedMem)
    UnmapViewOfFile(pSharedMem);

  if (hMemMapFile)
    CloseHandle(hMemMapFile);

  hMemMapFile = NULL;
  pSharedMem = NULL;
  pHeader = NULL;
  
  lastTickCount = INT_MIN;
  lastSessionInfoUpdate = INT_MIN;
  delete data;
  data = NULL;
  lastValidTime = time(NULL);
  varHeadersArr.clear();
  sessionInfoStr = "";
}

bool NodeIrSdk::IRSDKWrapper::updateSessionInfo() 
{
  if (startup()) {
    int counter = pHeader->sessionInfoUpdate;

    if (counter > lastSessionInfoUpdate) {
      sessionInfoStr = getSessionInfoStr();
      lastSessionInfoUpdate = counter;
      return true;
    }
    return false;
  }
  return false;
}

const std::string NodeIrSdk::IRSDKWrapper::getSessionInfo() const 
{
  return sessionInfoStr;
}

bool NodeIrSdk::IRSDKWrapper::updateTelemetry() 
{
  if ( startup() )
  {
    if (varHeadersArr.empty()) {
      updateVarHeaders();
    }
    // if sim is not active, then no new data
    if (!pHeader->status)
    {
      lastTickCount = INT_MIN;
      return false;
    }

    int latest = 0;
    for (int i = 1; i<pHeader->numBuf; i++)
      if (pHeader->varBuf[latest].tickCount < pHeader->varBuf[i].tickCount)
        latest = i;

    // if newer than last recieved, than report new data
    if (lastTickCount < pHeader->varBuf[latest].tickCount)
    {
      // try to get data
      // try twice to get the data out
      for (int count = 0; count < 2; count++)
      {
        int curTickCount = pHeader->varBuf[latest].tickCount;
        memcpy(data, pSharedMem + pHeader->varBuf[latest].bufOffset, pHeader->bufLen);
        if (curTickCount == pHeader->varBuf[latest].tickCount)
        {
          lastTickCount = curTickCount;
          lastValidTime = time(NULL);
          return true;
        }
      }
      // if here, the data changed out from under us.
      return false;
    }
    // if older than last recieved, than reset, we probably disconnected
    else if (lastTickCount >  pHeader->varBuf[latest].tickCount)
    {
      lastTickCount = INT_MIN;
      return false;
    }
    // else the same, and nothing changed this tick
  }
  return false;
}

const double NodeIrSdk::IRSDKWrapper::getLastTelemetryUpdateTS() const
{
  return 1000.0f * lastValidTime;
}

const char* NodeIrSdk::IRSDKWrapper::getSessionInfoStr() const
{
  if (isInitialized()) {
    return pSharedMem + pHeader->sessionInfoOffset;
  }

  return NULL;
}

void NodeIrSdk::IRSDKWrapper::updateVarHeaders() 
{
  varHeadersArr.clear();

  for (int index = 0; index < pHeader->numVars; ++index)
  {
    irsdk_varHeader* pVarHeader = &((irsdk_varHeader*)(pSharedMem + pHeader->varHeaderOffset))[index];
    varHeadersArr.push_back(pVarHeader);
  }
}

NodeIrSdk::IRSDKWrapper::TelemetryVar::TelemetryVar(irsdk_varHeader* varHeader):
header(varHeader)
{
  value = new char[irsdk_VarTypeBytes[varHeader->type] * varHeader->count];
  type = (irsdk_VarType)varHeader->type;
}

NodeIrSdk::IRSDKWrapper::TelemetryVar::~TelemetryVar() 
{
  delete value;
}

const std::vector<irsdk_varHeader*> NodeIrSdk::IRSDKWrapper::getVarHeaders() const 
{
  return varHeadersArr;
}

bool NodeIrSdk::IRSDKWrapper::getVarVal(TelemetryVar& var) const 
{
  if (data == NULL) {
    std::cout << "no data available.." << std::endl;
    return false;
  }

  int valueBytes = irsdk_VarTypeBytes[var.header->type] * var.header->count;
  memcpy(var.value, data + var.header->offset, valueBytes);
  return true;
}