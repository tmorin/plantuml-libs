# FileUpload


```text
fontawesome-5/Solid/FileUpload
```

```text
include('fontawesome-5/Solid/FileUpload')
```



| Illustration | FileUpload |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/FileUpload.png) | ![illustration for FileUpload](../../fontawesome-5/Solid/FileUpload.Local.png) |




## FileUpload

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FileUpload
include('fontawesome-5/Solid/FileUpload')

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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FileUpload
include('fontawesome-5/Solid/FileUpload')

' renders the element
FileUpload('FileUpload', 'File Upload', 'an optional tech label')
@enduml
```

