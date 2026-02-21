# JetFighter


```text
fontawesome/Solid/JetFighter
```

```text
include('fontawesome/Solid/JetFighter')
```



| Illustration | JetFighter |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/JetFighter.png) | ![illustration for JetFighter](../../fontawesome/Solid/JetFighter.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$JetFighterXs>`
- `<$JetFighterSm>`
- `<$JetFighterMd>`
- `<$JetFighterLg>`





## JetFighter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element JetFighter
include('fontawesome/Solid/JetFighter')

' renders the element
JetFighter('JetFighter', 'Jet Fighter', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element JetFighter
include('fontawesome/Solid/JetFighter')

' renders the element
JetFighter('JetFighter', 'Jet Fighter', 'an optional tech label', 'an optional description')
@enduml
```

