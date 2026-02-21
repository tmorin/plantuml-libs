# UploadFile


```text
material/File/UploadFile
```

```text
include('material/File/UploadFile')
```



| Illustration | UploadFile |
| :---: | :---: |
| ![illustration for Illustration](../../material/File/UploadFile.png) | ![illustration for UploadFile](../../material/File/UploadFile.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UploadFileXs>`
- `<$UploadFileSm>`
- `<$UploadFileMd>`
- `<$UploadFileLg>`





## UploadFile

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element UploadFile
include('material/File/UploadFile')

' renders the element
UploadFile('UploadFile', 'Upload File', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element UploadFile
include('material/File/UploadFile')

' renders the element
UploadFile('UploadFile', 'Upload File', 'an optional tech label', 'an optional description')
@enduml
```

