# RodSnake


```text
fontawesome/Solid/RodSnake
```

```text
include('fontawesome/Solid/RodSnake')
```



| Illustration | RodSnake |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/RodSnake.png) | ![illustration for RodSnake](../../fontawesome/Solid/RodSnake.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RodSnakeXs>`
- `<$RodSnakeSm>`
- `<$RodSnakeMd>`
- `<$RodSnakeLg>`





## RodSnake

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element RodSnake
include('fontawesome/Solid/RodSnake')

' renders the element
RodSnake('RodSnake', 'Rod Snake', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element RodSnake
include('fontawesome/Solid/RodSnake')

' renders the element
RodSnake('RodSnake', 'Rod Snake', 'an optional tech label', 'an optional description')
@enduml
```

