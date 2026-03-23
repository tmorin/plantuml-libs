# FileUpload


```text
fontawesome/Solid/FileUpload
```

```text
include('fontawesome/Solid/FileUpload')
```



| Illustration | FileUpload |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/FileUpload.png) | ![illustration for FileUpload](../../fontawesome/Solid/FileUpload.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FileUploadXs>`
- `<$FileUploadSm>`
- `<$FileUploadMd>`
- `<$FileUploadLg>`





## FileUpload

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FileUpload
include('fontawesome/Solid/FileUpload')

' renders the element
FileUpload('FileUpload', 'File Upload', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element FileUpload
include('fontawesome/Solid/FileUpload')

' renders the element
FileUpload('FileUpload', 'File Upload', 'an optional tech label', 'an optional description')
@enduml
```

