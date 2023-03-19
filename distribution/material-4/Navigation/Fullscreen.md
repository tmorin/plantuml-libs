# Fullscreen


```text
material-4/Navigation/Fullscreen
```

```text
include('material-4/Navigation/Fullscreen')
```



| Illustration | Fullscreen |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Navigation/Fullscreen.png) | ![illustration for Fullscreen](../../material-4/Navigation/Fullscreen.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FullscreenXs>`
- `<$FullscreenSm>`
- `<$FullscreenMd>`
- `<$FullscreenLg>`





## Fullscreen

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Fullscreen
include('material-4/Navigation/Fullscreen')

' renders the element
Fullscreen('Fullscreen', 'Fullscreen', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Fullscreen
include('material-4/Navigation/Fullscreen')

' renders the element
Fullscreen('Fullscreen', 'Fullscreen', 'an optional tech label', 'an optional description')
@enduml
```

