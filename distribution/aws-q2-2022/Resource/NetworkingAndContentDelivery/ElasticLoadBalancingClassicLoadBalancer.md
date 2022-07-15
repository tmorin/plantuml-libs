# ElasticLoadBalancingClassicLoadBalancer


```text
aws-q2-2022/Resource/NetworkingAndContentDelivery/ElasticLoadBalancingClassicLoadBalancer
```

```text
include('aws-q2-2022/Resource/NetworkingAndContentDelivery/ElasticLoadBalancingClassicLoadBalancer')
```



| Illustration | ElasticLoadBalancingClassicLoadBalancer | ElasticLoadBalancingClassicLoadBalancerCard | ElasticLoadBalancingClassicLoadBalancerGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2022/Resource/NetworkingAndContentDelivery/ElasticLoadBalancingClassicLoadBalancer.png) | ![illustration for ElasticLoadBalancingClassicLoadBalancer](../../../aws-q2-2022/Resource/NetworkingAndContentDelivery/ElasticLoadBalancingClassicLoadBalancer.Local.png) | ![illustration for ElasticLoadBalancingClassicLoadBalancerCard](../../../aws-q2-2022/Resource/NetworkingAndContentDelivery/ElasticLoadBalancingClassicLoadBalancerCard.Local.png) | ![illustration for ElasticLoadBalancingClassicLoadBalancerGroup](../../../aws-q2-2022/Resource/NetworkingAndContentDelivery/ElasticLoadBalancingClassicLoadBalancerGroup.Local.png) |




## ElasticLoadBalancingClassicLoadBalancer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element ElasticLoadBalancingClassicLoadBalancer
include('aws-q2-2022/Resource/NetworkingAndContentDelivery/ElasticLoadBalancingClassicLoadBalancer')

' renders the element
ElasticLoadBalancingClassicLoadBalancer('ElasticLoadBalancingClassicLoadBalancer', 'Elastic Load Balancing Classic Load Balancer', 'an optional tech label')
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element ElasticLoadBalancingClassicLoadBalancer
include('aws-q2-2022/Resource/NetworkingAndContentDelivery/ElasticLoadBalancingClassicLoadBalancer')

' renders the element
ElasticLoadBalancingClassicLoadBalancer('ElasticLoadBalancingClassicLoadBalancer', 'Elastic Load Balancing Classic Load Balancer', 'an optional tech label')
@enduml
```

## ElasticLoadBalancingClassicLoadBalancerCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element ElasticLoadBalancingClassicLoadBalancerCard
include('aws-q2-2022/Resource/NetworkingAndContentDelivery/ElasticLoadBalancingClassicLoadBalancer')

' renders the element
ElasticLoadBalancingClassicLoadBalancerCard('ElasticLoadBalancingClassicLoadBalancerCard', 'Elastic Load Balancing Classic Load Balancer Card', 'an optional description')
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element ElasticLoadBalancingClassicLoadBalancerCard
include('aws-q2-2022/Resource/NetworkingAndContentDelivery/ElasticLoadBalancingClassicLoadBalancer')

' renders the element
ElasticLoadBalancingClassicLoadBalancerCard('ElasticLoadBalancingClassicLoadBalancerCard', 'Elastic Load Balancing Classic Load Balancer Card', 'an optional description')
@enduml
```

## ElasticLoadBalancingClassicLoadBalancerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element ElasticLoadBalancingClassicLoadBalancerGroup
include('aws-q2-2022/Resource/NetworkingAndContentDelivery/ElasticLoadBalancingClassicLoadBalancer')

' renders the element
ElasticLoadBalancingClassicLoadBalancerGroup('ElasticLoadBalancingClassicLoadBalancerGroup', 'Elastic Load Balancing Classic Load Balancer Group', 'an optional tech label') {
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element ElasticLoadBalancingClassicLoadBalancerGroup
include('aws-q2-2022/Resource/NetworkingAndContentDelivery/ElasticLoadBalancingClassicLoadBalancer')

' renders the element
ElasticLoadBalancingClassicLoadBalancerGroup('ElasticLoadBalancingClassicLoadBalancerGroup', 'Elastic Load Balancing Classic Load Balancer Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

