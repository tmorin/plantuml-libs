# PlaylistAddCheck


```text
material-4/Av/PlaylistAddCheck
```

```text
include('material-4/Av/PlaylistAddCheck')
```



| Illustration | PlaylistAddCheck |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/PlaylistAddCheck.png) | ![illustration for PlaylistAddCheck](../../material-4/Av/PlaylistAddCheck.Local.png) |




## PlaylistAddCheck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PlaylistAddCheck
include('material-4/Av/PlaylistAddCheck')

' renders the element
PlaylistAddCheck('PlaylistAddCheck', 'Playlist Add Check', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element PlaylistAddCheck
include('material-4/Av/PlaylistAddCheck')

' renders the element
PlaylistAddCheck('PlaylistAddCheck', 'Playlist Add Check', 'an optional tech label')
@enduml
```

