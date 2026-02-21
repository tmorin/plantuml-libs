# ImportExport


```text
material/Communication/ImportExport
```

```text
include('material/Communication/ImportExport')
```



| Illustration | ImportExport |
| :---: | :---: |
| ![illustration for Illustration](../../material/Communication/ImportExport.png) | ![illustration for ImportExport](../../material/Communication/ImportExport.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ImportExportXs>`
- `<$ImportExportSm>`
- `<$ImportExportMd>`
- `<$ImportExportLg>`





## ImportExport

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element ImportExport
include('material/Communication/ImportExport')

' renders the element
ImportExport('ImportExport', 'Import Export', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ImportExport
include('material/Communication/ImportExport')

' renders the element
ImportExport('ImportExport', 'Import Export', 'an optional tech label', 'an optional description')
@enduml
```

