# VideoLibrary


```text
material-4/Av/VideoLibrary
```

```text
include('material-4/Av/VideoLibrary')
```



| Illustration | VideoLibrary |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/VideoLibrary.png) | ![illustration for VideoLibrary](../../material-4/Av/VideoLibrary.Local.png) |




## VideoLibrary

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element VideoLibrary
include('material-4/Av/VideoLibrary')

' renders the element
VideoLibrary('VideoLibrary', 'Video Library', 'an optional tech label')
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

' loads the Item which embeds the element VideoLibrary
include('material-4/Av/VideoLibrary')

' renders the element
VideoLibrary('VideoLibrary', 'Video Library', 'an optional tech label')
@enduml
```

