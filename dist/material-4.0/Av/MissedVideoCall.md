# Missed Video Call

```text
material-4.0/Av/MissedVideoCall
```

```text
include('material-4.0/Av/MissedVideoCall')
```

|icon|element|
|---|---|
|![](MissedVideoCall.png)|![](MissedVideoCall.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the material-4.0 bootstrap
include('material-4.0/bootstrap')
' loads the MissedVideoCall element
include('material-4.0/Av/MissedVideoCall')
MissedVideoCall('missed_video_call', 'Missed Video Call', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the material-4.0 bootstrap
include('material-4.0/bootstrap')
' loads the MissedVideoCall element
include('material-4.0/Av/MissedVideoCall')
MissedVideoCall('missed_video_call', 'Missed Video Call', 'an optional tech field')
@enduml
```

