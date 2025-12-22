# ServiceLoadBalancerHub


```text
azure-23/Item/NewIcons/ServiceLoadBalancerHub
```

```text
include('azure-23/Item/NewIcons/ServiceLoadBalancerHub')
```



| Illustration | ServiceLoadBalancerHub | ServiceLoadBalancerHubCard | ServiceLoadBalancerHubGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-23/Item/NewIcons/ServiceLoadBalancerHub.png) | ![illustration for ServiceLoadBalancerHub](../../../azure-23/Item/NewIcons/ServiceLoadBalancerHub.Local.png) | ![illustration for ServiceLoadBalancerHubCard](../../../azure-23/Item/NewIcons/ServiceLoadBalancerHubCard.Local.png) | ![illustration for ServiceLoadBalancerHubGroup](../../../azure-23/Item/NewIcons/ServiceLoadBalancerHubGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceLoadBalancerHubXs>`
- `<$ServiceLoadBalancerHubSm>`
- `<$ServiceLoadBalancerHubMd>`
- `<$ServiceLoadBalancerHubLg>`





## ServiceLoadBalancerHub

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-23/bootstrap')

' loads the Item which embeds the element ServiceLoadBalancerHub
include('azure-23/Item/NewIcons/ServiceLoadBalancerHub')

' renders the element
ServiceLoadBalancerHub('ServiceLoadBalancerHub', 'Service Load Balancer Hub', 'an optional tech label', 'an optional description')
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
include('azure-23/bootstrap')

' loads the Item which embeds the element ServiceLoadBalancerHub
include('azure-23/Item/NewIcons/ServiceLoadBalancerHub')

' renders the element
ServiceLoadBalancerHub('ServiceLoadBalancerHub', 'Service Load Balancer Hub', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceLoadBalancerHubCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-23/bootstrap')

' loads the Item which embeds the element ServiceLoadBalancerHubCard
include('azure-23/Item/NewIcons/ServiceLoadBalancerHub')

' renders the element
ServiceLoadBalancerHubCard('ServiceLoadBalancerHubCard', 'Service Load Balancer Hub Card', 'an optional description')
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
include('azure-23/bootstrap')

' loads the Item which embeds the element ServiceLoadBalancerHubCard
include('azure-23/Item/NewIcons/ServiceLoadBalancerHub')

' renders the element
ServiceLoadBalancerHubCard('ServiceLoadBalancerHubCard', 'Service Load Balancer Hub Card', 'an optional description')
@enduml
```

## ServiceLoadBalancerHubGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-23/bootstrap')

' loads the Item which embeds the element ServiceLoadBalancerHubGroup
include('azure-23/Item/NewIcons/ServiceLoadBalancerHub')

' renders the element
ServiceLoadBalancerHubGroup('ServiceLoadBalancerHubGroup', 'Service Load Balancer Hub Group', 'an optional tech label') {
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
include('azure-23/bootstrap')

' loads the Item which embeds the element ServiceLoadBalancerHubGroup
include('azure-23/Item/NewIcons/ServiceLoadBalancerHub')

' renders the element
ServiceLoadBalancerHubGroup('ServiceLoadBalancerHubGroup', 'Service Load Balancer Hub Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

