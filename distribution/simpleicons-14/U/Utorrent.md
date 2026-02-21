# Utorrent


```text
simpleicons-14/U/Utorrent
```

```text
include('simpleicons-14/U/Utorrent')
```



| Illustration | Utorrent |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/U/Utorrent.png) | ![illustration for Utorrent](../../simpleicons-14/U/Utorrent.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Utorrent
include('simpleicons-14/U/Utorrent')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Utorrent
include('simpleicons-14/U/Utorrent')

' renders the element
Utorrent('Utorrent', 'Utorrent', 'an optional tech label', 'an optional description')
@enduml
```

