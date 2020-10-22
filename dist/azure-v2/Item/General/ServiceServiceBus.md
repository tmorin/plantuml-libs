# Service Service Bus

```text
azure-v2/Item/General/ServiceServiceBus
```

```text
include('azure-v2/Item/General/ServiceServiceBus')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceServiceBus.png)|![](ServiceServiceBus.card.png)|![](ServiceServiceBus.element.png)|![](ServiceServiceBus.group.png)|



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
' loads the ServiceServiceBus element
include('azure-v2/Item/General/ServiceServiceBus')
ServiceServiceBusCard('service_service_bus', 'Service Service Bus', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceServiceBus element
include('azure-v2/Item/General/ServiceServiceBus')
ServiceServiceBusCard('service_service_bus', 'Service Service Bus', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceServiceBus element
include('azure-v2/Item/General/ServiceServiceBus')
ServiceServiceBus('service_service_bus', 'Service Service Bus', 'an optional tech field')
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
' loads the ServiceServiceBus element
include('azure-v2/Item/General/ServiceServiceBus')
ServiceServiceBus('service_service_bus', 'Service Service Bus', 'an optional tech field')
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
' loads the ServiceServiceBus element
include('azure-v2/Item/General/ServiceServiceBus')
ServiceServiceBusGroup('service_service_bus', 'Service Service Bus', 'an optional tech field'){
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
' loads the ServiceServiceBus element
include('azure-v2/Item/General/ServiceServiceBus')
ServiceServiceBusGroup('service_service_bus', 'Service Service Bus', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

