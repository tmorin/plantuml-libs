# Replay10

```text
material-4.0/Av/Replay10
```

```text
include('material-4.0/Av/Replay10')
```

|icon|element|
|---|---|
|![](Replay10.png)|![](Replay10.element.png)|



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
' loads the Replay10 element
include('material-4.0/Av/Replay10')
Replay10('replay_10', 'Replay10', 'an optional tech field')
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
' loads the Replay10 element
include('material-4.0/Av/Replay10')
Replay10('replay_10', 'Replay10', 'an optional tech field')
@enduml
```

