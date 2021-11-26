# MusicVideo


```text
material-4/Av/MusicVideo
```

```text
include('material-4/Av/MusicVideo')
```



| Illustration | MusicVideo |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/MusicVideo.png) | ![illustration for MusicVideo](../../material-4/Av/MusicVideo.Local.png) |




## MusicVideo

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element MusicVideo
include('material-4/Av/MusicVideo')

' renders the element
MusicVideo('MusicVideo', 'Music Video', 'an optional tech label')
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

' loads the Item which embeds the element MusicVideo
include('material-4/Av/MusicVideo')

' renders the element
MusicVideo('MusicVideo', 'Music Video', 'an optional tech label')
@enduml
```

