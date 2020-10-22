# Service Peering Service

```text
azure-v2/Item/Other/ServicePeeringService
```

```text
include('azure-v2/Item/Other/ServicePeeringService')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServicePeeringService.png)|![](ServicePeeringService.card.png)|![](ServicePeeringService.element.png)|![](ServicePeeringService.group.png)|



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
' loads the ServicePeeringService element
include('azure-v2/Item/Other/ServicePeeringService')
ServicePeeringServiceCard('service_peering_service', 'Service Peering Service', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServicePeeringService element
include('azure-v2/Item/Other/ServicePeeringService')
ServicePeeringServiceCard('service_peering_service', 'Service Peering Service', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServicePeeringService element
include('azure-v2/Item/Other/ServicePeeringService')
ServicePeeringService('service_peering_service', 'Service Peering Service', 'an optional tech field')
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
' loads the ServicePeeringService element
include('azure-v2/Item/Other/ServicePeeringService')
ServicePeeringService('service_peering_service', 'Service Peering Service', 'an optional tech field')
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
' loads the ServicePeeringService element
include('azure-v2/Item/Other/ServicePeeringService')
ServicePeeringServiceGroup('service_peering_service', 'Service Peering Service', 'an optional tech field'){
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
' loads the ServicePeeringService element
include('azure-v2/Item/Other/ServicePeeringService')
ServicePeeringServiceGroup('service_peering_service', 'Service Peering Service', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

