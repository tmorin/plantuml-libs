# Playlist Play

```text
material-4.0/Av/PlaylistPlay
```

```text
include('material-4.0/Av/PlaylistPlay')
```

|icon|element|
|---|---|
|![](PlaylistPlay.png)|![](PlaylistPlay.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the material-4.0 bootstrap
include('material-4.0/bootstrap')
' loads the PlaylistPlay element
include('material-4.0/Av/PlaylistPlay')
PlaylistPlay('playlist_play', 'Playlist Play', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the material-4.0 bootstrap
include('material-4.0/bootstrap')
' loads the PlaylistPlay element
include('material-4.0/Av/PlaylistPlay')
PlaylistPlay('playlist_play', 'Playlist Play', 'an optional tech field')
@enduml
```

