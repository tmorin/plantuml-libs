# Qbittorrent


```text
simpleicons/Q/Qbittorrent
```

```text
include('simpleicons/Q/Qbittorrent')
```



| Illustration | Qbittorrent |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/Q/Qbittorrent.png) | ![illustration for Qbittorrent](../../simpleicons/Q/Qbittorrent.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$QbittorrentXs>`
- `<$QbittorrentSm>`
- `<$QbittorrentMd>`
- `<$QbittorrentLg>`





## Qbittorrent

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Qbittorrent
include('simpleicons/Q/Qbittorrent')

' renders the element
Qbittorrent('Qbittorrent', 'Qbittorrent', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Qbittorrent
include('simpleicons/Q/Qbittorrent')

' renders the element
Qbittorrent('Qbittorrent', 'Qbittorrent', 'an optional tech label', 'an optional description')
@enduml
```

