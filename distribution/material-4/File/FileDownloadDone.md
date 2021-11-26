# FileDownloadDone


```text
material-4/File/FileDownloadDone
```

```text
include('material-4/File/FileDownloadDone')
```



| Illustration | FileDownloadDone |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/File/FileDownloadDone.png) | ![illustration for FileDownloadDone](../../material-4/File/FileDownloadDone.Local.png) |




## FileDownloadDone

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FileDownloadDone
include('material-4/File/FileDownloadDone')

' renders the element
FileDownloadDone('FileDownloadDone', 'File Download Done', 'an optional tech label')
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

' loads the Item which embeds the element FileDownloadDone
include('material-4/File/FileDownloadDone')

' renders the element
FileDownloadDone('FileDownloadDone', 'File Download Done', 'an optional tech label')
@enduml
```

