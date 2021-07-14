# CloseFullscreen


```text
material-4/Action/CloseFullscreen
```

```text
include('material-4/Action/CloseFullscreen')
```



| Illustration | CloseFullscreen |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/CloseFullscreen.png) | ![illustration for CloseFullscreen](../../material-4/Action/CloseFullscreen.Local.png) |




## CloseFullscreen

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element CloseFullscreen
include('material-4/Action/CloseFullscreen')

' renders the element
CloseFullscreen('CloseFullscreen', 'Close Fullscreen', 'an optional tech label')
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

' loads the Item which embeds the element CloseFullscreen
include('material-4/Action/CloseFullscreen')

' renders the element
CloseFullscreen('CloseFullscreen', 'Close Fullscreen', 'an optional tech label')
@enduml
```

