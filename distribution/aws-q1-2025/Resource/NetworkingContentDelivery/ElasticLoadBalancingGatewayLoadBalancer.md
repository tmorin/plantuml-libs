# ElasticLoadBalancingGatewayLoadBalancer


```text
aws-q1-2025/Resource/NetworkingContentDelivery/ElasticLoadBalancingGatewayLoadBalancer
```

```text
include('aws-q1-2025/Resource/NetworkingContentDelivery/ElasticLoadBalancingGatewayLoadBalancer')
```



| Illustration | ElasticLoadBalancingGatewayLoadBalancer | ElasticLoadBalancingGatewayLoadBalancerCard | ElasticLoadBalancingGatewayLoadBalancerGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2025/Resource/NetworkingContentDelivery/ElasticLoadBalancingGatewayLoadBalancer.png) | ![illustration for ElasticLoadBalancingGatewayLoadBalancer](../../../aws-q1-2025/Resource/NetworkingContentDelivery/ElasticLoadBalancingGatewayLoadBalancer.Local.png) | ![illustration for ElasticLoadBalancingGatewayLoadBalancerCard](../../../aws-q1-2025/Resource/NetworkingContentDelivery/ElasticLoadBalancingGatewayLoadBalancerCard.Local.png) | ![illustration for ElasticLoadBalancingGatewayLoadBalancerGroup](../../../aws-q1-2025/Resource/NetworkingContentDelivery/ElasticLoadBalancingGatewayLoadBalancerGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ElasticLoadBalancingGatewayLoadBalancerXs>`
- `<$ElasticLoadBalancingGatewayLoadBalancerSm>`
- `<$ElasticLoadBalancingGatewayLoadBalancerMd>`
- `<$ElasticLoadBalancingGatewayLoadBalancerLg>`





## ElasticLoadBalancingGatewayLoadBalancer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element ElasticLoadBalancingGatewayLoadBalancer
include('aws-q1-2025/Resource/NetworkingContentDelivery/ElasticLoadBalancingGatewayLoadBalancer')

' renders the element
ElasticLoadBalancingGatewayLoadBalancer('ElasticLoadBalancingGatewayLoadBalancer', 'Elastic Load Balancing Gateway Load Balancer', 'an optional tech label', 'an optional description')
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element ElasticLoadBalancingGatewayLoadBalancer
include('aws-q1-2025/Resource/NetworkingContentDelivery/ElasticLoadBalancingGatewayLoadBalancer')

' renders the element
ElasticLoadBalancingGatewayLoadBalancer('ElasticLoadBalancingGatewayLoadBalancer', 'Elastic Load Balancing Gateway Load Balancer', 'an optional tech label', 'an optional description')
@enduml
```

## ElasticLoadBalancingGatewayLoadBalancerCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element ElasticLoadBalancingGatewayLoadBalancerCard
include('aws-q1-2025/Resource/NetworkingContentDelivery/ElasticLoadBalancingGatewayLoadBalancer')

' renders the element
ElasticLoadBalancingGatewayLoadBalancerCard('ElasticLoadBalancingGatewayLoadBalancerCard', 'Elastic Load Balancing Gateway Load Balancer Card', 'an optional description')
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element ElasticLoadBalancingGatewayLoadBalancerCard
include('aws-q1-2025/Resource/NetworkingContentDelivery/ElasticLoadBalancingGatewayLoadBalancer')

' renders the element
ElasticLoadBalancingGatewayLoadBalancerCard('ElasticLoadBalancingGatewayLoadBalancerCard', 'Elastic Load Balancing Gateway Load Balancer Card', 'an optional description')
@enduml
```

## ElasticLoadBalancingGatewayLoadBalancerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element ElasticLoadBalancingGatewayLoadBalancerGroup
include('aws-q1-2025/Resource/NetworkingContentDelivery/ElasticLoadBalancingGatewayLoadBalancer')

' renders the element
ElasticLoadBalancingGatewayLoadBalancerGroup('ElasticLoadBalancingGatewayLoadBalancerGroup', 'Elastic Load Balancing Gateway Load Balancer Group', 'an optional tech label') {
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element ElasticLoadBalancingGatewayLoadBalancerGroup
include('aws-q1-2025/Resource/NetworkingContentDelivery/ElasticLoadBalancingGatewayLoadBalancer')

' renders the element
ElasticLoadBalancingGatewayLoadBalancerGroup('ElasticLoadBalancingGatewayLoadBalancerGroup', 'Elastic Load Balancing Gateway Load Balancer Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

