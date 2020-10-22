# Service Monitor

```text
azure-v2/Item/ManagementGovernance/ServiceMonitor
```

```text
include('azure-v2/Item/ManagementGovernance/ServiceMonitor')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceMonitor.png)|![](ServiceMonitor.card.png)|![](ServiceMonitor.element.png)|![](ServiceMonitor.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceMonitor element
include('azure-v2/Item/ManagementGovernance/ServiceMonitor')
ServiceMonitorCard('service_monitor', 'Service Monitor', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceMonitor element
include('azure-v2/Item/ManagementGovernance/ServiceMonitor')
ServiceMonitorCard('service_monitor', 'Service Monitor', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```


## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceMonitor element
include('azure-v2/Item/ManagementGovernance/ServiceMonitor')
ServiceMonitor('service_monitor', 'Service Monitor', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceMonitor element
include('azure-v2/Item/ManagementGovernance/ServiceMonitor')
ServiceMonitor('service_monitor', 'Service Monitor', 'an optional tech field')
@enduml
```


## group
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceMonitor element
include('azure-v2/Item/ManagementGovernance/ServiceMonitor')
ServiceMonitorGroup('service_monitor', 'Service Monitor', 'an optional tech field'){
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
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceMonitor element
include('azure-v2/Item/ManagementGovernance/ServiceMonitor')
ServiceMonitorGroup('service_monitor', 'Service Monitor', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

