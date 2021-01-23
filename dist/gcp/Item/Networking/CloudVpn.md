# Cloud Vpn

```text
gcp/Item/Networking/CloudVpn
```

```text
include('gcp/Item/Networking/CloudVpn')
```

|icon|card|element|group|
|---|---|---|---|
|![](CloudVpn.png)|![](CloudVpn.card.png)|![](CloudVpn.element.png)|![](CloudVpn.group.png)|



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
' loads the CloudVpn element
include('gcp/Item/Networking/CloudVpn')
CloudVpnCard('cloud_vpn', 'Cloud Vpn', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the CloudVpn element
include('gcp/Item/Networking/CloudVpn')
CloudVpnCard('cloud_vpn', 'Cloud Vpn', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the CloudVpn element
include('gcp/Item/Networking/CloudVpn')
CloudVpn('cloud_vpn', 'Cloud Vpn', 'an optional tech field')
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
' loads the CloudVpn element
include('gcp/Item/Networking/CloudVpn')
CloudVpn('cloud_vpn', 'Cloud Vpn', 'an optional tech field')
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
' loads the CloudVpn element
include('gcp/Item/Networking/CloudVpn')
CloudVpnGroup('cloud_vpn', 'Cloud Vpn', 'an optional tech field'){
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
' loads the CloudVpn element
include('gcp/Item/Networking/CloudVpn')
CloudVpnGroup('cloud_vpn', 'Cloud Vpn', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

