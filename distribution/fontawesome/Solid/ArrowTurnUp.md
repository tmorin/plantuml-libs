# ArrowTurnUp


```text
fontawesome/Solid/ArrowTurnUp
```

```text
include('fontawesome/Solid/ArrowTurnUp')
```



| Illustration | ArrowTurnUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ArrowTurnUp.png) | ![illustration for ArrowTurnUp](../../fontawesome/Solid/ArrowTurnUp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ArrowTurnUpXs>`
- `<$ArrowTurnUpSm>`
- `<$ArrowTurnUpMd>`
- `<$ArrowTurnUpLg>`





## ArrowTurnUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ArrowTurnUp
include('fontawesome/Solid/ArrowTurnUp')

' renders the element
ArrowTurnUp('ArrowTurnUp', 'Arrow Turn Up', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ArrowTurnUp
include('fontawesome/Solid/ArrowTurnUp')

' renders the element
ArrowTurnUp('ArrowTurnUp', 'Arrow Turn Up', 'an optional tech label', 'an optional description')
@enduml
```

