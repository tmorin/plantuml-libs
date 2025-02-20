# ElasticLoadBalancingNetworkLoadBalancer


```text
aws-q1-2025/Resource/NetworkingContentDelivery/ElasticLoadBalancingNetworkLoadBalancer
```

```text
include('aws-q1-2025/Resource/NetworkingContentDelivery/ElasticLoadBalancingNetworkLoadBalancer')
```



| Illustration | ElasticLoadBalancingNetworkLoadBalancer | ElasticLoadBalancingNetworkLoadBalancerCard | ElasticLoadBalancingNetworkLoadBalancerGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2025/Resource/NetworkingContentDelivery/ElasticLoadBalancingNetworkLoadBalancer.png) | ![illustration for ElasticLoadBalancingNetworkLoadBalancer](../../../aws-q1-2025/Resource/NetworkingContentDelivery/ElasticLoadBalancingNetworkLoadBalancer.Local.png) | ![illustration for ElasticLoadBalancingNetworkLoadBalancerCard](../../../aws-q1-2025/Resource/NetworkingContentDelivery/ElasticLoadBalancingNetworkLoadBalancerCard.Local.png) | ![illustration for ElasticLoadBalancingNetworkLoadBalancerGroup](../../../aws-q1-2025/Resource/NetworkingContentDelivery/ElasticLoadBalancingNetworkLoadBalancerGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ElasticLoadBalancingNetworkLoadBalancerXs>`
- `<$ElasticLoadBalancingNetworkLoadBalancerSm>`
- `<$ElasticLoadBalancingNetworkLoadBalancerMd>`
- `<$ElasticLoadBalancingNetworkLoadBalancerLg>`





## ElasticLoadBalancingNetworkLoadBalancer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element ElasticLoadBalancingNetworkLoadBalancer
include('aws-q1-2025/Resource/NetworkingContentDelivery/ElasticLoadBalancingNetworkLoadBalancer')

' renders the element
ElasticLoadBalancingNetworkLoadBalancer('ElasticLoadBalancingNetworkLoadBalancer', 'Elastic Load Balancing Network Load Balancer', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ElasticLoadBalancingNetworkLoadBalancer
include('aws-q1-2025/Resource/NetworkingContentDelivery/ElasticLoadBalancingNetworkLoadBalancer')

' renders the element
ElasticLoadBalancingNetworkLoadBalancer('ElasticLoadBalancingNetworkLoadBalancer', 'Elastic Load Balancing Network Load Balancer', 'an optional tech label', 'an optional description')
@enduml
```

## ElasticLoadBalancingNetworkLoadBalancerCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element ElasticLoadBalancingNetworkLoadBalancerCard
include('aws-q1-2025/Resource/NetworkingContentDelivery/ElasticLoadBalancingNetworkLoadBalancer')

' renders the element
ElasticLoadBalancingNetworkLoadBalancerCard('ElasticLoadBalancingNetworkLoadBalancerCard', 'Elastic Load Balancing Network Load Balancer Card', 'an optional description')
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

' loads the Item which embeds the element ElasticLoadBalancingNetworkLoadBalancerCard
include('aws-q1-2025/Resource/NetworkingContentDelivery/ElasticLoadBalancingNetworkLoadBalancer')

' renders the element
ElasticLoadBalancingNetworkLoadBalancerCard('ElasticLoadBalancingNetworkLoadBalancerCard', 'Elastic Load Balancing Network Load Balancer Card', 'an optional description')
@enduml
```

## ElasticLoadBalancingNetworkLoadBalancerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element ElasticLoadBalancingNetworkLoadBalancerGroup
include('aws-q1-2025/Resource/NetworkingContentDelivery/ElasticLoadBalancingNetworkLoadBalancer')

' renders the element
ElasticLoadBalancingNetworkLoadBalancerGroup('ElasticLoadBalancingNetworkLoadBalancerGroup', 'Elastic Load Balancing Network Load Balancer Group', 'an optional tech label') {
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

' loads the Item which embeds the element ElasticLoadBalancingNetworkLoadBalancerGroup
include('aws-q1-2025/Resource/NetworkingContentDelivery/ElasticLoadBalancingNetworkLoadBalancer')

' renders the element
ElasticLoadBalancingNetworkLoadBalancerGroup('ElasticLoadBalancingNetworkLoadBalancerGroup', 'Elastic Load Balancing Network Load Balancer Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

