# Service Dns Zones

```text
azure-v2/Item/Networking/ServiceDnsZones
```

```text
include('azure-v2/Item/Networking/ServiceDnsZones')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceDnsZones.png)|![](ServiceDnsZones.card.png)|![](ServiceDnsZones.element.png)|![](ServiceDnsZones.group.png)|



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
' loads the ServiceDnsZones element
include('azure-v2/Item/Networking/ServiceDnsZones')
ServiceDnsZonesCard('service_dns_zones', 'Service Dns Zones', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceDnsZones element
include('azure-v2/Item/Networking/ServiceDnsZones')
ServiceDnsZonesCard('service_dns_zones', 'Service Dns Zones', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceDnsZones element
include('azure-v2/Item/Networking/ServiceDnsZones')
ServiceDnsZones('service_dns_zones', 'Service Dns Zones', 'an optional tech field')
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
' loads the ServiceDnsZones element
include('azure-v2/Item/Networking/ServiceDnsZones')
ServiceDnsZones('service_dns_zones', 'Service Dns Zones', 'an optional tech field')
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
' loads the ServiceDnsZones element
include('azure-v2/Item/Networking/ServiceDnsZones')
ServiceDnsZonesGroup('service_dns_zones', 'Service Dns Zones', 'an optional tech field'){
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
' loads the ServiceDnsZones element
include('azure-v2/Item/Networking/ServiceDnsZones')
ServiceDnsZonesGroup('service_dns_zones', 'Service Dns Zones', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

