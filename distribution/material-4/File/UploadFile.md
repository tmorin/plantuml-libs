# UploadFile


```text
material-4/File/UploadFile
```

```text
include('material-4/File/UploadFile')
```



| Illustration | UploadFile |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/File/UploadFile.png) | ![illustration for UploadFile](../../material-4/File/UploadFile.Local.png) |




## UploadFile

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element UploadFile
include('material-4/File/UploadFile')

' renders the element
UploadFile('UploadFile', 'Upload File', 'an optional tech label')
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

' loads the Item which embeds the element UploadFile
include('material-4/File/UploadFile')

' renders the element
UploadFile('UploadFile', 'Upload File', 'an optional tech label')
@enduml
```

