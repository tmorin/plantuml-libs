# Gamepad


```text
material-4/Hardware/Gamepad
```

```text
include('material-4/Hardware/Gamepad')
```



| Illustration | Gamepad |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Hardware/Gamepad.png) | ![illustration for Gamepad](../../material-4/Hardware/Gamepad.Local.png) |




## Gamepad

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Gamepad
include('material-4/Hardware/Gamepad')

' renders the element
Gamepad('Gamepad', 'Gamepad', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Gamepad
include('material-4/Hardware/Gamepad')

' renders the element
Gamepad('Gamepad', 'Gamepad', 'an optional tech label', 'an optional description')
@enduml
```

