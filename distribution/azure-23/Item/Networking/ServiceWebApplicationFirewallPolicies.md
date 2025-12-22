# ServiceWebApplicationFirewallPolicies


```text
azure-23/Item/Networking/ServiceWebApplicationFirewallPolicies
```

```text
include('azure-23/Item/Networking/ServiceWebApplicationFirewallPolicies')
```



| Illustration | ServiceWebApplicationFirewallPolicies | ServiceWebApplicationFirewallPoliciesCard | ServiceWebApplicationFirewallPoliciesGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-23/Item/Networking/ServiceWebApplicationFirewallPolicies.png) | ![illustration for ServiceWebApplicationFirewallPolicies](../../../azure-23/Item/Networking/ServiceWebApplicationFirewallPolicies.Local.png) | ![illustration for ServiceWebApplicationFirewallPoliciesCard](../../../azure-23/Item/Networking/ServiceWebApplicationFirewallPoliciesCard.Local.png) | ![illustration for ServiceWebApplicationFirewallPoliciesGroup](../../../azure-23/Item/Networking/ServiceWebApplicationFirewallPoliciesGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceWebApplicationFirewallPoliciesXs>`
- `<$ServiceWebApplicationFirewallPoliciesSm>`
- `<$ServiceWebApplicationFirewallPoliciesMd>`
- `<$ServiceWebApplicationFirewallPoliciesLg>`





## ServiceWebApplicationFirewallPolicies

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-23/bootstrap')

' loads the Item which embeds the element ServiceWebApplicationFirewallPolicies
include('azure-23/Item/Networking/ServiceWebApplicationFirewallPolicies')

' renders the element
ServiceWebApplicationFirewallPolicies('ServiceWebApplicationFirewallPolicies', 'Service Web Application Firewall Policies', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceWebApplicationFirewallPolicies
include('azure-23/Item/Networking/ServiceWebApplicationFirewallPolicies')

' renders the element
ServiceWebApplicationFirewallPolicies('ServiceWebApplicationFirewallPolicies', 'Service Web Application Firewall Policies', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceWebApplicationFirewallPoliciesCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-23/bootstrap')

' loads the Item which embeds the element ServiceWebApplicationFirewallPoliciesCard
include('azure-23/Item/Networking/ServiceWebApplicationFirewallPolicies')

' renders the element
ServiceWebApplicationFirewallPoliciesCard('ServiceWebApplicationFirewallPoliciesCard', 'Service Web Application Firewall Policies Card', 'an optional description')
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

' loads the Item which embeds the element ServiceWebApplicationFirewallPoliciesCard
include('azure-23/Item/Networking/ServiceWebApplicationFirewallPolicies')

' renders the element
ServiceWebApplicationFirewallPoliciesCard('ServiceWebApplicationFirewallPoliciesCard', 'Service Web Application Firewall Policies Card', 'an optional description')
@enduml
```

## ServiceWebApplicationFirewallPoliciesGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-23/bootstrap')

' loads the Item which embeds the element ServiceWebApplicationFirewallPoliciesGroup
include('azure-23/Item/Networking/ServiceWebApplicationFirewallPolicies')

' renders the element
ServiceWebApplicationFirewallPoliciesGroup('ServiceWebApplicationFirewallPoliciesGroup', 'Service Web Application Firewall Policies Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceWebApplicationFirewallPoliciesGroup
include('azure-23/Item/Networking/ServiceWebApplicationFirewallPolicies')

' renders the element
ServiceWebApplicationFirewallPoliciesGroup('ServiceWebApplicationFirewallPoliciesGroup', 'Service Web Application Firewall Policies Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

