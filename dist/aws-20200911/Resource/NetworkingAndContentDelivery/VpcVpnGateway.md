# Vpc Vpn Gateway

```text
aws-20200911/Resource/NetworkingAndContentDelivery/VpcVpnGateway
```

```text
include('aws-20200911/Resource/NetworkingAndContentDelivery/VpcVpnGateway')
```

|icon|card|element|group|
|---|---|---|---|
|![](VpcVpnGateway.png)|![](VpcVpnGateway.card.png)|![](VpcVpnGateway.element.png)|![](VpcVpnGateway.group.png)|



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
' loads the VpcVpnGateway element
include('aws-20200911/Resource/NetworkingAndContentDelivery/VpcVpnGateway')
VpcVpnGatewayCard('vpc_vpn_gateway', 'Vpc Vpn Gateway', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the VpcVpnGateway element
include('aws-20200911/Resource/NetworkingAndContentDelivery/VpcVpnGateway')
VpcVpnGatewayCard('vpc_vpn_gateway', 'Vpc Vpn Gateway', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the VpcVpnGateway element
include('aws-20200911/Resource/NetworkingAndContentDelivery/VpcVpnGateway')
VpcVpnGateway('vpc_vpn_gateway', 'Vpc Vpn Gateway', 'an optional tech field')
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
' loads the VpcVpnGateway element
include('aws-20200911/Resource/NetworkingAndContentDelivery/VpcVpnGateway')
VpcVpnGateway('vpc_vpn_gateway', 'Vpc Vpn Gateway', 'an optional tech field')
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
' loads the VpcVpnGateway element
include('aws-20200911/Resource/NetworkingAndContentDelivery/VpcVpnGateway')
VpcVpnGatewayGroup('vpc_vpn_gateway', 'Vpc Vpn Gateway', 'an optional tech field'){
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
' loads the VpcVpnGateway element
include('aws-20200911/Resource/NetworkingAndContentDelivery/VpcVpnGateway')
VpcVpnGatewayGroup('vpc_vpn_gateway', 'Vpc Vpn Gateway', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

