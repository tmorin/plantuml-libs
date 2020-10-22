# Service Cost Alerts

```text
azure-v2/Item/General/ServiceCostAlerts
```

```text
include('azure-v2/Item/General/ServiceCostAlerts')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceCostAlerts.png)|![](ServiceCostAlerts.card.png)|![](ServiceCostAlerts.element.png)|![](ServiceCostAlerts.group.png)|



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
' loads the ServiceCostAlerts element
include('azure-v2/Item/General/ServiceCostAlerts')
ServiceCostAlertsCard('service_cost_alerts', 'Service Cost Alerts', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceCostAlerts element
include('azure-v2/Item/General/ServiceCostAlerts')
ServiceCostAlertsCard('service_cost_alerts', 'Service Cost Alerts', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceCostAlerts element
include('azure-v2/Item/General/ServiceCostAlerts')
ServiceCostAlerts('service_cost_alerts', 'Service Cost Alerts', 'an optional tech field')
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
' loads the ServiceCostAlerts element
include('azure-v2/Item/General/ServiceCostAlerts')
ServiceCostAlerts('service_cost_alerts', 'Service Cost Alerts', 'an optional tech field')
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
' loads the ServiceCostAlerts element
include('azure-v2/Item/General/ServiceCostAlerts')
ServiceCostAlertsGroup('service_cost_alerts', 'Service Cost Alerts', 'an optional tech field'){
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
' loads the ServiceCostAlerts element
include('azure-v2/Item/General/ServiceCostAlerts')
ServiceCostAlertsGroup('service_cost_alerts', 'Service Cost Alerts', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

