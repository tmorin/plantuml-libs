# Arrow Right

```text
material-4.0/Navigation/ArrowRight
```

```text
include('material-4.0/Navigation/ArrowRight')
```

|icon|element|
|---|---|
|![](ArrowRight.png)|![](ArrowRight.element.png)|



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
' loads the ArrowRight element
include('material-4.0/Navigation/ArrowRight')
ArrowRight('arrow_right', 'Arrow Right', 'an optional tech field')
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
' loads the ArrowRight element
include('material-4.0/Navigation/ArrowRight')
ArrowRight('arrow_right', 'Arrow Right', 'an optional tech field')
@enduml
```

