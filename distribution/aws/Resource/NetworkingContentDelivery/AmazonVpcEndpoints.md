# AmazonVpcEndpoints


```text
aws/Resource/NetworkingContentDelivery/AmazonVpcEndpoints
```

```text
include('aws/Resource/NetworkingContentDelivery/AmazonVpcEndpoints')
```



| Illustration | AmazonVpcEndpoints | AmazonVpcEndpointsCard | AmazonVpcEndpointsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws/Resource/NetworkingContentDelivery/AmazonVpcEndpoints.png) | ![illustration for AmazonVpcEndpoints](../../../aws/Resource/NetworkingContentDelivery/AmazonVpcEndpoints.Local.png) | ![illustration for AmazonVpcEndpointsCard](../../../aws/Resource/NetworkingContentDelivery/AmazonVpcEndpointsCard.Local.png) | ![illustration for AmazonVpcEndpointsGroup](../../../aws/Resource/NetworkingContentDelivery/AmazonVpcEndpointsGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonVpcEndpointsXs>`
- `<$AmazonVpcEndpointsSm>`
- `<$AmazonVpcEndpointsMd>`
- `<$AmazonVpcEndpointsLg>`





## AmazonVpcEndpoints

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonVpcEndpoints
include('aws/Resource/NetworkingContentDelivery/AmazonVpcEndpoints')

' renders the element
AmazonVpcEndpoints('AmazonVpcEndpoints', 'Amazon Vpc Endpoints', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AmazonVpcEndpoints
include('aws/Resource/NetworkingContentDelivery/AmazonVpcEndpoints')

' renders the element
AmazonVpcEndpoints('AmazonVpcEndpoints', 'Amazon Vpc Endpoints', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonVpcEndpointsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonVpcEndpointsCard
include('aws/Resource/NetworkingContentDelivery/AmazonVpcEndpoints')

' renders the element
AmazonVpcEndpointsCard('AmazonVpcEndpointsCard', 'Amazon Vpc Endpoints Card', 'an optional description')
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

' loads the Item which embeds the element AmazonVpcEndpointsCard
include('aws/Resource/NetworkingContentDelivery/AmazonVpcEndpoints')

' renders the element
AmazonVpcEndpointsCard('AmazonVpcEndpointsCard', 'Amazon Vpc Endpoints Card', 'an optional description')
@enduml
```

## AmazonVpcEndpointsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonVpcEndpointsGroup
include('aws/Resource/NetworkingContentDelivery/AmazonVpcEndpoints')

' renders the element
AmazonVpcEndpointsGroup('AmazonVpcEndpointsGroup', 'Amazon Vpc Endpoints Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonVpcEndpointsGroup
include('aws/Resource/NetworkingContentDelivery/AmazonVpcEndpoints')

' renders the element
AmazonVpcEndpointsGroup('AmazonVpcEndpointsGroup', 'Amazon Vpc Endpoints Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

