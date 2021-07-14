# CloudLoadBalancing


```text
gcp/Item/Networking/CloudLoadBalancing
```

```text
include('gcp/Item/Networking/CloudLoadBalancing')
```



| Illustration | CloudLoadBalancing | CloudLoadBalancingCard | CloudLoadBalancingGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../gcp/Item/Networking/CloudLoadBalancing.png) | ![illustration for CloudLoadBalancing](../../../gcp/Item/Networking/CloudLoadBalancing.Local.png) | ![illustration for CloudLoadBalancingCard](../../../gcp/Item/Networking/CloudLoadBalancingCard.Local.png) | ![illustration for CloudLoadBalancingGroup](../../../gcp/Item/Networking/CloudLoadBalancingGroup.Local.png) |




## CloudLoadBalancing

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element CloudLoadBalancing
include('gcp/Item/Networking/CloudLoadBalancing')

' renders the element
CloudLoadBalancing('CloudLoadBalancing', 'Cloud Load Balancing', 'an optional tech label')
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
include('gcp/bootstrap')

' loads the Item which embeds the element CloudLoadBalancing
include('gcp/Item/Networking/CloudLoadBalancing')

' renders the element
CloudLoadBalancing('CloudLoadBalancing', 'Cloud Load Balancing', 'an optional tech label')
@enduml
```

## CloudLoadBalancingCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element CloudLoadBalancingCard
include('gcp/Item/Networking/CloudLoadBalancing')

' renders the element
CloudLoadBalancingCard('CloudLoadBalancingCard', 'Cloud Load Balancing Card', 'an optional description')
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
include('gcp/bootstrap')

' loads the Item which embeds the element CloudLoadBalancingCard
include('gcp/Item/Networking/CloudLoadBalancing')

' renders the element
CloudLoadBalancingCard('CloudLoadBalancingCard', 'Cloud Load Balancing Card', 'an optional description')
@enduml
```

## CloudLoadBalancingGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('gcp/bootstrap')

' loads the Item which embeds the element CloudLoadBalancingGroup
include('gcp/Item/Networking/CloudLoadBalancing')

' renders the element
CloudLoadBalancingGroup('CloudLoadBalancingGroup', 'Cloud Load Balancing Group', 'an optional tech label') {
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
include('gcp/bootstrap')

' loads the Item which embeds the element CloudLoadBalancingGroup
include('gcp/Item/Networking/CloudLoadBalancing')

' renders the element
CloudLoadBalancingGroup('CloudLoadBalancingGroup', 'Cloud Load Balancing Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

