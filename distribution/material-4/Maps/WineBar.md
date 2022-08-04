# WineBar


```text
material-4/Maps/WineBar
```

```text
include('material-4/Maps/WineBar')
```



| Illustration | WineBar |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/WineBar.png) | ![illustration for WineBar](../../material-4/Maps/WineBar.Local.png) |




## WineBar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element WineBar
include('material-4/Maps/WineBar')

' renders the element
WineBar('WineBar', 'Wine Bar', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element WineBar
include('material-4/Maps/WineBar')

' renders the element
WineBar('WineBar', 'Wine Bar', 'an optional tech label', 'an optional description')
@enduml
```

