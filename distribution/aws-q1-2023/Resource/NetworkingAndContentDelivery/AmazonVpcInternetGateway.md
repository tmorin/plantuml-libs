# AmazonVpcInternetGateway


```text
aws-q1-2023/Resource/NetworkingAndContentDelivery/AmazonVpcInternetGateway
```

```text
include('aws-q1-2023/Resource/NetworkingAndContentDelivery/AmazonVpcInternetGateway')
```



| Illustration | AmazonVpcInternetGateway | AmazonVpcInternetGatewayCard | AmazonVpcInternetGatewayGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2023/Resource/NetworkingAndContentDelivery/AmazonVpcInternetGateway.png) | ![illustration for AmazonVpcInternetGateway](../../../aws-q1-2023/Resource/NetworkingAndContentDelivery/AmazonVpcInternetGateway.Local.png) | ![illustration for AmazonVpcInternetGatewayCard](../../../aws-q1-2023/Resource/NetworkingAndContentDelivery/AmazonVpcInternetGatewayCard.Local.png) | ![illustration for AmazonVpcInternetGatewayGroup](../../../aws-q1-2023/Resource/NetworkingAndContentDelivery/AmazonVpcInternetGatewayGroup.Local.png) |




## AmazonVpcInternetGateway

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonVpcInternetGateway
include('aws-q1-2023/Resource/NetworkingAndContentDelivery/AmazonVpcInternetGateway')

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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonVpcInternetGateway
include('aws-q1-2023/Resource/NetworkingAndContentDelivery/AmazonVpcInternetGateway')

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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonVpcInternetGatewayCard
include('aws-q1-2023/Resource/NetworkingAndContentDelivery/AmazonVpcInternetGateway')

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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonVpcInternetGatewayCard
include('aws-q1-2023/Resource/NetworkingAndContentDelivery/AmazonVpcInternetGateway')

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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonVpcInternetGatewayGroup
include('aws-q1-2023/Resource/NetworkingAndContentDelivery/AmazonVpcInternetGateway')

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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonVpcInternetGatewayGroup
include('aws-q1-2023/Resource/NetworkingAndContentDelivery/AmazonVpcInternetGateway')

' renders the element
AmazonVpcInternetGatewayGroup('AmazonVpcInternetGatewayGroup', 'Amazon Vpc Internet Gateway Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

