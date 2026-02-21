# PlaylistAddCheck


```text
material/Av/PlaylistAddCheck
```

```text
include('material/Av/PlaylistAddCheck')
```



| Illustration | PlaylistAddCheck |
| :---: | :---: |
| ![illustration for Illustration](../../material/Av/PlaylistAddCheck.png) | ![illustration for PlaylistAddCheck](../../material/Av/PlaylistAddCheck.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PlaylistAddCheckXs>`
- `<$PlaylistAddCheckSm>`
- `<$PlaylistAddCheckMd>`
- `<$PlaylistAddCheckLg>`





## PlaylistAddCheck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element PlaylistAddCheck
include('material/Av/PlaylistAddCheck')

' renders the element
PlaylistAddCheck('PlaylistAddCheck', 'Playlist Add Check', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PlaylistAddCheck
include('material/Av/PlaylistAddCheck')

' renders the element
PlaylistAddCheck('PlaylistAddCheck', 'Playlist Add Check', 'an optional tech label', 'an optional description')
@enduml
```

