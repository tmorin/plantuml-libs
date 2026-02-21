# Leagueoflegends


```text
simpleicons-14/L/Leagueoflegends
```

```text
include('simpleicons-14/L/Leagueoflegends')
```



| Illustration | Leagueoflegends |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/L/Leagueoflegends.png) | ![illustration for Leagueoflegends](../../simpleicons-14/L/Leagueoflegends.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Leagueoflegends
include('simpleicons-14/L/Leagueoflegends')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Leagueoflegends
include('simpleicons-14/L/Leagueoflegends')

' renders the element
Leagueoflegends('Leagueoflegends', 'Leagueoflegends', 'an optional tech label', 'an optional description')
@enduml
```

