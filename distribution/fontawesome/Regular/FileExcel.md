# FileExcel


```text
fontawesome/Regular/FileExcel
```

```text
include('fontawesome/Regular/FileExcel')
```



| Illustration | FileExcel |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/FileExcel.png) | ![illustration for FileExcel](../../fontawesome/Regular/FileExcel.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$FileExcelXs>`
- `<$FileExcelSm>`
- `<$FileExcelMd>`
- `<$FileExcelLg>`





## FileExcel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element FileExcel
include('fontawesome/Regular/FileExcel')

' renders the element
FileExcel('FileExcel', 'File Excel', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element FileExcel
include('fontawesome/Regular/FileExcel')

' renders the element
FileExcel('FileExcel', 'File Excel', 'an optional tech label', 'an optional description')
@enduml
```

