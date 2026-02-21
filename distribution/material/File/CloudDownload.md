# CloudDownload


```text
material/File/CloudDownload
```

```text
include('material/File/CloudDownload')
```



| Illustration | CloudDownload |
| :---: | :---: |
| ![illustration for Illustration](../../material/File/CloudDownload.png) | ![illustration for CloudDownload](../../material/File/CloudDownload.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CloudDownloadXs>`
- `<$CloudDownloadSm>`
- `<$CloudDownloadMd>`
- `<$CloudDownloadLg>`





## CloudDownload

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element CloudDownload
include('material/File/CloudDownload')

' renders the element
CloudDownload('CloudDownload', 'Cloud Download', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CloudDownload
include('material/File/CloudDownload')

' renders the element
CloudDownload('CloudDownload', 'Cloud Download', 'an optional tech label', 'an optional description')
@enduml
```

