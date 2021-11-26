# NetworkWired


```text
fontawesome-5/Solid/NetworkWired
```

```text
include('fontawesome-5/Solid/NetworkWired')
```



| Illustration | NetworkWired |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/NetworkWired.png) | ![illustration for NetworkWired](../../fontawesome-5/Solid/NetworkWired.Local.png) |




## NetworkWired

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element NetworkWired
include('fontawesome-5/Solid/NetworkWired')

' renders the element
NetworkWired('NetworkWired', 'Network Wired', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element NetworkWired
include('fontawesome-5/Solid/NetworkWired')

' renders the element
NetworkWired('NetworkWired', 'Network Wired', 'an optional tech label')
@enduml
```

