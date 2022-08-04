# CloudDownload


```text
material-4/File/CloudDownload
```

```text
include('material-4/File/CloudDownload')
```



| Illustration | CloudDownload |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/File/CloudDownload.png) | ![illustration for CloudDownload](../../material-4/File/CloudDownload.Local.png) |




## CloudDownload

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element CloudDownload
include('material-4/File/CloudDownload')

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
include('material-4/bootstrap')

' loads the Item which embeds the element CloudDownload
include('material-4/File/CloudDownload')

' renders the element
CloudDownload('CloudDownload', 'Cloud Download', 'an optional tech label', 'an optional description')
@enduml
```

