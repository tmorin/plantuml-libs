# AmazonVpcVpnGateway


```text
aws/Resource/NetworkingContentDelivery/AmazonVpcVpnGateway
```

```text
include('aws/Resource/NetworkingContentDelivery/AmazonVpcVpnGateway')
```



| Illustration | AmazonVpcVpnGateway | AmazonVpcVpnGatewayCard | AmazonVpcVpnGatewayGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws/Resource/NetworkingContentDelivery/AmazonVpcVpnGateway.png) | ![illustration for AmazonVpcVpnGateway](../../../aws/Resource/NetworkingContentDelivery/AmazonVpcVpnGateway.Local.png) | ![illustration for AmazonVpcVpnGatewayCard](../../../aws/Resource/NetworkingContentDelivery/AmazonVpcVpnGatewayCard.Local.png) | ![illustration for AmazonVpcVpnGatewayGroup](../../../aws/Resource/NetworkingContentDelivery/AmazonVpcVpnGatewayGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonVpcVpnGatewayXs>`
- `<$AmazonVpcVpnGatewaySm>`
- `<$AmazonVpcVpnGatewayMd>`
- `<$AmazonVpcVpnGatewayLg>`





## AmazonVpcVpnGateway

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonVpcVpnGateway
include('aws/Resource/NetworkingContentDelivery/AmazonVpcVpnGateway')

' renders the element
AmazonVpcVpnGateway('AmazonVpcVpnGateway', 'Amazon Vpc Vpn Gateway', 'an optional tech label', 'an optional description')
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
include('aws/bootstrap')

' loads the Item which embeds the element AmazonVpcVpnGateway
include('aws/Resource/NetworkingContentDelivery/AmazonVpcVpnGateway')

' renders the element
AmazonVpcVpnGateway('AmazonVpcVpnGateway', 'Amazon Vpc Vpn Gateway', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonVpcVpnGatewayCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonVpcVpnGatewayCard
include('aws/Resource/NetworkingContentDelivery/AmazonVpcVpnGateway')

' renders the element
AmazonVpcVpnGatewayCard('AmazonVpcVpnGatewayCard', 'Amazon Vpc Vpn Gateway Card', 'an optional description')
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
include('aws/bootstrap')

' loads the Item which embeds the element AmazonVpcVpnGatewayCard
include('aws/Resource/NetworkingContentDelivery/AmazonVpcVpnGateway')

' renders the element
AmazonVpcVpnGatewayCard('AmazonVpcVpnGatewayCard', 'Amazon Vpc Vpn Gateway Card', 'an optional description')
@enduml
```

## AmazonVpcVpnGatewayGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonVpcVpnGatewayGroup
include('aws/Resource/NetworkingContentDelivery/AmazonVpcVpnGateway')

' renders the element
AmazonVpcVpnGatewayGroup('AmazonVpcVpnGatewayGroup', 'Amazon Vpc Vpn Gateway Group', 'an optional tech label') {
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
include('aws/bootstrap')

' loads the Item which embeds the element AmazonVpcVpnGatewayGroup
include('aws/Resource/NetworkingContentDelivery/AmazonVpcVpnGateway')

' renders the element
AmazonVpcVpnGatewayGroup('AmazonVpcVpnGatewayGroup', 'Amazon Vpc Vpn Gateway Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

