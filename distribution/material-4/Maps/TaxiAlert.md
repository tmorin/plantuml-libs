# TaxiAlert


```text
material-4/Maps/TaxiAlert
```

```text
include('material-4/Maps/TaxiAlert')
```



| Illustration | TaxiAlert |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Maps/TaxiAlert.png) | ![illustration for TaxiAlert](../../material-4/Maps/TaxiAlert.Local.png) |




## TaxiAlert

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element TaxiAlert
include('material-4/Maps/TaxiAlert')

' renders the element
TaxiAlert('TaxiAlert', 'Taxi Alert', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TaxiAlert
include('material-4/Maps/TaxiAlert')

' renders the element
TaxiAlert('TaxiAlert', 'Taxi Alert', 'an optional tech label', 'an optional description')
@enduml
```

