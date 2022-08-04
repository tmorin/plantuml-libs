# SimCardAlert


```text
material-4/Notification/SimCardAlert
```

```text
include('material-4/Notification/SimCardAlert')
```



| Illustration | SimCardAlert |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Notification/SimCardAlert.png) | ![illustration for SimCardAlert](../../material-4/Notification/SimCardAlert.Local.png) |




## SimCardAlert

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element SimCardAlert
include('material-4/Notification/SimCardAlert')

' renders the element
SimCardAlert('SimCardAlert', 'Sim Card Alert', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SimCardAlert
include('material-4/Notification/SimCardAlert')

' renders the element
SimCardAlert('SimCardAlert', 'Sim Card Alert', 'an optional tech label', 'an optional description')
@enduml
```

