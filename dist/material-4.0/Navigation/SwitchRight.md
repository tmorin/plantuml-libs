# Switch Right

```text
material-4.0/Navigation/SwitchRight
```

```text
include('material-4.0/Navigation/SwitchRight')
```

|icon|element|
|---|---|
|![](SwitchRight.png)|![](SwitchRight.element.png)|



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
' loads the SwitchRight element
include('material-4.0/Navigation/SwitchRight')
SwitchRight('switch_right', 'Switch Right', 'an optional tech field')
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
' loads the SwitchRight element
include('material-4.0/Navigation/SwitchRight')
SwitchRight('switch_right', 'Switch Right', 'an optional tech field')
@enduml
```

