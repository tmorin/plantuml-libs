# CloseFullscreen


```text
material/Action/CloseFullscreen
```

```text
include('material/Action/CloseFullscreen')
```



| Illustration | CloseFullscreen |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/CloseFullscreen.png) | ![illustration for CloseFullscreen](../../material/Action/CloseFullscreen.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CloseFullscreenXs>`
- `<$CloseFullscreenSm>`
- `<$CloseFullscreenMd>`
- `<$CloseFullscreenLg>`





## CloseFullscreen

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element CloseFullscreen
include('material/Action/CloseFullscreen')

' renders the element
CloseFullscreen('CloseFullscreen', 'Close Fullscreen', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CloseFullscreen
include('material/Action/CloseFullscreen')

' renders the element
CloseFullscreen('CloseFullscreen', 'Close Fullscreen', 'an optional tech label', 'an optional description')
@enduml
```

