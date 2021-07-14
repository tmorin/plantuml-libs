# Campaignmonitor


```text
simpleicons-5/C/Campaignmonitor
```

```text
include('simpleicons-5/C/Campaignmonitor')
```



| Illustration | Campaignmonitor |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/C/Campaignmonitor.png) | ![illustration for Campaignmonitor](../../simpleicons-5/C/Campaignmonitor.Local.png) |




## Campaignmonitor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Campaignmonitor
include('simpleicons-5/C/Campaignmonitor')

' renders the element
Campaignmonitor('Campaignmonitor', 'Campaignmonitor', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Campaignmonitor
include('simpleicons-5/C/Campaignmonitor')

' renders the element
Campaignmonitor('Campaignmonitor', 'Campaignmonitor', 'an optional tech label')
@enduml
```

