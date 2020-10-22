# Service Azure Synapse Analytics

```text
azure-v2/Item/Databases/ServiceAzureSynapseAnalytics
```

```text
include('azure-v2/Item/Databases/ServiceAzureSynapseAnalytics')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceAzureSynapseAnalytics.png)|![](ServiceAzureSynapseAnalytics.card.png)|![](ServiceAzureSynapseAnalytics.element.png)|![](ServiceAzureSynapseAnalytics.group.png)|



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
' loads the ServiceAzureSynapseAnalytics element
include('azure-v2/Item/Databases/ServiceAzureSynapseAnalytics')
ServiceAzureSynapseAnalyticsCard('service_azure_synapse_analytics', 'Service Azure Synapse Analytics', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAzureSynapseAnalytics element
include('azure-v2/Item/Databases/ServiceAzureSynapseAnalytics')
ServiceAzureSynapseAnalyticsCard('service_azure_synapse_analytics', 'Service Azure Synapse Analytics', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAzureSynapseAnalytics element
include('azure-v2/Item/Databases/ServiceAzureSynapseAnalytics')
ServiceAzureSynapseAnalytics('service_azure_synapse_analytics', 'Service Azure Synapse Analytics', 'an optional tech field')
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
' loads the ServiceAzureSynapseAnalytics element
include('azure-v2/Item/Databases/ServiceAzureSynapseAnalytics')
ServiceAzureSynapseAnalytics('service_azure_synapse_analytics', 'Service Azure Synapse Analytics', 'an optional tech field')
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
' loads the ServiceAzureSynapseAnalytics element
include('azure-v2/Item/Databases/ServiceAzureSynapseAnalytics')
ServiceAzureSynapseAnalyticsGroup('service_azure_synapse_analytics', 'Service Azure Synapse Analytics', 'an optional tech field'){
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
' loads the ServiceAzureSynapseAnalytics element
include('azure-v2/Item/Databases/ServiceAzureSynapseAnalytics')
ServiceAzureSynapseAnalyticsGroup('service_azure_synapse_analytics', 'Service Azure Synapse Analytics', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

