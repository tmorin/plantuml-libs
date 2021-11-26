# FileExcel


```text
fontawesome-5/Regular/FileExcel
```

```text
include('fontawesome-5/Regular/FileExcel')
```



| Illustration | FileExcel |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/FileExcel.png) | ![illustration for FileExcel](../../fontawesome-5/Regular/FileExcel.Local.png) |




## FileExcel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FileExcel
include('fontawesome-5/Regular/FileExcel')

' renders the element
FileExcel('FileExcel', 'File Excel', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FileExcel
include('fontawesome-5/Regular/FileExcel')

' renders the element
FileExcel('FileExcel', 'File Excel', 'an optional tech label')
@enduml
```

