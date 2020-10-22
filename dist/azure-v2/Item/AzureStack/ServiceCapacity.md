# Service Capacity

```text
azure-v2/Item/AzureStack/ServiceCapacity
```

```text
include('azure-v2/Item/AzureStack/ServiceCapacity')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceCapacity.png)|![](ServiceCapacity.card.png)|![](ServiceCapacity.element.png)|![](ServiceCapacity.group.png)|



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
' loads the ServiceCapacity element
include('azure-v2/Item/AzureStack/ServiceCapacity')
ServiceCapacityCard('service_capacity', 'Service Capacity', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceCapacity element
include('azure-v2/Item/AzureStack/ServiceCapacity')
ServiceCapacityCard('service_capacity', 'Service Capacity', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceCapacity element
include('azure-v2/Item/AzureStack/ServiceCapacity')
ServiceCapacity('service_capacity', 'Service Capacity', 'an optional tech field')
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
' loads the ServiceCapacity element
include('azure-v2/Item/AzureStack/ServiceCapacity')
ServiceCapacity('service_capacity', 'Service Capacity', 'an optional tech field')
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
' loads the ServiceCapacity element
include('azure-v2/Item/AzureStack/ServiceCapacity')
ServiceCapacityGroup('service_capacity', 'Service Capacity', 'an optional tech field'){
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
' loads the ServiceCapacity element
include('azure-v2/Item/AzureStack/ServiceCapacity')
ServiceCapacityGroup('service_capacity', 'Service Capacity', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

