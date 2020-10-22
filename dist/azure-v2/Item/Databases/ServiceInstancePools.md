# Service Instance Pools

```text
azure-v2/Item/Databases/ServiceInstancePools
```

```text
include('azure-v2/Item/Databases/ServiceInstancePools')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceInstancePools.png)|![](ServiceInstancePools.card.png)|![](ServiceInstancePools.element.png)|![](ServiceInstancePools.group.png)|



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
' loads the ServiceInstancePools element
include('azure-v2/Item/Databases/ServiceInstancePools')
ServiceInstancePoolsCard('service_instance_pools', 'Service Instance Pools', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceInstancePools element
include('azure-v2/Item/Databases/ServiceInstancePools')
ServiceInstancePoolsCard('service_instance_pools', 'Service Instance Pools', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceInstancePools element
include('azure-v2/Item/Databases/ServiceInstancePools')
ServiceInstancePools('service_instance_pools', 'Service Instance Pools', 'an optional tech field')
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
' loads the ServiceInstancePools element
include('azure-v2/Item/Databases/ServiceInstancePools')
ServiceInstancePools('service_instance_pools', 'Service Instance Pools', 'an optional tech field')
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
' loads the ServiceInstancePools element
include('azure-v2/Item/Databases/ServiceInstancePools')
ServiceInstancePoolsGroup('service_instance_pools', 'Service Instance Pools', 'an optional tech field'){
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
' loads the ServiceInstancePools element
include('azure-v2/Item/Databases/ServiceInstancePools')
ServiceInstancePoolsGroup('service_instance_pools', 'Service Instance Pools', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

