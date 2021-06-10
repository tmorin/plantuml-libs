# AmazonVpcPeeringConnection


```text
aws-20210131/Resource/NetworkingAndContentDelivery/AmazonVpcPeeringConnection
```

```text
include('aws-20210131/Resource/NetworkingAndContentDelivery/AmazonVpcPeeringConnection')
```



| Illustration | AmazonVpcPeeringConnection | AmazonVpcPeeringConnectionCard | AmazonVpcPeeringConnectionGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Resource/NetworkingAndContentDelivery/AmazonVpcPeeringConnection.png) | ![illustration for AmazonVpcPeeringConnection](../../../aws-20210131/Resource/NetworkingAndContentDelivery/AmazonVpcPeeringConnection.Local.png) | ![illustration for AmazonVpcPeeringConnectionCard](../../../aws-20210131/Resource/NetworkingAndContentDelivery/AmazonVpcPeeringConnectionCard.Local.png) | ![illustration for AmazonVpcPeeringConnectionGroup](../../../aws-20210131/Resource/NetworkingAndContentDelivery/AmazonVpcPeeringConnectionGroup.Local.png) |




## AmazonVpcPeeringConnection

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonVpcPeeringConnection
include('aws-20210131/Resource/NetworkingAndContentDelivery/AmazonVpcPeeringConnection')

' renders the element
AmazonVpcPeeringConnection('AmazonVpcPeeringConnection', 'Amazon Vpc Peering Connection', 'an optional tech label')
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonVpcPeeringConnection
include('aws-20210131/Resource/NetworkingAndContentDelivery/AmazonVpcPeeringConnection')

' renders the element
AmazonVpcPeeringConnection('AmazonVpcPeeringConnection', 'Amazon Vpc Peering Connection', 'an optional tech label')
@enduml
```

## AmazonVpcPeeringConnectionCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonVpcPeeringConnectionCard
include('aws-20210131/Resource/NetworkingAndContentDelivery/AmazonVpcPeeringConnection')

' renders the element
AmazonVpcPeeringConnectionCard('AmazonVpcPeeringConnectionCard', 'Amazon Vpc Peering Connection Card', 'an optional description')
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonVpcPeeringConnectionCard
include('aws-20210131/Resource/NetworkingAndContentDelivery/AmazonVpcPeeringConnection')

' renders the element
AmazonVpcPeeringConnectionCard('AmazonVpcPeeringConnectionCard', 'Amazon Vpc Peering Connection Card', 'an optional description')
@enduml
```

## AmazonVpcPeeringConnectionGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonVpcPeeringConnectionGroup
include('aws-20210131/Resource/NetworkingAndContentDelivery/AmazonVpcPeeringConnection')

' renders the element
AmazonVpcPeeringConnectionGroup('AmazonVpcPeeringConnectionGroup', 'Amazon Vpc Peering Connection Group', 'an optional tech label') {
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonVpcPeeringConnectionGroup
include('aws-20210131/Resource/NetworkingAndContentDelivery/AmazonVpcPeeringConnection')

' renders the element
AmazonVpcPeeringConnectionGroup('AmazonVpcPeeringConnectionGroup', 'Amazon Vpc Peering Connection Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

