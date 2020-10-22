# Vpc Vpn Connection

```text
aws-20200911/Resource/NetworkingAndContentDelivery/VpcVpnConnection
```

```text
include('aws-20200911/Resource/NetworkingAndContentDelivery/VpcVpnConnection')
```

|icon|card|element|group|
|---|---|---|---|
|![](VpcVpnConnection.png)|![](VpcVpnConnection.card.png)|![](VpcVpnConnection.element.png)|![](VpcVpnConnection.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the VpcVpnConnection element
include('aws-20200911/Resource/NetworkingAndContentDelivery/VpcVpnConnection')
VpcVpnConnectionCard('vpc_vpn_connection', 'Vpc Vpn Connection', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the VpcVpnConnection element
include('aws-20200911/Resource/NetworkingAndContentDelivery/VpcVpnConnection')
VpcVpnConnectionCard('vpc_vpn_connection', 'Vpc Vpn Connection', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the VpcVpnConnection element
include('aws-20200911/Resource/NetworkingAndContentDelivery/VpcVpnConnection')
VpcVpnConnection('vpc_vpn_connection', 'Vpc Vpn Connection', 'an optional tech field')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the VpcVpnConnection element
include('aws-20200911/Resource/NetworkingAndContentDelivery/VpcVpnConnection')
VpcVpnConnection('vpc_vpn_connection', 'Vpc Vpn Connection', 'an optional tech field')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the VpcVpnConnection element
include('aws-20200911/Resource/NetworkingAndContentDelivery/VpcVpnConnection')
VpcVpnConnectionGroup('vpc_vpn_connection', 'Vpc Vpn Connection', 'an optional tech field'){
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the VpcVpnConnection element
include('aws-20200911/Resource/NetworkingAndContentDelivery/VpcVpnConnection')
VpcVpnConnectionGroup('vpc_vpn_connection', 'Vpc Vpn Connection', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

