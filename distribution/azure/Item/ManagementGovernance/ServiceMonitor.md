# ServiceMonitor


```text
azure/Item/ManagementGovernance/ServiceMonitor
```

```text
include('azure/Item/ManagementGovernance/ServiceMonitor')
```



| Illustration | ServiceMonitor | ServiceMonitorCard | ServiceMonitorGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/ManagementGovernance/ServiceMonitor.png) | ![illustration for ServiceMonitor](../../../azure/Item/ManagementGovernance/ServiceMonitor.Local.png) | ![illustration for ServiceMonitorCard](../../../azure/Item/ManagementGovernance/ServiceMonitorCard.Local.png) | ![illustration for ServiceMonitorGroup](../../../azure/Item/ManagementGovernance/ServiceMonitorGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceMonitorXs>`
- `<$ServiceMonitorSm>`
- `<$ServiceMonitorMd>`
- `<$ServiceMonitorLg>`





## ServiceMonitor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceMonitor
include('azure/Item/ManagementGovernance/ServiceMonitor')

' renders the element
ServiceMonitor('ServiceMonitor', 'Service Monitor', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceMonitor
include('azure/Item/ManagementGovernance/ServiceMonitor')

' renders the element
ServiceMonitor('ServiceMonitor', 'Service Monitor', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceMonitorCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceMonitorCard
include('azure/Item/ManagementGovernance/ServiceMonitor')

' renders the element
ServiceMonitorCard('ServiceMonitorCard', 'Service Monitor Card', 'an optional description')
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

' loads the Item which embeds the element ServiceMonitorCard
include('azure/Item/ManagementGovernance/ServiceMonitor')

' renders the element
ServiceMonitorCard('ServiceMonitorCard', 'Service Monitor Card', 'an optional description')
@enduml
```

## ServiceMonitorGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceMonitorGroup
include('azure/Item/ManagementGovernance/ServiceMonitor')

' renders the element
ServiceMonitorGroup('ServiceMonitorGroup', 'Service Monitor Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceMonitorGroup
include('azure/Item/ManagementGovernance/ServiceMonitor')

' renders the element
ServiceMonitorGroup('ServiceMonitorGroup', 'Service Monitor Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

