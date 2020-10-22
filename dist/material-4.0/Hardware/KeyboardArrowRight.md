# Keyboard Arrow Right

```text
material-4.0/Hardware/KeyboardArrowRight
```

```text
include('material-4.0/Hardware/KeyboardArrowRight')
```

|icon|element|
|---|---|
|![](KeyboardArrowRight.png)|![](KeyboardArrowRight.element.png)|



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
' loads the KeyboardArrowRight element
include('material-4.0/Hardware/KeyboardArrowRight')
KeyboardArrowRight('keyboard_arrow_right', 'Keyboard Arrow Right', 'an optional tech field')
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
' loads the KeyboardArrowRight element
include('material-4.0/Hardware/KeyboardArrowRight')
KeyboardArrowRight('keyboard_arrow_right', 'Keyboard Arrow Right', 'an optional tech field')
@enduml
```

