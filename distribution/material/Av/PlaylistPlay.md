# PlaylistPlay


```text
material/Av/PlaylistPlay
```

```text
include('material/Av/PlaylistPlay')
```



| Illustration | PlaylistPlay |
| :---: | :---: |
| ![illustration for Illustration](../../material/Av/PlaylistPlay.png) | ![illustration for PlaylistPlay](../../material/Av/PlaylistPlay.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PlaylistPlayXs>`
- `<$PlaylistPlaySm>`
- `<$PlaylistPlayMd>`
- `<$PlaylistPlayLg>`





## PlaylistPlay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element PlaylistPlay
include('material/Av/PlaylistPlay')

' renders the element
PlaylistPlay('PlaylistPlay', 'Playlist Play', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PlaylistPlay
include('material/Av/PlaylistPlay')

' renders the element
PlaylistPlay('PlaylistPlay', 'Playlist Play', 'an optional tech label', 'an optional description')
@enduml
```

