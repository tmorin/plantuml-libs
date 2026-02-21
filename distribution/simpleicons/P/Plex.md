# Plex


```text
simpleicons/P/Plex
```

```text
include('simpleicons/P/Plex')
```



| Illustration | Plex |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Plex.png) | ![illustration for Plex](../../simpleicons/P/Plex.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PlexXs>`
- `<$PlexSm>`
- `<$PlexMd>`
- `<$PlexLg>`





## Plex

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Plex
include('simpleicons/P/Plex')

' renders the element
Plex('Plex', 'Plex', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Plex
include('simpleicons/P/Plex')

' renders the element
Plex('Plex', 'Plex', 'an optional tech label', 'an optional description')
@enduml
```

