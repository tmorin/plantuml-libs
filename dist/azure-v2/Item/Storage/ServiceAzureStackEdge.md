# Service Azure Stack Edge

```text
azure-v2/Item/Storage/ServiceAzureStackEdge
```

```text
include('azure-v2/Item/Storage/ServiceAzureStackEdge')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceAzureStackEdge.png)|![](ServiceAzureStackEdge.card.png)|![](ServiceAzureStackEdge.element.png)|![](ServiceAzureStackEdge.group.png)|



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
' loads the ServiceAzureStackEdge element
include('azure-v2/Item/Storage/ServiceAzureStackEdge')
ServiceAzureStackEdgeCard('service_azure_stack_edge', 'Service Azure Stack Edge', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAzureStackEdge element
include('azure-v2/Item/Storage/ServiceAzureStackEdge')
ServiceAzureStackEdgeCard('service_azure_stack_edge', 'Service Azure Stack Edge', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAzureStackEdge element
include('azure-v2/Item/Storage/ServiceAzureStackEdge')
ServiceAzureStackEdge('service_azure_stack_edge', 'Service Azure Stack Edge', 'an optional tech field')
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
' loads the ServiceAzureStackEdge element
include('azure-v2/Item/Storage/ServiceAzureStackEdge')
ServiceAzureStackEdge('service_azure_stack_edge', 'Service Azure Stack Edge', 'an optional tech field')
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
' loads the ServiceAzureStackEdge element
include('azure-v2/Item/Storage/ServiceAzureStackEdge')
ServiceAzureStackEdgeGroup('service_azure_stack_edge', 'Service Azure Stack Edge', 'an optional tech field'){
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
' loads the ServiceAzureStackEdge element
include('azure-v2/Item/Storage/ServiceAzureStackEdge')
ServiceAzureStackEdgeGroup('service_azure_stack_edge', 'Service Azure Stack Edge', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

