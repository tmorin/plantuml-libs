# PermCameraMic


```text
material-4/Action/PermCameraMic
```

```text
include('material-4/Action/PermCameraMic')
```



| Illustration | PermCameraMic |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/PermCameraMic.png) | ![illustration for PermCameraMic](../../material-4/Action/PermCameraMic.Local.png) |




## PermCameraMic

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PermCameraMic
include('material-4/Action/PermCameraMic')

' renders the element
PermCameraMic('PermCameraMic', 'Perm Camera Mic', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PermCameraMic
include('material-4/Action/PermCameraMic')

' renders the element
PermCameraMic('PermCameraMic', 'Perm Camera Mic', 'an optional tech label', 'an optional description')
@enduml
```

