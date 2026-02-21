# ArrowTurnDown


```text
fontawesome/Solid/ArrowTurnDown
```

```text
include('fontawesome/Solid/ArrowTurnDown')
```



| Illustration | ArrowTurnDown |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ArrowTurnDown.png) | ![illustration for ArrowTurnDown](../../fontawesome/Solid/ArrowTurnDown.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ArrowTurnDownXs>`
- `<$ArrowTurnDownSm>`
- `<$ArrowTurnDownMd>`
- `<$ArrowTurnDownLg>`





## ArrowTurnDown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ArrowTurnDown
include('fontawesome/Solid/ArrowTurnDown')

' renders the element
ArrowTurnDown('ArrowTurnDown', 'Arrow Turn Down', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ArrowTurnDown
include('fontawesome/Solid/ArrowTurnDown')

' renders the element
ArrowTurnDown('ArrowTurnDown', 'Arrow Turn Down', 'an optional tech label', 'an optional description')
@enduml
```

