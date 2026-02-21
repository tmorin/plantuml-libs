# Games


```text
material/Av/Games
```

```text
include('material/Av/Games')
```



| Illustration | Games |
| :---: | :---: |
| ![illustration for Illustration](../../material/Av/Games.png) | ![illustration for Games](../../material/Av/Games.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$GamesXs>`
- `<$GamesSm>`
- `<$GamesMd>`
- `<$GamesLg>`





## Games

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element Games
include('material/Av/Games')

' renders the element
Games('Games', 'Games', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element Games
include('material/Av/Games')

' renders the element
Games('Games', 'Games', 'an optional tech label', 'an optional description')
@enduml
```

