# Gamepad


```text
fontawesome-6/Solid/Gamepad
```

```text
include('fontawesome-6/Solid/Gamepad')
```



| Illustration | Gamepad |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/Gamepad.png) | ![illustration for Gamepad](../../fontawesome-6/Solid/Gamepad.Local.png) |




## Gamepad

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Gamepad
include('fontawesome-6/Solid/Gamepad')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Gamepad
include('fontawesome-6/Solid/Gamepad')

' renders the element
Gamepad('Gamepad', 'Gamepad', 'an optional tech label', 'an optional description')
@enduml
```

