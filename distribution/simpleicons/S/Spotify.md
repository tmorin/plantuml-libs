# Spotify


```text
simpleicons/S/Spotify
```

```text
include('simpleicons/S/Spotify')
```



| Illustration | Spotify |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Spotify.png) | ![illustration for Spotify](../../simpleicons/S/Spotify.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SpotifyXs>`
- `<$SpotifySm>`
- `<$SpotifyMd>`
- `<$SpotifyLg>`





## Spotify

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Spotify
include('simpleicons/S/Spotify')

' renders the element
Spotify('Spotify', 'Spotify', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Spotify
include('simpleicons/S/Spotify')

' renders the element
Spotify('Spotify', 'Spotify', 'an optional tech label', 'an optional description')
@enduml
```

