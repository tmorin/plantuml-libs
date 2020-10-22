# Service Resource Graph Explorer

```text
azure-v2/Item/ManagementGovernance/ServiceResourceGraphExplorer
```

```text
include('azure-v2/Item/ManagementGovernance/ServiceResourceGraphExplorer')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceResourceGraphExplorer.png)|![](ServiceResourceGraphExplorer.card.png)|![](ServiceResourceGraphExplorer.element.png)|![](ServiceResourceGraphExplorer.group.png)|



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
' loads the ServiceResourceGraphExplorer element
include('azure-v2/Item/ManagementGovernance/ServiceResourceGraphExplorer')
ServiceResourceGraphExplorerCard('service_resource_graph_explorer', 'Service Resource Graph Explorer', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceResourceGraphExplorer element
include('azure-v2/Item/ManagementGovernance/ServiceResourceGraphExplorer')
ServiceResourceGraphExplorerCard('service_resource_graph_explorer', 'Service Resource Graph Explorer', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceResourceGraphExplorer element
include('azure-v2/Item/ManagementGovernance/ServiceResourceGraphExplorer')
ServiceResourceGraphExplorer('service_resource_graph_explorer', 'Service Resource Graph Explorer', 'an optional tech field')
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
' loads the ServiceResourceGraphExplorer element
include('azure-v2/Item/ManagementGovernance/ServiceResourceGraphExplorer')
ServiceResourceGraphExplorer('service_resource_graph_explorer', 'Service Resource Graph Explorer', 'an optional tech field')
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
' loads the ServiceResourceGraphExplorer element
include('azure-v2/Item/ManagementGovernance/ServiceResourceGraphExplorer')
ServiceResourceGraphExplorerGroup('service_resource_graph_explorer', 'Service Resource Graph Explorer', 'an optional tech field'){
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
' loads the ServiceResourceGraphExplorer element
include('azure-v2/Item/ManagementGovernance/ServiceResourceGraphExplorer')
ServiceResourceGraphExplorerGroup('service_resource_graph_explorer', 'Service Resource Graph Explorer', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

