# ServiceAzureMonitorDashboard


```text
azure/Item/Other/ServiceAzureMonitorDashboard
```

```text
include('azure/Item/Other/ServiceAzureMonitorDashboard')
```



| Illustration | ServiceAzureMonitorDashboard | ServiceAzureMonitorDashboardCard | ServiceAzureMonitorDashboardGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/Other/ServiceAzureMonitorDashboard.png) | ![illustration for ServiceAzureMonitorDashboard](../../../azure/Item/Other/ServiceAzureMonitorDashboard.Local.png) | ![illustration for ServiceAzureMonitorDashboardCard](../../../azure/Item/Other/ServiceAzureMonitorDashboardCard.Local.png) | ![illustration for ServiceAzureMonitorDashboardGroup](../../../azure/Item/Other/ServiceAzureMonitorDashboardGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceAzureMonitorDashboardXs>`
- `<$ServiceAzureMonitorDashboardSm>`
- `<$ServiceAzureMonitorDashboardMd>`
- `<$ServiceAzureMonitorDashboardLg>`





## ServiceAzureMonitorDashboard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceAzureMonitorDashboard
include('azure/Item/Other/ServiceAzureMonitorDashboard')

' renders the element
ServiceAzureMonitorDashboard('ServiceAzureMonitorDashboard', 'Service Azure Monitor Dashboard', 'an optional tech label', 'an optional description')
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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceAzureMonitorDashboard
include('azure/Item/Other/ServiceAzureMonitorDashboard')

' renders the element
ServiceAzureMonitorDashboard('ServiceAzureMonitorDashboard', 'Service Azure Monitor Dashboard', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceAzureMonitorDashboardCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceAzureMonitorDashboardCard
include('azure/Item/Other/ServiceAzureMonitorDashboard')

' renders the element
ServiceAzureMonitorDashboardCard('ServiceAzureMonitorDashboardCard', 'Service Azure Monitor Dashboard Card', 'an optional description')
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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceAzureMonitorDashboardCard
include('azure/Item/Other/ServiceAzureMonitorDashboard')

' renders the element
ServiceAzureMonitorDashboardCard('ServiceAzureMonitorDashboardCard', 'Service Azure Monitor Dashboard Card', 'an optional description')
@enduml
```

## ServiceAzureMonitorDashboardGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceAzureMonitorDashboardGroup
include('azure/Item/Other/ServiceAzureMonitorDashboard')

' renders the element
ServiceAzureMonitorDashboardGroup('ServiceAzureMonitorDashboardGroup', 'Service Azure Monitor Dashboard Group', 'an optional tech label') {
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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceAzureMonitorDashboardGroup
include('azure/Item/Other/ServiceAzureMonitorDashboard')

' renders the element
ServiceAzureMonitorDashboardGroup('ServiceAzureMonitorDashboardGroup', 'Service Azure Monitor Dashboard Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

