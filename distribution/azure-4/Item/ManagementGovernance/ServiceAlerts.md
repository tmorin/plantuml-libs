# ServiceAlerts


```text
azure-4/Item/ManagementGovernance/ServiceAlerts
```

```text
include('azure-4/Item/ManagementGovernance/ServiceAlerts')
```



| Illustration | ServiceAlerts | ServiceAlertsCard | ServiceAlertsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/ManagementGovernance/ServiceAlerts.png) | ![illustration for ServiceAlerts](../../../azure-4/Item/ManagementGovernance/ServiceAlerts.Local.png) | ![illustration for ServiceAlertsCard](../../../azure-4/Item/ManagementGovernance/ServiceAlertsCard.Local.png) | ![illustration for ServiceAlertsGroup](../../../azure-4/Item/ManagementGovernance/ServiceAlertsGroup.Local.png) |




## ServiceAlerts

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceAlerts
include('azure-4/Item/ManagementGovernance/ServiceAlerts')

' renders the element
ServiceAlerts('ServiceAlerts', 'Service Alerts', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceAlerts
include('azure-4/Item/ManagementGovernance/ServiceAlerts')

' renders the element
ServiceAlerts('ServiceAlerts', 'Service Alerts', 'an optional tech label')
@enduml
```

## ServiceAlertsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceAlertsCard
include('azure-4/Item/ManagementGovernance/ServiceAlerts')

' renders the element
ServiceAlertsCard('ServiceAlertsCard', 'Service Alerts Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceAlertsCard
include('azure-4/Item/ManagementGovernance/ServiceAlerts')

' renders the element
ServiceAlertsCard('ServiceAlertsCard', 'Service Alerts Card', 'an optional description')
@enduml
```

## ServiceAlertsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceAlertsGroup
include('azure-4/Item/ManagementGovernance/ServiceAlerts')

' renders the element
ServiceAlertsGroup('ServiceAlertsGroup', 'Service Alerts Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceAlertsGroup
include('azure-4/Item/ManagementGovernance/ServiceAlerts')

' renders the element
ServiceAlertsGroup('ServiceAlertsGroup', 'Service Alerts Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

