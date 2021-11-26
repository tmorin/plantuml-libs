# AddAlert


```text
material-4/Alert/AddAlert
```

```text
include('material-4/Alert/AddAlert')
```



| Illustration | AddAlert |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Alert/AddAlert.png) | ![illustration for AddAlert](../../material-4/Alert/AddAlert.Local.png) |




## AddAlert

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AddAlert
include('material-4/Alert/AddAlert')

' renders the element
AddAlert('AddAlert', 'Add Alert', 'an optional tech label')
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

' loads the Item which embeds the element AddAlert
include('material-4/Alert/AddAlert')

' renders the element
AddAlert('AddAlert', 'Add Alert', 'an optional tech label')
@enduml
```

