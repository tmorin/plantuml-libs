# Premierleague


```text
simpleicons-14/P/Premierleague
```

```text
include('simpleicons-14/P/Premierleague')
```



| Illustration | Premierleague |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/P/Premierleague.png) | ![illustration for Premierleague](../../simpleicons-14/P/Premierleague.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PremierleagueXs>`
- `<$PremierleagueSm>`
- `<$PremierleagueMd>`
- `<$PremierleagueLg>`





## Premierleague

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Premierleague
include('simpleicons-14/P/Premierleague')

' renders the element
Premierleague('Premierleague', 'Premierleague', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Premierleague
include('simpleicons-14/P/Premierleague')

' renders the element
Premierleague('Premierleague', 'Premierleague', 'an optional tech label', 'an optional description')
@enduml
```

