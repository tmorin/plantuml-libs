# Gamepad


```text
fontawesome-5/Solid/Gamepad
```

```text
include('fontawesome-5/Solid/Gamepad')
```



| Illustration | Gamepad |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Gamepad.png) | ![illustration for Gamepad](../../fontawesome-5/Solid/Gamepad.Local.png) |




## Gamepad

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Gamepad
include('fontawesome-5/Solid/Gamepad')

' renders the element
Gamepad('Gamepad', 'Gamepad', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Gamepad
include('fontawesome-5/Solid/Gamepad')

' renders the element
Gamepad('Gamepad', 'Gamepad', 'an optional tech label')
@enduml
```

