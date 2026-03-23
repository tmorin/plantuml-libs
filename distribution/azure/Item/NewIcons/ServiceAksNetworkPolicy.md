# ServiceAksNetworkPolicy


```text
azure/Item/NewIcons/ServiceAksNetworkPolicy
```

```text
include('azure/Item/NewIcons/ServiceAksNetworkPolicy')
```



| Illustration | ServiceAksNetworkPolicy | ServiceAksNetworkPolicyCard | ServiceAksNetworkPolicyGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/NewIcons/ServiceAksNetworkPolicy.png) | ![illustration for ServiceAksNetworkPolicy](../../../azure/Item/NewIcons/ServiceAksNetworkPolicy.Local.png) | ![illustration for ServiceAksNetworkPolicyCard](../../../azure/Item/NewIcons/ServiceAksNetworkPolicyCard.Local.png) | ![illustration for ServiceAksNetworkPolicyGroup](../../../azure/Item/NewIcons/ServiceAksNetworkPolicyGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceAksNetworkPolicyXs>`
- `<$ServiceAksNetworkPolicySm>`
- `<$ServiceAksNetworkPolicyMd>`
- `<$ServiceAksNetworkPolicyLg>`





## ServiceAksNetworkPolicy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceAksNetworkPolicy
include('azure/Item/NewIcons/ServiceAksNetworkPolicy')

' renders the element
ServiceAksNetworkPolicy('ServiceAksNetworkPolicy', 'Service Aks Network Policy', 'an optional tech label', 'an optional description')
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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceAksNetworkPolicy
include('azure/Item/NewIcons/ServiceAksNetworkPolicy')

' renders the element
ServiceAksNetworkPolicy('ServiceAksNetworkPolicy', 'Service Aks Network Policy', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceAksNetworkPolicyCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceAksNetworkPolicyCard
include('azure/Item/NewIcons/ServiceAksNetworkPolicy')

' renders the element
ServiceAksNetworkPolicyCard('ServiceAksNetworkPolicyCard', 'Service Aks Network Policy Card', 'an optional description')
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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceAksNetworkPolicyCard
include('azure/Item/NewIcons/ServiceAksNetworkPolicy')

' renders the element
ServiceAksNetworkPolicyCard('ServiceAksNetworkPolicyCard', 'Service Aks Network Policy Card', 'an optional description')
@enduml
```

## ServiceAksNetworkPolicyGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceAksNetworkPolicyGroup
include('azure/Item/NewIcons/ServiceAksNetworkPolicy')

' renders the element
ServiceAksNetworkPolicyGroup('ServiceAksNetworkPolicyGroup', 'Service Aks Network Policy Group', 'an optional tech label') {
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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceAksNetworkPolicyGroup
include('azure/Item/NewIcons/ServiceAksNetworkPolicy')

' renders the element
ServiceAksNetworkPolicyGroup('ServiceAksNetworkPolicyGroup', 'Service Aks Network Policy Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

