# FileDownload


```text
fontawesome-5/Solid/FileDownload
```

```text
include('fontawesome-5/Solid/FileDownload')
```



| Illustration | FileDownload |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/FileDownload.png) | ![illustration for FileDownload](../../fontawesome-5/Solid/FileDownload.Local.png) |




## FileDownload

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element FileDownload
include('fontawesome-5/Solid/FileDownload')

' renders the element
FileDownload('FileDownload', 'File Download', 'an optional tech label')
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

' loads the Item which embeds the element FileDownload
include('fontawesome-5/Solid/FileDownload')

' renders the element
FileDownload('FileDownload', 'File Download', 'an optional tech label')
@enduml
```

