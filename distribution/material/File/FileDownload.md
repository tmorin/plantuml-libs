# FileDownload


```text
material/File/FileDownload
```

```text
include('material/File/FileDownload')
```



| Illustration | FileDownload |
| :---: | :---: |
| ![illustration for Illustration](../../material/File/FileDownload.png) | ![illustration for FileDownload](../../material/File/FileDownload.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FileDownloadXs>`
- `<$FileDownloadSm>`
- `<$FileDownloadMd>`
- `<$FileDownloadLg>`





## FileDownload

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element FileDownload
include('material/File/FileDownload')

' renders the element
FileDownload('FileDownload', 'File Download', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FileDownload
include('material/File/FileDownload')

' renders the element
FileDownload('FileDownload', 'File Download', 'an optional tech label', 'an optional description')
@enduml
```

