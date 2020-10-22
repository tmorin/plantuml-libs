# Queue Play Next

```text
material-4.0/Av/QueuePlayNext
```

```text
include('material-4.0/Av/QueuePlayNext')
```

|icon|element|
|---|---|
|![](QueuePlayNext.png)|![](QueuePlayNext.element.png)|



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
' loads the QueuePlayNext element
include('material-4.0/Av/QueuePlayNext')
QueuePlayNext('queue_play_next', 'Queue Play Next', 'an optional tech field')
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
' loads the QueuePlayNext element
include('material-4.0/Av/QueuePlayNext')
QueuePlayNext('queue_play_next', 'Queue Play Next', 'an optional tech field')
@enduml
```

