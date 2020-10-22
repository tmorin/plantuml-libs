# Service Cost Management

```text
azure-v2/Item/General/ServiceCostManagement
```

```text
include('azure-v2/Item/General/ServiceCostManagement')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceCostManagement.png)|![](ServiceCostManagement.card.png)|![](ServiceCostManagement.element.png)|![](ServiceCostManagement.group.png)|



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
' loads the ServiceCostManagement element
include('azure-v2/Item/General/ServiceCostManagement')
ServiceCostManagementCard('service_cost_management', 'Service Cost Management', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceCostManagement element
include('azure-v2/Item/General/ServiceCostManagement')
ServiceCostManagementCard('service_cost_management', 'Service Cost Management', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceCostManagement element
include('azure-v2/Item/General/ServiceCostManagement')
ServiceCostManagement('service_cost_management', 'Service Cost Management', 'an optional tech field')
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
' loads the ServiceCostManagement element
include('azure-v2/Item/General/ServiceCostManagement')
ServiceCostManagement('service_cost_management', 'Service Cost Management', 'an optional tech field')
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
' loads the ServiceCostManagement element
include('azure-v2/Item/General/ServiceCostManagement')
ServiceCostManagementGroup('service_cost_management', 'Service Cost Management', 'an optional tech field'){
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
' loads the ServiceCostManagement element
include('azure-v2/Item/General/ServiceCostManagement')
ServiceCostManagementGroup('service_cost_management', 'Service Cost Management', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

