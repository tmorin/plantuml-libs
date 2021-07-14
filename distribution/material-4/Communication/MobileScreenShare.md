# MobileScreenShare


```text
material-4/Communication/MobileScreenShare
```

```text
include('material-4/Communication/MobileScreenShare')
```



| Illustration | MobileScreenShare |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Communication/MobileScreenShare.png) | ![illustration for MobileScreenShare](../../material-4/Communication/MobileScreenShare.Local.png) |




## MobileScreenShare

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element MobileScreenShare
include('material-4/Communication/MobileScreenShare')

' renders the element
MobileScreenShare('MobileScreenShare', 'Mobile Screen Share', 'an optional tech label')
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

' loads the Item which embeds the element MobileScreenShare
include('material-4/Communication/MobileScreenShare')

' renders the element
MobileScreenShare('MobileScreenShare', 'Mobile Screen Share', 'an optional tech label')
@enduml
```

