# TurnUp


```text
fontawesome/Solid/TurnUp
```

```text
include('fontawesome/Solid/TurnUp')
```



| Illustration | TurnUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/TurnUp.png) | ![illustration for TurnUp](../../fontawesome/Solid/TurnUp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TurnUpXs>`
- `<$TurnUpSm>`
- `<$TurnUpMd>`
- `<$TurnUpLg>`





## TurnUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element TurnUp
include('fontawesome/Solid/TurnUp')

' renders the element
TurnUp('TurnUp', 'Turn Up', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TurnUp
include('fontawesome/Solid/TurnUp')

' renders the element
TurnUp('TurnUp', 'Turn Up', 'an optional tech label', 'an optional description')
@enduml
```

