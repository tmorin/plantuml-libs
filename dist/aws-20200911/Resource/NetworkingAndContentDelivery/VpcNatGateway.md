# Vpc Nat Gateway

```text
aws-20200911/Resource/NetworkingAndContentDelivery/VpcNatGateway
```

```text
include('aws-20200911/Resource/NetworkingAndContentDelivery/VpcNatGateway')
```

|icon|card|element|group|
|---|---|---|---|
|![](VpcNatGateway.png)|![](VpcNatGateway.card.png)|![](VpcNatGateway.element.png)|![](VpcNatGateway.group.png)|



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
' loads the VpcNatGateway element
include('aws-20200911/Resource/NetworkingAndContentDelivery/VpcNatGateway')
VpcNatGatewayCard('vpc_nat_gateway', 'Vpc Nat Gateway', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the VpcNatGateway element
include('aws-20200911/Resource/NetworkingAndContentDelivery/VpcNatGateway')
VpcNatGatewayCard('vpc_nat_gateway', 'Vpc Nat Gateway', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the VpcNatGateway element
include('aws-20200911/Resource/NetworkingAndContentDelivery/VpcNatGateway')
VpcNatGateway('vpc_nat_gateway', 'Vpc Nat Gateway', 'an optional tech field')
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
' loads the VpcNatGateway element
include('aws-20200911/Resource/NetworkingAndContentDelivery/VpcNatGateway')
VpcNatGateway('vpc_nat_gateway', 'Vpc Nat Gateway', 'an optional tech field')
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
' loads the VpcNatGateway element
include('aws-20200911/Resource/NetworkingAndContentDelivery/VpcNatGateway')
VpcNatGatewayGroup('vpc_nat_gateway', 'Vpc Nat Gateway', 'an optional tech field'){
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
' loads the VpcNatGateway element
include('aws-20200911/Resource/NetworkingAndContentDelivery/VpcNatGateway')
VpcNatGatewayGroup('vpc_nat_gateway', 'Vpc Nat Gateway', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

