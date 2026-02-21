# Leagueoflegends


```text
simpleicons/L/Leagueoflegends
```

```text
include('simpleicons/L/Leagueoflegends')
```



| Illustration | Leagueoflegends |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/L/Leagueoflegends.png) | ![illustration for Leagueoflegends](../../simpleicons/L/Leagueoflegends.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$LeagueoflegendsXs>`
- `<$LeagueoflegendsSm>`
- `<$LeagueoflegendsMd>`
- `<$LeagueoflegendsLg>`





## Leagueoflegends

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Leagueoflegends
include('simpleicons/L/Leagueoflegends')

' renders the element
Leagueoflegends('Leagueoflegends', 'Leagueoflegends', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Leagueoflegends
include('simpleicons/L/Leagueoflegends')

' renders the element
Leagueoflegends('Leagueoflegends', 'Leagueoflegends', 'an optional tech label', 'an optional description')
@enduml
```

