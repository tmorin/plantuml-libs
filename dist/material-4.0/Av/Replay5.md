# Replay5

```text
material-4.0/Av/Replay5
```

```text
include('material-4.0/Av/Replay5')
```

|icon|element|
|---|---|
|![](Replay5.png)|![](Replay5.element.png)|



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
' loads the Replay5 element
include('material-4.0/Av/Replay5')
Replay5('replay_5', 'Replay5', 'an optional tech field')
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
' loads the Replay5 element
include('material-4.0/Av/Replay5')
Replay5('replay_5', 'Replay5', 'an optional tech field')
@enduml
```

