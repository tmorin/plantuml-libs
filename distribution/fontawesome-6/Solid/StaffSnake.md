# StaffSnake


```text
fontawesome-6/Solid/StaffSnake
```

```text
include('fontawesome-6/Solid/StaffSnake')
```



| Illustration | StaffSnake |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/StaffSnake.png) | ![illustration for StaffSnake](../../fontawesome-6/Solid/StaffSnake.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$StaffSnakeXs>`
- `<$StaffSnakeSm>`
- `<$StaffSnakeMd>`
- `<$StaffSnakeLg>`





## StaffSnake

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element StaffSnake
include('fontawesome-6/Solid/StaffSnake')

' renders the element
StaffSnake('StaffSnake', 'Staff Snake', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element StaffSnake
include('fontawesome-6/Solid/StaffSnake')

' renders the element
StaffSnake('StaffSnake', 'Staff Snake', 'an optional tech label', 'an optional description')
@enduml
```

