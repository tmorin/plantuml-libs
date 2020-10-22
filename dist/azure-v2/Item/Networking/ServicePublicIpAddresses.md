# Service Public Ip Addresses

```text
azure-v2/Item/Networking/ServicePublicIpAddresses
```

```text
include('azure-v2/Item/Networking/ServicePublicIpAddresses')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServicePublicIpAddresses.png)|![](ServicePublicIpAddresses.card.png)|![](ServicePublicIpAddresses.element.png)|![](ServicePublicIpAddresses.group.png)|



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
' loads the ServicePublicIpAddresses element
include('azure-v2/Item/Networking/ServicePublicIpAddresses')
ServicePublicIpAddressesCard('service_public_ip_addresses', 'Service Public Ip Addresses', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServicePublicIpAddresses element
include('azure-v2/Item/Networking/ServicePublicIpAddresses')
ServicePublicIpAddressesCard('service_public_ip_addresses', 'Service Public Ip Addresses', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServicePublicIpAddresses element
include('azure-v2/Item/Networking/ServicePublicIpAddresses')
ServicePublicIpAddresses('service_public_ip_addresses', 'Service Public Ip Addresses', 'an optional tech field')
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
' loads the ServicePublicIpAddresses element
include('azure-v2/Item/Networking/ServicePublicIpAddresses')
ServicePublicIpAddresses('service_public_ip_addresses', 'Service Public Ip Addresses', 'an optional tech field')
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
' loads the ServicePublicIpAddresses element
include('azure-v2/Item/Networking/ServicePublicIpAddresses')
ServicePublicIpAddressesGroup('service_public_ip_addresses', 'Service Public Ip Addresses', 'an optional tech field'){
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
' loads the ServicePublicIpAddresses element
include('azure-v2/Item/Networking/ServicePublicIpAddresses')
ServicePublicIpAddressesGroup('service_public_ip_addresses', 'Service Public Ip Addresses', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

