# NetworkCheck


```text
material-4/Notification/NetworkCheck
```

```text
include('material-4/Notification/NetworkCheck')
```



| Illustration | NetworkCheck |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Notification/NetworkCheck.png) | ![illustration for NetworkCheck](../../material-4/Notification/NetworkCheck.Local.png) |




## NetworkCheck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element NetworkCheck
include('material-4/Notification/NetworkCheck')

' renders the element
NetworkCheck('NetworkCheck', 'Network Check', 'an optional tech label')
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

' loads the Item which embeds the element NetworkCheck
include('material-4/Notification/NetworkCheck')

' renders the element
NetworkCheck('NetworkCheck', 'Network Check', 'an optional tech label')
@enduml
```

