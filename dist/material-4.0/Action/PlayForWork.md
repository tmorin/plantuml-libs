# Play For Work

```text
material-4.0/Action/PlayForWork
```

```text
include('material-4.0/Action/PlayForWork')
```

|icon|element|
|---|---|
|![](PlayForWork.png)|![](PlayForWork.element.png)|



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
' loads the PlayForWork element
include('material-4.0/Action/PlayForWork')
PlayForWork('play_for_work', 'Play For Work', 'an optional tech field')
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
' loads the PlayForWork element
include('material-4.0/Action/PlayForWork')
PlayForWork('play_for_work', 'Play For Work', 'an optional tech field')
@enduml
```

