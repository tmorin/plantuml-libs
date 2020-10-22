# Service Azure Lighthouse

```text
azure-v2/Item/ManagementGovernance/ServiceAzureLighthouse
```

```text
include('azure-v2/Item/ManagementGovernance/ServiceAzureLighthouse')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceAzureLighthouse.png)|![](ServiceAzureLighthouse.card.png)|![](ServiceAzureLighthouse.element.png)|![](ServiceAzureLighthouse.group.png)|



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
' loads the ServiceAzureLighthouse element
include('azure-v2/Item/ManagementGovernance/ServiceAzureLighthouse')
ServiceAzureLighthouseCard('service_azure_lighthouse', 'Service Azure Lighthouse', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAzureLighthouse element
include('azure-v2/Item/ManagementGovernance/ServiceAzureLighthouse')
ServiceAzureLighthouseCard('service_azure_lighthouse', 'Service Azure Lighthouse', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAzureLighthouse element
include('azure-v2/Item/ManagementGovernance/ServiceAzureLighthouse')
ServiceAzureLighthouse('service_azure_lighthouse', 'Service Azure Lighthouse', 'an optional tech field')
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
' loads the ServiceAzureLighthouse element
include('azure-v2/Item/ManagementGovernance/ServiceAzureLighthouse')
ServiceAzureLighthouse('service_azure_lighthouse', 'Service Azure Lighthouse', 'an optional tech field')
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
' loads the ServiceAzureLighthouse element
include('azure-v2/Item/ManagementGovernance/ServiceAzureLighthouse')
ServiceAzureLighthouseGroup('service_azure_lighthouse', 'Service Azure Lighthouse', 'an optional tech field'){
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
' loads the ServiceAzureLighthouse element
include('azure-v2/Item/ManagementGovernance/ServiceAzureLighthouse')
ServiceAzureLighthouseGroup('service_azure_lighthouse', 'Service Azure Lighthouse', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

