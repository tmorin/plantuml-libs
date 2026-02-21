# ScreenShare


```text
material/Communication/ScreenShare
```

```text
include('material/Communication/ScreenShare')
```



| Illustration | ScreenShare |
| :---: | :---: |
| ![illustration for Illustration](../../material/Communication/ScreenShare.png) | ![illustration for ScreenShare](../../material/Communication/ScreenShare.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ScreenShareXs>`
- `<$ScreenShareSm>`
- `<$ScreenShareMd>`
- `<$ScreenShareLg>`





## ScreenShare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element ScreenShare
include('material/Communication/ScreenShare')

' renders the element
ScreenShare('ScreenShare', 'Screen Share', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ScreenShare
include('material/Communication/ScreenShare')

' renders the element
ScreenShare('ScreenShare', 'Screen Share', 'an optional tech label', 'an optional description')
@enduml
```

