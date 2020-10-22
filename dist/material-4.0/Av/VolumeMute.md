# Volume Mute

```text
material-4.0/Av/VolumeMute
```

```text
include('material-4.0/Av/VolumeMute')
```

|icon|element|
|---|---|
|![](VolumeMute.png)|![](VolumeMute.element.png)|



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
' loads the VolumeMute element
include('material-4.0/Av/VolumeMute')
VolumeMute('volume_mute', 'Volume Mute', 'an optional tech field')
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
' loads the VolumeMute element
include('material-4.0/Av/VolumeMute')
VolumeMute('volume_mute', 'Volume Mute', 'an optional tech field')
@enduml
```

