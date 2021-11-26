# AltRoute


```text
material-4/Maps/AltRoute
```

```text
include('material-4/Maps/AltRoute')
```



| Illustration | AltRoute |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/AltRoute.png) | ![illustration for AltRoute](../../material-4/Maps/AltRoute.Local.png) |




## AltRoute

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AltRoute
include('material-4/Maps/AltRoute')

' renders the element
AltRoute('AltRoute', 'Alt Route', 'an optional tech label')
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

' loads the Item which embeds the element AltRoute
include('material-4/Maps/AltRoute')

' renders the element
AltRoute('AltRoute', 'Alt Route', 'an optional tech label')
@enduml
```

