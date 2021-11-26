# FilePdf


```text
fontawesome-5/Regular/FilePdf
```

```text
include('fontawesome-5/Regular/FilePdf')
```



| Illustration | FilePdf |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/FilePdf.png) | ![illustration for FilePdf](../../fontawesome-5/Regular/FilePdf.Local.png) |




## FilePdf

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FilePdf
include('fontawesome-5/Regular/FilePdf')

' renders the element
FilePdf('FilePdf', 'File Pdf', 'an optional tech label')
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

' loads the Item which embeds the element FilePdf
include('fontawesome-5/Regular/FilePdf')

' renders the element
FilePdf('FilePdf', 'File Pdf', 'an optional tech label')
@enduml
```

