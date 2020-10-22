# Tap And Play

```text
material-4.0/Notification/TapAndPlay
```

```text
include('material-4.0/Notification/TapAndPlay')
```

|icon|element|
|---|---|
|![](TapAndPlay.png)|![](TapAndPlay.element.png)|



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
' loads the TapAndPlay element
include('material-4.0/Notification/TapAndPlay')
TapAndPlay('tap_and_play', 'Tap And Play', 'an optional tech field')
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
' loads the TapAndPlay element
include('material-4.0/Notification/TapAndPlay')
TapAndPlay('tap_and_play', 'Tap And Play', 'an optional tech field')
@enduml
```

