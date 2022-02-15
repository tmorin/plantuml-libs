# FileImport


```text
fontawesome-6/Solid/FileImport
```

```text
include('fontawesome-6/Solid/FileImport')
```



| Illustration | FileImport |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/FileImport.png) | ![illustration for FileImport](../../fontawesome-6/Solid/FileImport.Local.png) |




## FileImport

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element FileImport
include('fontawesome-6/Solid/FileImport')

' renders the element
FileImport('FileImport', 'File Import', 'an optional tech label')
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

' loads the Item which embeds the element FileImport
include('fontawesome-6/Solid/FileImport')

' renders the element
FileImport('FileImport', 'File Import', 'an optional tech label')
@enduml
```

