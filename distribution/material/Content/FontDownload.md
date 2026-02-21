# FontDownload


```text
material/Content/FontDownload
```

```text
include('material/Content/FontDownload')
```



| Illustration | FontDownload |
| :---: | :---: |
| ![illustration for Illustration](../../material/Content/FontDownload.png) | ![illustration for FontDownload](../../material/Content/FontDownload.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FontDownloadXs>`
- `<$FontDownloadSm>`
- `<$FontDownloadMd>`
- `<$FontDownloadLg>`





## FontDownload

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element FontDownload
include('material/Content/FontDownload')

' renders the element
FontDownload('FontDownload', 'Font Download', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FontDownload
include('material/Content/FontDownload')

' renders the element
FontDownload('FontDownload', 'Font Download', 'an optional tech label', 'an optional description')
@enduml
```

