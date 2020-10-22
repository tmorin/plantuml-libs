# Arrow Circle Down

```text
material-4.0/Action/ArrowCircleDown
```

```text
include('material-4.0/Action/ArrowCircleDown')
```

|icon|element|
|---|---|
|![](ArrowCircleDown.png)|![](ArrowCircleDown.element.png)|



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
' loads the ArrowCircleDown element
include('material-4.0/Action/ArrowCircleDown')
ArrowCircleDown('arrow_circle_down', 'Arrow Circle Down', 'an optional tech field')
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
' loads the ArrowCircleDown element
include('material-4.0/Action/ArrowCircleDown')
ArrowCircleDown('arrow_circle_down', 'Arrow Circle Down', 'an optional tech field')
@enduml
```

