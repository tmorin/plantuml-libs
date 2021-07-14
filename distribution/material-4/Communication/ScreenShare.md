# ScreenShare


```text
material-4/Communication/ScreenShare
```

```text
include('material-4/Communication/ScreenShare')
```



| Illustration | ScreenShare |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/ScreenShare.png) | ![illustration for ScreenShare](../../material-4/Communication/ScreenShare.Local.png) |




## ScreenShare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ScreenShare
include('material-4/Communication/ScreenShare')

' renders the element
ScreenShare('ScreenShare', 'Screen Share', 'an optional tech label')
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

' loads the Item which embeds the element ScreenShare
include('material-4/Communication/ScreenShare')

' renders the element
ScreenShare('ScreenShare', 'Screen Share', 'an optional tech label')
@enduml
```

