# CloudUpload


```text
material-4/File/CloudUpload
```

```text
include('material-4/File/CloudUpload')
```



| Illustration | CloudUpload |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/File/CloudUpload.png) | ![illustration for CloudUpload](../../material-4/File/CloudUpload.Local.png) |




## CloudUpload

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element CloudUpload
include('material-4/File/CloudUpload')

' renders the element
CloudUpload('CloudUpload', 'Cloud Upload', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CloudUpload
include('material-4/File/CloudUpload')

' renders the element
CloudUpload('CloudUpload', 'Cloud Upload', 'an optional tech label', 'an optional description')
@enduml
```

