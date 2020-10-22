# Arrow Circle Up

```text
material-4.0/Action/ArrowCircleUp
```

```text
include('material-4.0/Action/ArrowCircleUp')
```

|icon|element|
|---|---|
|![](ArrowCircleUp.png)|![](ArrowCircleUp.element.png)|



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
' loads the ArrowCircleUp element
include('material-4.0/Action/ArrowCircleUp')
ArrowCircleUp('arrow_circle_up', 'Arrow Circle Up', 'an optional tech field')
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
' loads the ArrowCircleUp element
include('material-4.0/Action/ArrowCircleUp')
ArrowCircleUp('arrow_circle_up', 'Arrow Circle Up', 'an optional tech field')
@enduml
```

