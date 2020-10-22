# Arrow Back Ios

```text
material-4.0/Navigation/ArrowBackIos
```

```text
include('material-4.0/Navigation/ArrowBackIos')
```

|icon|element|
|---|---|
|![](ArrowBackIos.png)|![](ArrowBackIos.element.png)|



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
' loads the ArrowBackIos element
include('material-4.0/Navigation/ArrowBackIos')
ArrowBackIos('arrow_back_ios', 'Arrow Back Ios', 'an optional tech field')
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
' loads the ArrowBackIos element
include('material-4.0/Navigation/ArrowBackIos')
ArrowBackIos('arrow_back_ios', 'Arrow Back Ios', 'an optional tech field')
@enduml
```

