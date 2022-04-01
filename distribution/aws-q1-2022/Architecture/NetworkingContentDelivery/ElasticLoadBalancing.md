# ElasticLoadBalancing


```text
aws-q1-2022/Architecture/NetworkingContentDelivery/ElasticLoadBalancing
```

```text
include('aws-q1-2022/Architecture/NetworkingContentDelivery/ElasticLoadBalancing')
```



| Illustration | ElasticLoadBalancing | ElasticLoadBalancingCard | ElasticLoadBalancingGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2022/Architecture/NetworkingContentDelivery/ElasticLoadBalancing.png) | ![illustration for ElasticLoadBalancing](../../../aws-q1-2022/Architecture/NetworkingContentDelivery/ElasticLoadBalancing.Local.png) | ![illustration for ElasticLoadBalancingCard](../../../aws-q1-2022/Architecture/NetworkingContentDelivery/ElasticLoadBalancingCard.Local.png) | ![illustration for ElasticLoadBalancingGroup](../../../aws-q1-2022/Architecture/NetworkingContentDelivery/ElasticLoadBalancingGroup.Local.png) |




## ElasticLoadBalancing

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element ElasticLoadBalancing
include('aws-q1-2022/Architecture/NetworkingContentDelivery/ElasticLoadBalancing')

' renders the element
ElasticLoadBalancing('ElasticLoadBalancing', 'Elastic Load Balancing', 'an optional tech label')
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
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element ElasticLoadBalancing
include('aws-q1-2022/Architecture/NetworkingContentDelivery/ElasticLoadBalancing')

' renders the element
ElasticLoadBalancing('ElasticLoadBalancing', 'Elastic Load Balancing', 'an optional tech label')
@enduml
```

## ElasticLoadBalancingCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element ElasticLoadBalancingCard
include('aws-q1-2022/Architecture/NetworkingContentDelivery/ElasticLoadBalancing')

' renders the element
ElasticLoadBalancingCard('ElasticLoadBalancingCard', 'Elastic Load Balancing Card', 'an optional description')
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
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element ElasticLoadBalancingCard
include('aws-q1-2022/Architecture/NetworkingContentDelivery/ElasticLoadBalancing')

' renders the element
ElasticLoadBalancingCard('ElasticLoadBalancingCard', 'Elastic Load Balancing Card', 'an optional description')
@enduml
```

## ElasticLoadBalancingGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element ElasticLoadBalancingGroup
include('aws-q1-2022/Architecture/NetworkingContentDelivery/ElasticLoadBalancing')

' renders the element
ElasticLoadBalancingGroup('ElasticLoadBalancingGroup', 'Elastic Load Balancing Group', 'an optional tech label') {
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
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element ElasticLoadBalancingGroup
include('aws-q1-2022/Architecture/NetworkingContentDelivery/ElasticLoadBalancing')

' renders the element
ElasticLoadBalancingGroup('ElasticLoadBalancingGroup', 'Elastic Load Balancing Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

