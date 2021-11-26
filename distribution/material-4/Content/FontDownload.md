# FontDownload


```text
material-4/Content/FontDownload
```

```text
include('material-4/Content/FontDownload')
```



| Illustration | FontDownload |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Content/FontDownload.png) | ![illustration for FontDownload](../../material-4/Content/FontDownload.Local.png) |




## FontDownload

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FontDownload
include('material-4/Content/FontDownload')

' renders the element
FontDownload('FontDownload', 'Font Download', 'an optional tech label')
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

' loads the Item which embeds the element FontDownload
include('material-4/Content/FontDownload')

' renders the element
FontDownload('FontDownload', 'Font Download', 'an optional tech label')
@enduml
```

