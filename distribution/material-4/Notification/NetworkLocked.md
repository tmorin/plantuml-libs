# NetworkLocked


```text
material-4/Notification/NetworkLocked
```

```text
include('material-4/Notification/NetworkLocked')
```



| Illustration | NetworkLocked |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Notification/NetworkLocked.png) | ![illustration for NetworkLocked](../../material-4/Notification/NetworkLocked.Local.png) |




## NetworkLocked

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element NetworkLocked
include('material-4/Notification/NetworkLocked')

' renders the element
NetworkLocked('NetworkLocked', 'Network Locked', 'an optional tech label')
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

' loads the Item which embeds the element NetworkLocked
include('material-4/Notification/NetworkLocked')

' renders the element
NetworkLocked('NetworkLocked', 'Network Locked', 'an optional tech label')
@enduml
```

