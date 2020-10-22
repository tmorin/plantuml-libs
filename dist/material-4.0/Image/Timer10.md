# Timer10

```text
material-4.0/Image/Timer10
```

```text
include('material-4.0/Image/Timer10')
```

|icon|element|
|---|---|
|![](Timer10.png)|![](Timer10.element.png)|



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
' loads the Timer10 element
include('material-4.0/Image/Timer10')
Timer10('timer_10', 'Timer10', 'an optional tech field')
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
' loads the Timer10 element
include('material-4.0/Image/Timer10')
Timer10('timer_10', 'Timer10', 'an optional tech field')
@enduml
```

