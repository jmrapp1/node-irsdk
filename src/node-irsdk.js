import IrSdkNodeWrapper from '../build/Release/IrSdkNodeBindings.node'
import { JsIrSdk } from './JsIrSdk.js'

/**
  @module irsdk
*/

var instance

/**
  Initialize JsIrSdk, can be done once before using getInstance first time.
  @function
  @static
  @param {Object} [opts] Options
  @param {Integer} [opts.telemetryUpdateInterval=0] Telemetry update interval, milliseconds
  @param {Integer} [opts.sessionInfoUpdateInterval=0] SessionInfo update interval, milliseconds
  @param {iracing~sessionInfoParser} [opts.sessionInfoParser] Custom parser for session info
  @returns {iracing} Running instance of JsIrSdk
*/
export function init(opts) {
  if (!instance) {
    instance = new JsIrSdk(IrSdkNodeWrapper,
      Object.assign({
        telemetryUpdateInterval: 0,
        sessionInfoUpdateInterval: 0
      }, opts))
  }
  return instance
}

/**
  Get initialized instance of JsIrSdk
  @function
  @static
  @returns {iracing} Running instance of JsIrSdk
*/
export function getInstance() {
  return init()
}
