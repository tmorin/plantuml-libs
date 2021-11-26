# LinkedCamera


```text
material-4/Image/LinkedCamera
```

```text
include('material-4/Image/LinkedCamera')
```



| Illustration | LinkedCamera |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Image/LinkedCamera.png) | ![illustration for LinkedCamera](../../material-4/Image/LinkedCamera.Local.png) |




## LinkedCamera

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element LinkedCamera
include('material-4/Image/LinkedCamera')

' renders the element
LinkedCamera('LinkedCamera', 'Linked Camera', 'an optional tech label')
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

' loads the Item which embeds the element LinkedCamera
include('material-4/Image/LinkedCamera')

' renders the element
LinkedCamera('LinkedCamera', 'Linked Camera', 'an optional tech label')
@enduml
```

