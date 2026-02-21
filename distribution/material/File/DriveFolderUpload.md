# DriveFolderUpload


```text
material/File/DriveFolderUpload
```

```text
include('material/File/DriveFolderUpload')
```



| Illustration | DriveFolderUpload |
| :---: | :---: |
| ![illustration for Illustration](../../material/File/DriveFolderUpload.png) | ![illustration for DriveFolderUpload](../../material/File/DriveFolderUpload.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DriveFolderUploadXs>`
- `<$DriveFolderUploadSm>`
- `<$DriveFolderUploadMd>`
- `<$DriveFolderUploadLg>`





## DriveFolderUpload

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element DriveFolderUpload
include('material/File/DriveFolderUpload')

' renders the element
DriveFolderUpload('DriveFolderUpload', 'Drive Folder Upload', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DriveFolderUpload
include('material/File/DriveFolderUpload')

' renders the element
DriveFolderUpload('DriveFolderUpload', 'Drive Folder Upload', 'an optional tech label', 'an optional description')
@enduml
```

