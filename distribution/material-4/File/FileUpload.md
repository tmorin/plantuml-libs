# FileUpload


```text
material-4/File/FileUpload
```

```text
include('material-4/File/FileUpload')
```



| Illustration | FileUpload |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/File/FileUpload.png) | ![illustration for FileUpload](../../material-4/File/FileUpload.Local.png) |




## FileUpload

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FileUpload
include('material-4/File/FileUpload')

' renders the element
FileUpload('FileUpload', 'File Upload', 'an optional tech label')
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

' loads the Item which embeds the element FileUpload
include('material-4/File/FileUpload')

' renders the element
FileUpload('FileUpload', 'File Upload', 'an optional tech label')
@enduml
```

