# Service Kubernetes Services

```text
azure-v2/Item/Compute/ServiceKubernetesServices
```

```text
include('azure-v2/Item/Compute/ServiceKubernetesServices')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceKubernetesServices.png)|![](ServiceKubernetesServices.card.png)|![](ServiceKubernetesServices.element.png)|![](ServiceKubernetesServices.group.png)|



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
' loads the ServiceKubernetesServices element
include('azure-v2/Item/Compute/ServiceKubernetesServices')
ServiceKubernetesServicesCard('service_kubernetes_services', 'Service Kubernetes Services', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceKubernetesServices element
include('azure-v2/Item/Compute/ServiceKubernetesServices')
ServiceKubernetesServicesCard('service_kubernetes_services', 'Service Kubernetes Services', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceKubernetesServices element
include('azure-v2/Item/Compute/ServiceKubernetesServices')
ServiceKubernetesServices('service_kubernetes_services', 'Service Kubernetes Services', 'an optional tech field')
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
' loads the ServiceKubernetesServices element
include('azure-v2/Item/Compute/ServiceKubernetesServices')
ServiceKubernetesServices('service_kubernetes_services', 'Service Kubernetes Services', 'an optional tech field')
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
' loads the ServiceKubernetesServices element
include('azure-v2/Item/Compute/ServiceKubernetesServices')
ServiceKubernetesServicesGroup('service_kubernetes_services', 'Service Kubernetes Services', 'an optional tech field'){
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
' loads the ServiceKubernetesServices element
include('azure-v2/Item/Compute/ServiceKubernetesServices')
ServiceKubernetesServicesGroup('service_kubernetes_services', 'Service Kubernetes Services', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

