# BusAlert


```text
material-4/Maps/BusAlert
```

```text
include('material-4/Maps/BusAlert')
```



| Illustration | BusAlert |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/BusAlert.png) | ![illustration for BusAlert](../../material-4/Maps/BusAlert.Local.png) |




## BusAlert

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element BusAlert
include('material-4/Maps/BusAlert')

' renders the element
BusAlert('BusAlert', 'Bus Alert', 'an optional tech label')
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

' loads the Item which embeds the element BusAlert
include('material-4/Maps/BusAlert')

' renders the element
BusAlert('BusAlert', 'Bus Alert', 'an optional tech label')
@enduml
```

