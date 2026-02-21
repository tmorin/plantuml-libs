# JetFighterUp


```text
fontawesome/Solid/JetFighterUp
```

```text
include('fontawesome/Solid/JetFighterUp')
```



| Illustration | JetFighterUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/JetFighterUp.png) | ![illustration for JetFighterUp](../../fontawesome/Solid/JetFighterUp.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JetFighterUpXs>`
- `<$JetFighterUpSm>`
- `<$JetFighterUpMd>`
- `<$JetFighterUpLg>`





## JetFighterUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element JetFighterUp
include('fontawesome/Solid/JetFighterUp')

' renders the element
JetFighterUp('JetFighterUp', 'Jet Fighter Up', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element JetFighterUp
include('fontawesome/Solid/JetFighterUp')

' renders the element
JetFighterUp('JetFighterUp', 'Jet Fighter Up', 'an optional tech label', 'an optional description')
@enduml
```

