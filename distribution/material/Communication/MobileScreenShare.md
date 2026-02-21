# MobileScreenShare


```text
material/Communication/MobileScreenShare
```

```text
include('material/Communication/MobileScreenShare')
```



| Illustration | MobileScreenShare |
| :---: | :---: |
| ![illustration for Illustration](../../material/Communication/MobileScreenShare.png) | ![illustration for MobileScreenShare](../../material/Communication/MobileScreenShare.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MobileScreenShareXs>`
- `<$MobileScreenShareSm>`
- `<$MobileScreenShareMd>`
- `<$MobileScreenShareLg>`





## MobileScreenShare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element MobileScreenShare
include('material/Communication/MobileScreenShare')

' renders the element
MobileScreenShare('MobileScreenShare', 'Mobile Screen Share', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MobileScreenShare
include('material/Communication/MobileScreenShare')

' renders the element
MobileScreenShare('MobileScreenShare', 'Mobile Screen Share', 'an optional tech label', 'an optional description')
@enduml
```

