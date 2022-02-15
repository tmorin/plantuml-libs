# FilePdf


```text
fontawesome-6/Solid/FilePdf
```

```text
include('fontawesome-6/Solid/FilePdf')
```



| Illustration | FilePdf |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/FilePdf.png) | ![illustration for FilePdf](../../fontawesome-6/Solid/FilePdf.Local.png) |




## FilePdf

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FilePdf
include('fontawesome-6/Solid/FilePdf')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FilePdf
include('fontawesome-6/Solid/FilePdf')

' renders the element
FilePdf('FilePdf', 'File Pdf', 'an optional tech label')
@enduml
```

