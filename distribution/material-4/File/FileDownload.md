# FileDownload


```text
material-4/File/FileDownload
```

```text
include('material-4/File/FileDownload')
```



| Illustration | FileDownload |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/File/FileDownload.png) | ![illustration for FileDownload](../../material-4/File/FileDownload.Local.png) |




## FileDownload

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FileDownload
include('material-4/File/FileDownload')

' renders the element
FileDownload('FileDownload', 'File Download', 'an optional tech label')
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

' loads the Item which embeds the element FileDownload
include('material-4/File/FileDownload')

' renders the element
FileDownload('FileDownload', 'File Download', 'an optional tech label')
@enduml
```

