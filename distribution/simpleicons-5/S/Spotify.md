# Spotify


```text
simpleicons-5/S/Spotify
```

```text
include('simpleicons-5/S/Spotify')
```



| Illustration | Spotify |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Spotify.png) | ![illustration for Spotify](../../simpleicons-5/S/Spotify.Local.png) |




## Spotify

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Spotify
include('simpleicons-5/S/Spotify')

' renders the element
Spotify('Spotify', 'Spotify', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Spotify
include('simpleicons-5/S/Spotify')

' renders the element
Spotify('Spotify', 'Spotify', 'an optional tech label')
@enduml
```

