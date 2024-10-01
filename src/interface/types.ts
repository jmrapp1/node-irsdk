export interface Telemetry {
    SessionTime: number;
    SessionTick: number;
    SessionNum: number;
    SessionState: string;
    SessionUniqueID: number;
    SessionFlags?: string[];
    SessionTimeRemain: number;
    SessionLapsRemain: number;
    SessionLapsRemainEx: number;
    SessionTimeTotal: number;
    SessionLapsTotal: number;
    SessionJokerLapsRemain: number;
    SessionOnJokerLap: boolean;
    SessionTimeOfDay: number;
    RadioTransmitCarIdx: number;
    RadioTransmitRadioIdx: number;
    RadioTransmitFrequencyIdx: number;
    DisplayUnits: number;
    DriverMarker: boolean;
    PushToTalk: boolean;
    PushToPass: boolean;
    ManualBoost: boolean;
    ManualNoBoost: boolean;
    IsOnTrack: boolean;
    IsReplayPlaying: boolean;
    ReplayFrameNum: number;
    ReplayFrameNumEnd: number;
    IsDiskLoggingEnabled: boolean;
    IsDiskLoggingActive: boolean;
    FrameRate: number;
    CpuUsageFG: number;
    GpuUsage: number;
    ChanAvgLatency: number;
    ChanLatency: number;
    ChanQuality: number;
    ChanPartnerQuality: number;
    CpuUsageBG: number;
    ChanClockSkew: number;
    MemPageFaultSec: number;
    MemSoftPageFaultSec: number;
    PlayerCarPosition: number;
    PlayerCarClassPosition: number;
    PlayerCarClass: number;
    PlayerTrackSurface: string;
    PlayerTrackSurfaceMaterial: string;
    PlayerCarIdx: number;
    PlayerCarTeamIncidentCount: number;
    PlayerCarMyIncidentCount: number;
    PlayerCarDriverIncidentCount: number;
    PlayerCarWeightPenalty: number;
    PlayerCarPowerAdjust: number;
    PlayerCarDryTireSetLimit: number;
    PlayerCarTowTime: number;
    PlayerCarInPitStall: boolean;
    PlayerCarPitSvStatus: string;
    PlayerTireCompound: number;
    PlayerFastRepairsUsed: number;
    CarIdxLap?: number[];
    CarIdxLapCompleted?: number[];
    CarIdxLapDistPct?: number[];
    CarIdxTrackSurface?: string[];
    CarIdxTrackSurfaceMaterial?: string[];
    CarIdxOnPitRoad?: boolean[];
    CarIdxPosition?: number[];
    CarIdxClassPosition?: number[];
    CarIdxClass?: number[];
    CarIdxF2Time?: number[];
    CarIdxEstTime?: number[];
    CarIdxLastLapTime?: number[];
    CarIdxBestLapTime?: number[];
    CarIdxBestLapNum?: number[];
    CarIdxTireCompound?: number[];
    CarIdxQualTireCompound?: number[];
    CarIdxQualTireCompoundLocked?: boolean[];
    CarIdxFastRepairsUsed?: number[];
    CarIdxSessionFlags?: any[];
    PaceMode: number;
    CarIdxPaceLine?: number[];
    CarIdxPaceRow?: number[];
    CarIdxPaceFlags?: any[];
    OnPitRoad: boolean;
    CarIdxSteer?: number[];
    CarIdxRPM?: number[];
    CarIdxGear?: number[];
    SteeringWheelAngle: number;
    Throttle: number;
    Brake: number;
    Clutch: number;
    Gear: number;
    RPM: number;
    PlayerCarSLFirstRPM: number;
    PlayerCarSLShiftRPM: number;
    PlayerCarSLLastRPM: number;
    PlayerCarSLBlinkRPM: number;
    Lap: number;
    LapCompleted: number;
    LapDist: number;
    LapDistPct: number;
    RaceLaps: number;
    CarDistAhead: number;
    CarDistBehind: number;
    LapBestLap: number;
    LapBestLapTime: number;
    LapLastLapTime: number;
    LapCurrentLapTime: number;
    LapLasNLapSeq: number;
    LapLastNLapTime: number;
    LapBestNLapLap: number;
    LapBestNLapTime: number;
    LapDeltaToBestLap: number;
    LapDeltaToBestLap_DD: number;
    LapDeltaToBestLap_OK: boolean;
    LapDeltaToOptimalLap: number;
    LapDeltaToOptimalLap_DD: number;
    LapDeltaToOptimalLap_OK: boolean;
    LapDeltaToSessionBestLap: number;
    LapDeltaToSessionBestLap_DD: number;
    LapDeltaToSessionBestLap_OK: boolean;
    LapDeltaToSessionOptimalLap: number;
    LapDeltaToSessionOptimalLap_DD: number;
    LapDeltaToSessionOptimalLap_OK: boolean;
    LapDeltaToSessionLastlLap: number;
    LapDeltaToSessionLastlLap_DD: number;
    LapDeltaToSessionLastlLap_OK: boolean;
    Speed: number;
    Yaw: number;
    YawNorth: number;
    Pitch: number;
    Roll: number;
    EnterExitReset: number;
    TrackTemp: number;
    TrackTempCrew: number;
    AirTemp: number;
    TrackWetness: number;
    Skies: number;
    AirDensity: number;
    AirPressure: number;
    WindVel: number;
    WindDir: number;
    RelativeHumidity: number;
    FogLevel: number;
    Precipitation: number;
    SolarAltitude: number;
    SolarAzimuth: number;
    WeatherDeclaredWet: boolean;
    DCLapStatus: number;
    DCDriversSoFar: number;
    OkToReloadTextures: boolean;
    LoadNumTextures: boolean;
    CarLeftRight: number;
    PitsOpen: boolean;
    VidCapEnabled: boolean;
    VidCapActive: boolean;
    PitRepairLeft: number;
    PitOptRepairLeft: number;
    PitstopActive: boolean;
    FastRepairUsed: number;
    FastRepairAvailable: number;
    LFTiresUsed: number;
    RFTiresUsed: number;
    LRTiresUsed: number;
    RRTiresUsed: number;
    LeftTireSetsUsed: number;
    RightTireSetsUsed: number;
    FrontTireSetsUsed: number;
    RearTireSetsUsed: number;
    TireSetsUsed: number;
    LFTiresAvailable: number;
    RFTiresAvailable: number;
    LRTiresAvailable: number;
    RRTiresAvailable: number;
    LeftTireSetsAvailable: number;
    RightTireSetsAvailable: number;
    FrontTireSetsAvailable: number;
    RearTireSetsAvailable: number;
    TireSetsAvailable: number;
    CamCarIdx: number;
    CamCameraNumber: number;
    CamGroupNumber: number;
    CamCameraState?: string[];
    IsOnTrackCar: boolean;
    IsInGarage: boolean;
    SteeringWheelAngleMax: number;
    ShiftPowerPct: number;
    ShiftGrindRPM: number;
    ThrottleRaw: number;
    BrakeRaw: number;
    ClutchRaw: number;
    HandbrakeRaw: number;
    BrakeABSactive: boolean;
    EngineWarnings?: any[];
    FuelLevelPct: number;
    PitSvFlags?: any[];
    PitSvLFP: number;
    PitSvRFP: number;
    PitSvLRP: number;
    PitSvRRP: number;
    PitSvFuel: number;
    PitSvTireCompound: number;
    CarIdxP2P_Status?: boolean[];
    CarIdxP2P_Count?: number[];
    SteeringWheelPctTorque: number;
    SteeringWheelPctTorqueSign: number;
    SteeringWheelPctTorqueSignStops: number;
    SteeringWheelPctIntensity: number;
    SteeringWheelPctSmoothing: number;
    SteeringWheelPctDamper: number;
    SteeringWheelLimiter: number;
    SteeringWheelMaxForceNm: number;
    SteeringWheelPeakForceNm: number;
    SteeringWheelUseLinear: boolean;
    ShiftIndicatorPct: number;
    ReplayPlaySpeed: number;
    ReplayPlaySlowMotion: boolean;
    ReplaySessionTime: number;
    ReplaySessionNum: number;
    TireLF_RumblePitch: number;
    TireRF_RumblePitch: number;
    TireLR_RumblePitch: number;
    TireRR_RumblePitch: number;
    IsGarageVisible: boolean;
    SteeringWheelTorque_ST?: number[];
    SteeringWheelTorque: number;
    VelocityZ_ST?: number[];
    VelocityY_ST?: number[];
    VelocityX_ST?: number[];
    VelocityZ: number;
    VelocityY: number;
    VelocityX: number;
    YawRate_ST?: number[];
    PitchRate_ST?: number[];
    RollRate_ST?: number[];
    YawRate: number;
    PitchRate: number;
    RollRate: number;
    VertAccel_ST?: number[];
    LatAccel_ST?: number[];
    LongAccel_ST?: number[];
    VertAccel: number;
    LatAccel: number;
    LongAccel: number;
    dcStarter: boolean;
    dcPitSpeedLimiterToggle: boolean;
    dcHeadlightFlash: boolean;
    dpRFTireChange: number;
    dpLFTireChange: number;
    dpRRTireChange: number;
    dpLRTireChange: number;
    dpFuelFill: number;
    dpWindshieldTearoff: number;
    dpFuelAddKg: number;
    dpFastRepair: number;
    dcBrakeBias: number;
    dpLFTireColdPress: number;
    dpRFTireColdPress: number;
    dpLRTireColdPress: number;
    dpRRTireColdPress: number;
    dcTractionControl: number;
    dcABS: number;
    dpFuelAutoFillEnabled: number;
    dpFuelAutoFillActive: number;
    dcToggleWindshieldWipers: boolean;
    dcTriggerWindshieldWipers: boolean;
    FuelUsePerHour: number;
    Voltage: number;
    WaterTemp: number;
    WaterLevel: number;
    FuelPress: number;
    OilTemp: number;
    OilPress: number;
    OilLevel: number;
    ManifoldPress: number;
    FuelLevel: number;
    Engine0_RPM: number;
    RFbrakeLinePress: number;
    RFcoldPressure: number;
    RFtempCL: number;
    RFtempCM: number;
    RFtempCR: number;
    RFwearL: number;
    RFwearM: number;
    RFwearR: number;
    LFbrakeLinePress: number;
    LFcoldPressure: number;
    LFtempCL: number;
    LFtempCM: number;
    LFtempCR: number;
    LFwearL: number;
    LFwearM: number;
    LFwearR: number;
    RRbrakeLinePress: number;
    RRcoldPressure: number;
    RRtempCL: number;
    RRtempCM: number;
    RRtempCR: number;
    RRwearL: number;
    RRwearM: number;
    RRwearR: number;
    LRbrakeLinePress: number;
    LRcoldPressure: number;
    LRtempCL: number;
    LRtempCM: number;
    LRtempCR: number;
    LRwearL: number;
    LRwearM: number;
    LRwearR: number;
    LRshockDefl: number;
    LRshockDefl_ST?: number[];
    LRshockVel: number;
    LRshockVel_ST?: number[];
    RRshockDefl: number;
    RRshockDefl_ST?: number[];
    RRshockVel: number;
    RRshockVel_ST?: number[];
    LFshockDefl: number;
    LFshockDefl_ST?: number[];
    LFshockVel: number;
    LFshockVel_ST?: number[];
    RFshockDefl: number;
    RFshockDefl_ST?: number[];
    RFshockVel: number;
    RFshockVel_ST?: number[];
}

export interface Session {
    WeekendInfo: WeekendInfo
    SessionInfo: SessionInfo
    CameraInfo: CameraInfo
    RadioInfo: RadioInfo
    DriverInfo: DriverInfo
    SplitTimeInfo: SplitTimeInfo
    CarSetup: CarSetup
}

export interface WeekendInfo {
    TrackName: string
    TrackID: number
    TrackLength: string
    TrackLengthOfficial: string
    TrackDisplayName: string
    TrackDisplayShortName: string
    TrackConfigName: string
    TrackCity: string
    TrackCountry: string
    TrackAltitude: string
    TrackLatitude: string
    TrackLongitude: string
    TrackNorthOffset: string
    TrackNumTurns: number
    TrackPitSpeedLimit: string
    TrackType: string
    TrackDirection: string
    TrackWeatherType: string
    TrackSkies: string
    TrackSurfaceTemp: string
    TrackAirTemp: string
    TrackAirPressure: string
    TrackWindVel: string
    TrackWindDir: string
    TrackRelativeHumidity: string
    TrackFogLevel: string
    TrackPrecipitation: string
    TrackCleanup: number
    TrackDynamicTrack: number
    TrackVersion: string
    SeriesID: number
    SeasonID: number
    SessionID: number
    SubSessionID: number
    LeagueID: number
    Official: number
    RaceWeek: number
    EventType: string
    Category: string
    SimMode: string
    TeamRacing: number
    MinDrivers: number
    MaxDrivers: number
    DCRuleSet: string
    QualifierMustStartRace: number
    NumCarClasses: number
    NumCarTypes: number
    HeatRacing: number
    BuildType: string
    BuildTarget: string
    BuildVersion: string
    RaceFarm: any
    WeekendOptions: WeekendOptions
    TelemetryOptions: TelemetryOptions
}

export interface WeekendOptions {
    NumStarters: number
    StartingGrid: string
    QualifyScoring: string
    CourseCautions: string
    StandingStart: number
    ShortParadeLap: number
    Restarts: string
    WeatherType: string
    Skies: string
    WindDirection: string
    WindSpeed: string
    WeatherTemp: string
    RelativeHumidity: string
    FogLevel: string
    TimeOfDay: string
    Date: string
    EarthRotationSpeedupFactor: number
    Unofficial: number
    CommercialMode: string
    NightMode: string
    IsFixedSetup: number
    StrictLapsChecking: string
    HasOpenRegistration: number
    HardcoreLevel: number
    NumJokerLaps: number
    IncidentLimit: string
    FastRepairsLimit: string
    GreenWhiteCheckeredLimit: number
}

export interface TelemetryOptions {
    TelemetryDiskFile: string
}

export interface SessionInfo {
    Sessions: Session[]
}

export interface Session {
    SessionNum: number
    SessionLaps: string
    SessionTime: string
    SessionNumLapsToAvg: number
    SessionType: string
    SessionTrackRubberState: string
    SessionName: string
    SessionSubType: any
    SessionSkipped: number
    SessionRunGroupsUsed: number
    SessionEnforceTireCompoundChange: number
    ResultsPositions: any
    ResultsFastestLap: ResultsFastestLap[]
    ResultsAverageLapTime: number
    ResultsNumCautionFlags: number
    ResultsNumCautionLaps: number
    ResultsNumLeadChanges: number
    ResultsLapsComplete: number
    ResultsOfficial: number
}

export interface ResultsFastestLap {
    CarIdx: number
    FastestLap: number
    FastestTime: number
}

export interface CameraInfo {
    Groups: Group[]
}

export interface Group {
    GroupNum?: number
    GroupName: string
    Cameras: Camera[]
    IsScenic?: boolean
}

export interface Camera {
    CameraNum?: number
    CameraName?: string
}

export interface RadioInfo {
    SelectedRadioNum: number
    Radios: Radio[]
}

export interface Radio {
    RadioNum: number
    HopCount: number
    NumFrequencies: number
    TunedToFrequencyNum: number
    ScanningIsOn: number
    Frequencies: Frequency[]
}

export interface Frequency {
    FrequencyNum: number
    FrequencyName: string
    Priority: number
    CarIdx: number
    EntryIdx: number
    ClubID: number
    CanScan: number
    CanSquawk?: number
    Muted?: number
    IsMutable: number
    IsDeletable: number
}

export interface DriverInfo {
    DriverCarIdx: number
    DriverUserID: number
    PaceCarIdx: number
    DriverHeadPosX: number
    DriverHeadPosY: number
    DriverHeadPosZ: number
    DriverCarIsElectric: number
    DriverCarIdleRPM: number
    DriverCarRedLine: number
    DriverCarEngCylinderCount: number
    DriverCarFuelKgPerLtr: number
    DriverCarFuelMaxLtr: number
    DriverCarMaxFuelPct: number
    DriverCarGearNumForward: number
    DriverCarGearNeutral: number
    DriverCarGearReverse: number
    DriverCarSLFirstRPM: number
    DriverCarSLShiftRPM: number
    DriverCarSLLastRPM: number
    DriverCarSLBlinkRPM: number
    DriverCarVersion: string
    DriverPitTrkPct: number
    DriverCarEstLapTime: number
    DriverSetupName: string
    DriverSetupIsModified: number
    DriverSetupLoadTypeName: string
    DriverSetupPassedTech: number
    DriverIncidentCount: number
    Drivers: SessionDriver[]
}

export interface SessionDriver {
    CarIdx: number
    UserName: string
    AbbrevName: any
    Initials: any
    UserID: number
    TeamID: number
    TeamName: string
    CarNumber: string
    CarNumberRaw: number
    CarPath: string
    CarClassID: number
    CarID: number
    CarIsPaceCar: number
    CarIsAI: number
    CarIsElectric: number
    CarScreenName: string
    CarScreenNameShort: string
    CarClassShortName: any
    CarClassRelSpeed: number
    CarClassLicenseLevel: number
    CarClassMaxFuelPct: string
    CarClassWeightPenalty: string
    CarClassPowerAdjust: string
    CarClassDryTireSetLimit: string
    CarClassColor: number
    CarClassEstLapTime: number
    IRating: number
    LicLevel: number
    LicSubLevel: number
    LicString: string
    LicColor: string
    IsSpectator: number
    CarDesignStr: string
    HelmetDesignStr: string
    SuitDesignStr: string
    BodyType: number
    FaceType: number
    HelmetType: number
    CarNumberDesignStr: string
    CarSponsor_1: number
    CarSponsor_2: number
    CurDriverIncidentCount: number
    TeamIncidentCount: number
}

export interface SplitTimeInfo {
    Sectors: Sector[]
}

export interface Sector {
    SectorNum: number
    SectorStartPct: number
}

export interface CarSetup {
    UpdateCount: number
    Tires: Tires
    Chassis: Chassis
}

export interface Tires {
    TireType: TireType
    LeftFront: LeftFront
    LeftRear: LeftRear
    RightFront: RightFront
    RightRear: RightRear
}

export interface TireType {
    TireType: string
}

export interface LeftFront {
    StartingPressure: string
    LastHotPressure: string
    LastTempsOMI: string
    TreadRemaining: string
}

export interface LeftRear {
    StartingPressure: string
    LastHotPressure: string
    LastTempsOMI: string
    TreadRemaining: string
}

export interface RightFront {
    StartingPressure: string
    LastHotPressure: string
    LastTempsIMO: string
    TreadRemaining: string
}

export interface RightRear {
    StartingPressure: string
    LastHotPressure: string
    LastTempsIMO: string
    TreadRemaining: string
}

export interface Chassis {
    Front: Front
    LeftFront: LeftFront2
    LeftRear: LeftRear2
    InCarDials: InCarDials
    RightFront: RightFront2
    RightRear: RightRear2
    Rear: Rear
}

export interface Front {
    ArbSize: string
    ArbSetting: number
    ToeIn: string
    BumpRubberLength: number
    CrossWeight: string
    NoseWeight: string
}

export interface LeftFront2 {
    CornerWeight: string
    RideHeight: string
    FenderHeight: string
    SpringRate: string
    SpringPerchOffset: string
    BumpStiffness: string
    ReboundStiffness: string
    Camber: string
}

export interface LeftRear2 {
    CornerWeight: string
    RideHeight: string
    FenderHeight: string
    SpringRate: string
    SpringPerchOffset: string
    BumpStiffness: string
    ReboundStiffness: string
    ToeIn: string
}

export interface InCarDials {
    BrakePressureBias: string
    BrakePads: string
    AbsSetting: string
    TcSetting: string
}

export interface RightFront2 {
    CornerWeight: string
    RideHeight: string
    FenderHeight: string
    SpringRate: string
    SpringPerchOffset: string
    BumpStiffness: string
    ReboundStiffness: string
    Camber: string
}

export interface RightRear2 {
    CornerWeight: string
    RideHeight: string
    FenderHeight: string
    SpringRate: string
    SpringPerchOffset: string
    BumpStiffness: string
    ReboundStiffness: string
    ToeIn: string
}

export interface Rear {
    FuelLevel: string
    ArbSize: string
    ArbSetting: number
    WingSetting: number
}

