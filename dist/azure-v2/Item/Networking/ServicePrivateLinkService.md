# Service Private Link Service

```text
azure-v2/Item/Networking/ServicePrivateLinkService
```

```text
include('azure-v2/Item/Networking/ServicePrivateLinkService')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServicePrivateLinkService.png)|![](ServicePrivateLinkService.card.png)|![](ServicePrivateLinkService.element.png)|![](ServicePrivateLinkService.group.png)|



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
' loads the ServicePrivateLinkService element
include('azure-v2/Item/Networking/ServicePrivateLinkService')
ServicePrivateLinkServiceCard('service_private_link_service', 'Service Private Link Service', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServicePrivateLinkService element
include('azure-v2/Item/Networking/ServicePrivateLinkService')
ServicePrivateLinkServiceCard('service_private_link_service', 'Service Private Link Service', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServicePrivateLinkService element
include('azure-v2/Item/Networking/ServicePrivateLinkService')
ServicePrivateLinkService('service_private_link_service', 'Service Private Link Service', 'an optional tech field')
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
' loads the ServicePrivateLinkService element
include('azure-v2/Item/Networking/ServicePrivateLinkService')
ServicePrivateLinkService('service_private_link_service', 'Service Private Link Service', 'an optional tech field')
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
' loads the ServicePrivateLinkService element
include('azure-v2/Item/Networking/ServicePrivateLinkService')
ServicePrivateLinkServiceGroup('service_private_link_service', 'Service Private Link Service', 'an optional tech field'){
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
' loads the ServicePrivateLinkService element
include('azure-v2/Item/Networking/ServicePrivateLinkService')
ServicePrivateLinkServiceGroup('service_private_link_service', 'Service Private Link Service', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

