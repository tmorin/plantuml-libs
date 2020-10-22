# Service Container Instances

```text
azure-v2/Item/Compute/ServiceContainerInstances
```

```text
include('azure-v2/Item/Compute/ServiceContainerInstances')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceContainerInstances.png)|![](ServiceContainerInstances.card.png)|![](ServiceContainerInstances.element.png)|![](ServiceContainerInstances.group.png)|



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
' loads the ServiceContainerInstances element
include('azure-v2/Item/Compute/ServiceContainerInstances')
ServiceContainerInstancesCard('service_container_instances', 'Service Container Instances', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceContainerInstances element
include('azure-v2/Item/Compute/ServiceContainerInstances')
ServiceContainerInstancesCard('service_container_instances', 'Service Container Instances', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceContainerInstances element
include('azure-v2/Item/Compute/ServiceContainerInstances')
ServiceContainerInstances('service_container_instances', 'Service Container Instances', 'an optional tech field')
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
' loads the ServiceContainerInstances element
include('azure-v2/Item/Compute/ServiceContainerInstances')
ServiceContainerInstances('service_container_instances', 'Service Container Instances', 'an optional tech field')
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
' loads the ServiceContainerInstances element
include('azure-v2/Item/Compute/ServiceContainerInstances')
ServiceContainerInstancesGroup('service_container_instances', 'Service Container Instances', 'an optional tech field'){
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
' loads the ServiceContainerInstances element
include('azure-v2/Item/Compute/ServiceContainerInstances')
ServiceContainerInstancesGroup('service_container_instances', 'Service Container Instances', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

