# ArrowsTurnToDots


```text
fontawesome/Solid/ArrowsTurnToDots
```

```text
include('fontawesome/Solid/ArrowsTurnToDots')
```



| Illustration | ArrowsTurnToDots |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ArrowsTurnToDots.png) | ![illustration for ArrowsTurnToDots](../../fontawesome/Solid/ArrowsTurnToDots.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ArrowsTurnToDotsXs>`
- `<$ArrowsTurnToDotsSm>`
- `<$ArrowsTurnToDotsMd>`
- `<$ArrowsTurnToDotsLg>`





## ArrowsTurnToDots

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ArrowsTurnToDots
include('fontawesome/Solid/ArrowsTurnToDots')

' renders the element
ArrowsTurnToDots('ArrowsTurnToDots', 'Arrows Turn To Dots', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ArrowsTurnToDots
include('fontawesome/Solid/ArrowsTurnToDots')

' renders the element
ArrowsTurnToDots('ArrowsTurnToDots', 'Arrows Turn To Dots', 'an optional tech label', 'an optional description')
@enduml
```

