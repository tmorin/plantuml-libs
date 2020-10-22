# Service Event Hub Clusters

```text
azure-v2/Item/Analytics/ServiceEventHubClusters
```

```text
include('azure-v2/Item/Analytics/ServiceEventHubClusters')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceEventHubClusters.png)|![](ServiceEventHubClusters.card.png)|![](ServiceEventHubClusters.element.png)|![](ServiceEventHubClusters.group.png)|



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
' loads the ServiceEventHubClusters element
include('azure-v2/Item/Analytics/ServiceEventHubClusters')
ServiceEventHubClustersCard('service_event_hub_clusters', 'Service Event Hub Clusters', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceEventHubClusters element
include('azure-v2/Item/Analytics/ServiceEventHubClusters')
ServiceEventHubClustersCard('service_event_hub_clusters', 'Service Event Hub Clusters', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceEventHubClusters element
include('azure-v2/Item/Analytics/ServiceEventHubClusters')
ServiceEventHubClusters('service_event_hub_clusters', 'Service Event Hub Clusters', 'an optional tech field')
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
' loads the ServiceEventHubClusters element
include('azure-v2/Item/Analytics/ServiceEventHubClusters')
ServiceEventHubClusters('service_event_hub_clusters', 'Service Event Hub Clusters', 'an optional tech field')
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
' loads the ServiceEventHubClusters element
include('azure-v2/Item/Analytics/ServiceEventHubClusters')
ServiceEventHubClustersGroup('service_event_hub_clusters', 'Service Event Hub Clusters', 'an optional tech field'){
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
' loads the ServiceEventHubClusters element
include('azure-v2/Item/Analytics/ServiceEventHubClusters')
ServiceEventHubClustersGroup('service_event_hub_clusters', 'Service Event Hub Clusters', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

