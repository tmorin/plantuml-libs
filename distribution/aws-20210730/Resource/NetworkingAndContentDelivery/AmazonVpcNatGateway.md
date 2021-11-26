# AmazonVpcNatGateway


```text
aws-20210730/Resource/NetworkingAndContentDelivery/AmazonVpcNatGateway
```

```text
include('aws-20210730/Resource/NetworkingAndContentDelivery/AmazonVpcNatGateway')
```



| Illustration | AmazonVpcNatGateway | AmazonVpcNatGatewayCard | AmazonVpcNatGatewayGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Resource/NetworkingAndContentDelivery/AmazonVpcNatGateway.png) | ![illustration for AmazonVpcNatGateway](../../../aws-20210730/Resource/NetworkingAndContentDelivery/AmazonVpcNatGateway.Local.png) | ![illustration for AmazonVpcNatGatewayCard](../../../aws-20210730/Resource/NetworkingAndContentDelivery/AmazonVpcNatGatewayCard.Local.png) | ![illustration for AmazonVpcNatGatewayGroup](../../../aws-20210730/Resource/NetworkingAndContentDelivery/AmazonVpcNatGatewayGroup.Local.png) |




## AmazonVpcNatGateway

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonVpcNatGateway
include('aws-20210730/Resource/NetworkingAndContentDelivery/AmazonVpcNatGateway')

' renders the element
AmazonVpcNatGateway('AmazonVpcNatGateway', 'Amazon Vpc Nat Gateway', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonVpcNatGateway
include('aws-20210730/Resource/NetworkingAndContentDelivery/AmazonVpcNatGateway')

' renders the element
AmazonVpcNatGateway('AmazonVpcNatGateway', 'Amazon Vpc Nat Gateway', 'an optional tech label')
@enduml
```

## AmazonVpcNatGatewayCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonVpcNatGatewayCard
include('aws-20210730/Resource/NetworkingAndContentDelivery/AmazonVpcNatGateway')

' renders the element
AmazonVpcNatGatewayCard('AmazonVpcNatGatewayCard', 'Amazon Vpc Nat Gateway Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonVpcNatGatewayCard
include('aws-20210730/Resource/NetworkingAndContentDelivery/AmazonVpcNatGateway')

' renders the element
AmazonVpcNatGatewayCard('AmazonVpcNatGatewayCard', 'Amazon Vpc Nat Gateway Card', 'an optional description')
@enduml
```

## AmazonVpcNatGatewayGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonVpcNatGatewayGroup
include('aws-20210730/Resource/NetworkingAndContentDelivery/AmazonVpcNatGateway')

' renders the element
AmazonVpcNatGatewayGroup('AmazonVpcNatGatewayGroup', 'Amazon Vpc Nat Gateway Group', 'an optional tech label') {
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

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonVpcNatGatewayGroup
include('aws-20210730/Resource/NetworkingAndContentDelivery/AmazonVpcNatGateway')

' renders the element
AmazonVpcNatGatewayGroup('AmazonVpcNatGatewayGroup', 'Amazon Vpc Nat Gateway Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

