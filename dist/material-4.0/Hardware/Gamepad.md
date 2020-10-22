# Gamepad

```text
material-4.0/Hardware/Gamepad
```

```text
include('material-4.0/Hardware/Gamepad')
```

|icon|element|
|---|---|
|![](Gamepad.png)|![](Gamepad.element.png)|



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
' loads the Gamepad element
include('material-4.0/Hardware/Gamepad')
Gamepad('gamepad', 'Gamepad', 'an optional tech field')
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
' loads the Gamepad element
include('material-4.0/Hardware/Gamepad')
Gamepad('gamepad', 'Gamepad', 'an optional tech field')
@enduml
```

