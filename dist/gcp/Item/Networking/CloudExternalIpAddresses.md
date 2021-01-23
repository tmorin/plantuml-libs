# Cloud External Ip Addresses

```text
gcp/Item/Networking/CloudExternalIpAddresses
```

```text
include('gcp/Item/Networking/CloudExternalIpAddresses')
```

|icon|card|element|group|
|---|---|---|---|
|![](CloudExternalIpAddresses.png)|![](CloudExternalIpAddresses.card.png)|![](CloudExternalIpAddresses.element.png)|![](CloudExternalIpAddresses.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the CloudExternalIpAddresses element
include('gcp/Item/Networking/CloudExternalIpAddresses')
CloudExternalIpAddressesCard('cloud_external_ip_addresses', 'Cloud External Ip Addresses', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the CloudExternalIpAddresses element
include('gcp/Item/Networking/CloudExternalIpAddresses')
CloudExternalIpAddressesCard('cloud_external_ip_addresses', 'Cloud External Ip Addresses', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the CloudExternalIpAddresses element
include('gcp/Item/Networking/CloudExternalIpAddresses')
CloudExternalIpAddresses('cloud_external_ip_addresses', 'Cloud External Ip Addresses', 'an optional tech field')
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
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the CloudExternalIpAddresses element
include('gcp/Item/Networking/CloudExternalIpAddresses')
CloudExternalIpAddresses('cloud_external_ip_addresses', 'Cloud External Ip Addresses', 'an optional tech field')
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
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the CloudExternalIpAddresses element
include('gcp/Item/Networking/CloudExternalIpAddresses')
CloudExternalIpAddressesGroup('cloud_external_ip_addresses', 'Cloud External Ip Addresses', 'an optional tech field'){
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
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the CloudExternalIpAddresses element
include('gcp/Item/Networking/CloudExternalIpAddresses')
CloudExternalIpAddressesGroup('cloud_external_ip_addresses', 'Cloud External Ip Addresses', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

