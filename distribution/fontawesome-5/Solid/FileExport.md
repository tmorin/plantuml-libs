# FileExport


```text
fontawesome-5/Solid/FileExport
```

```text
include('fontawesome-5/Solid/FileExport')
```



| Illustration | FileExport |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/FileExport.png) | ![illustration for FileExport](../../fontawesome-5/Solid/FileExport.Local.png) |




## FileExport

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FileExport
include('fontawesome-5/Solid/FileExport')

' renders the element
FileExport('FileExport', 'File Export', 'an optional tech label')
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

' loads the Item which embeds the element FileExport
include('fontawesome-5/Solid/FileExport')

' renders the element
FileExport('FileExport', 'File Export', 'an optional tech label')
@enduml
```

