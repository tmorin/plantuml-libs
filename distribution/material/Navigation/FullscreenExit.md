# FullscreenExit


```text
material/Navigation/FullscreenExit
```

```text
include('material/Navigation/FullscreenExit')
```



| Illustration | FullscreenExit |
| :---: | :---: |
| ![illustration for Illustration](../../material/Navigation/FullscreenExit.png) | ![illustration for FullscreenExit](../../material/Navigation/FullscreenExit.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FullscreenExitXs>`
- `<$FullscreenExitSm>`
- `<$FullscreenExitMd>`
- `<$FullscreenExitLg>`





## FullscreenExit

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element FullscreenExit
include('material/Navigation/FullscreenExit')

' renders the element
FullscreenExit('FullscreenExit', 'Fullscreen Exit', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FullscreenExit
include('material/Navigation/FullscreenExit')

' renders the element
FullscreenExit('FullscreenExit', 'Fullscreen Exit', 'an optional tech label', 'an optional description')
@enduml
```

