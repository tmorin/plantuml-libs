# AmazonVpcInternetGateway


```text
aws-q2-2023/Resource/NetworkingContentDelivery/AmazonVpcInternetGateway
```

```text
include('aws-q2-2023/Resource/NetworkingContentDelivery/AmazonVpcInternetGateway')
```



| Illustration | AmazonVpcInternetGateway | AmazonVpcInternetGatewayCard | AmazonVpcInternetGatewayGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2023/Resource/NetworkingContentDelivery/AmazonVpcInternetGateway.png) | ![illustration for AmazonVpcInternetGateway](../../../aws-q2-2023/Resource/NetworkingContentDelivery/AmazonVpcInternetGateway.Local.png) | ![illustration for AmazonVpcInternetGatewayCard](../../../aws-q2-2023/Resource/NetworkingContentDelivery/AmazonVpcInternetGatewayCard.Local.png) | ![illustration for AmazonVpcInternetGatewayGroup](../../../aws-q2-2023/Resource/NetworkingContentDelivery/AmazonVpcInternetGatewayGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonVpcInternetGatewayXs>`
- `<$AmazonVpcInternetGatewaySm>`
- `<$AmazonVpcInternetGatewayMd>`
- `<$AmazonVpcInternetGatewayLg>`





## AmazonVpcInternetGateway

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AmazonVpcInternetGateway
include('aws-q2-2023/Resource/NetworkingContentDelivery/AmazonVpcInternetGateway')

' renders the element
AmazonVpcInternetGateway('AmazonVpcInternetGateway', 'Amazon Vpc Internet Gateway', 'an optional tech label', 'an optional description')
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
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AmazonVpcInternetGateway
include('aws-q2-2023/Resource/NetworkingContentDelivery/AmazonVpcInternetGateway')

' renders the element
AmazonVpcInternetGateway('AmazonVpcInternetGateway', 'Amazon Vpc Internet Gateway', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonVpcInternetGatewayCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AmazonVpcInternetGatewayCard
include('aws-q2-2023/Resource/NetworkingContentDelivery/AmazonVpcInternetGateway')

' renders the element
AmazonVpcInternetGatewayCard('AmazonVpcInternetGatewayCard', 'Amazon Vpc Internet Gateway Card', 'an optional description')
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
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AmazonVpcInternetGatewayCard
include('aws-q2-2023/Resource/NetworkingContentDelivery/AmazonVpcInternetGateway')

' renders the element
AmazonVpcInternetGatewayCard('AmazonVpcInternetGatewayCard', 'Amazon Vpc Internet Gateway Card', 'an optional description')
@enduml
```

## AmazonVpcInternetGatewayGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AmazonVpcInternetGatewayGroup
include('aws-q2-2023/Resource/NetworkingContentDelivery/AmazonVpcInternetGateway')

' renders the element
AmazonVpcInternetGatewayGroup('AmazonVpcInternetGatewayGroup', 'Amazon Vpc Internet Gateway Group', 'an optional tech label') {
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
include('aws-q2-2023/bootstrap')

' loads the Item which embeds the element AmazonVpcInternetGatewayGroup
include('aws-q2-2023/Resource/NetworkingContentDelivery/AmazonVpcInternetGateway')

' renders the element
AmazonVpcInternetGatewayGroup('AmazonVpcInternetGatewayGroup', 'Amazon Vpc Internet Gateway Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

