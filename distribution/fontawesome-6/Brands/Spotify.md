# Spotify


```text
fontawesome-6/Brands/Spotify
```

```text
include('fontawesome-6/Brands/Spotify')
```



| Illustration | Spotify |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Brands/Spotify.png) | ![illustration for Spotify](../../fontawesome-6/Brands/Spotify.Local.png) |




## Spotify

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Spotify
include('fontawesome-6/Brands/Spotify')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Spotify
include('fontawesome-6/Brands/Spotify')

' renders the element
Spotify('Spotify', 'Spotify', 'an optional tech label')
@enduml
```

