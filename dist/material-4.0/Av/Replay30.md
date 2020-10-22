# Replay30

```text
material-4.0/Av/Replay30
```

```text
include('material-4.0/Av/Replay30')
```

|icon|element|
|---|---|
|![](Replay30.png)|![](Replay30.element.png)|



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
' loads the Replay30 element
include('material-4.0/Av/Replay30')
Replay30('replay_30', 'Replay30', 'an optional tech field')
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
' loads the Replay30 element
include('material-4.0/Av/Replay30')
Replay30('replay_30', 'Replay30', 'an optional tech field')
@enduml
```

