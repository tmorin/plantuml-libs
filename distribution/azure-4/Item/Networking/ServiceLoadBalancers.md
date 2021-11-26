# ServiceLoadBalancers


```text
azure-4/Item/Networking/ServiceLoadBalancers
```

```text
include('azure-4/Item/Networking/ServiceLoadBalancers')
```



| Illustration | ServiceLoadBalancers | ServiceLoadBalancersCard | ServiceLoadBalancersGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/Networking/ServiceLoadBalancers.png) | ![illustration for ServiceLoadBalancers](../../../azure-4/Item/Networking/ServiceLoadBalancers.Local.png) | ![illustration for ServiceLoadBalancersCard](../../../azure-4/Item/Networking/ServiceLoadBalancersCard.Local.png) | ![illustration for ServiceLoadBalancersGroup](../../../azure-4/Item/Networking/ServiceLoadBalancersGroup.Local.png) |




## ServiceLoadBalancers

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceLoadBalancers
include('azure-4/Item/Networking/ServiceLoadBalancers')

' renders the element
ServiceLoadBalancers('ServiceLoadBalancers', 'Service Load Balancers', 'an optional tech label')
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
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceLoadBalancers
include('azure-4/Item/Networking/ServiceLoadBalancers')

' renders the element
ServiceLoadBalancers('ServiceLoadBalancers', 'Service Load Balancers', 'an optional tech label')
@enduml
```

## ServiceLoadBalancersCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceLoadBalancersCard
include('azure-4/Item/Networking/ServiceLoadBalancers')

' renders the element
ServiceLoadBalancersCard('ServiceLoadBalancersCard', 'Service Load Balancers Card', 'an optional description')
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
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceLoadBalancersCard
include('azure-4/Item/Networking/ServiceLoadBalancers')

' renders the element
ServiceLoadBalancersCard('ServiceLoadBalancersCard', 'Service Load Balancers Card', 'an optional description')
@enduml
```

## ServiceLoadBalancersGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceLoadBalancersGroup
include('azure-4/Item/Networking/ServiceLoadBalancers')

' renders the element
ServiceLoadBalancersGroup('ServiceLoadBalancersGroup', 'Service Load Balancers Group', 'an optional tech label') {
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
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceLoadBalancersGroup
include('azure-4/Item/Networking/ServiceLoadBalancers')

' renders the element
ServiceLoadBalancersGroup('ServiceLoadBalancersGroup', 'Service Load Balancers Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

