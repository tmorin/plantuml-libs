# Vpc Customer Gateway

```text
aws-20200911/Resource/NetworkingAndContentDelivery/VpcCustomerGateway
```

```text
include('aws-20200911/Resource/NetworkingAndContentDelivery/VpcCustomerGateway')
```

|icon|card|element|group|
|---|---|---|---|
|![](VpcCustomerGateway.png)|![](VpcCustomerGateway.card.png)|![](VpcCustomerGateway.element.png)|![](VpcCustomerGateway.group.png)|



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
' loads the VpcCustomerGateway element
include('aws-20200911/Resource/NetworkingAndContentDelivery/VpcCustomerGateway')
VpcCustomerGatewayCard('vpc_customer_gateway', 'Vpc Customer Gateway', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the VpcCustomerGateway element
include('aws-20200911/Resource/NetworkingAndContentDelivery/VpcCustomerGateway')
VpcCustomerGatewayCard('vpc_customer_gateway', 'Vpc Customer Gateway', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the VpcCustomerGateway element
include('aws-20200911/Resource/NetworkingAndContentDelivery/VpcCustomerGateway')
VpcCustomerGateway('vpc_customer_gateway', 'Vpc Customer Gateway', 'an optional tech field')
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
' loads the VpcCustomerGateway element
include('aws-20200911/Resource/NetworkingAndContentDelivery/VpcCustomerGateway')
VpcCustomerGateway('vpc_customer_gateway', 'Vpc Customer Gateway', 'an optional tech field')
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
' loads the VpcCustomerGateway element
include('aws-20200911/Resource/NetworkingAndContentDelivery/VpcCustomerGateway')
VpcCustomerGatewayGroup('vpc_customer_gateway', 'Vpc Customer Gateway', 'an optional tech field'){
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
' loads the VpcCustomerGateway element
include('aws-20200911/Resource/NetworkingAndContentDelivery/VpcCustomerGateway')
VpcCustomerGatewayGroup('vpc_customer_gateway', 'Vpc Customer Gateway', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

