# Utorrent


```text
simpleicons/U/Utorrent
```

```text
include('simpleicons/U/Utorrent')
```



| Illustration | Utorrent |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/U/Utorrent.png) | ![illustration for Utorrent](../../simpleicons/U/Utorrent.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UtorrentXs>`
- `<$UtorrentSm>`
- `<$UtorrentMd>`
- `<$UtorrentLg>`





## Utorrent

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Utorrent
include('simpleicons/U/Utorrent')

' renders the element
Utorrent('Utorrent', 'Utorrent', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Utorrent
include('simpleicons/U/Utorrent')

' renders the element
Utorrent('Utorrent', 'Utorrent', 'an optional tech label', 'an optional description')
@enduml
```

