# ServiceServiceEndpointPolicies


```text
azure-6/Item/Networking/ServiceServiceEndpointPolicies
```

```text
include('azure-6/Item/Networking/ServiceServiceEndpointPolicies')
```



| Illustration | ServiceServiceEndpointPolicies | ServiceServiceEndpointPoliciesCard | ServiceServiceEndpointPoliciesGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-6/Item/Networking/ServiceServiceEndpointPolicies.png) | ![illustration for ServiceServiceEndpointPolicies](../../../azure-6/Item/Networking/ServiceServiceEndpointPolicies.Local.png) | ![illustration for ServiceServiceEndpointPoliciesCard](../../../azure-6/Item/Networking/ServiceServiceEndpointPoliciesCard.Local.png) | ![illustration for ServiceServiceEndpointPoliciesGroup](../../../azure-6/Item/Networking/ServiceServiceEndpointPoliciesGroup.Local.png) |




## ServiceServiceEndpointPolicies

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceServiceEndpointPolicies
include('azure-6/Item/Networking/ServiceServiceEndpointPolicies')

' renders the element
ServiceServiceEndpointPolicies('ServiceServiceEndpointPolicies', 'Service Service Endpoint Policies', 'an optional tech label', 'an optional description')
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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceServiceEndpointPolicies
include('azure-6/Item/Networking/ServiceServiceEndpointPolicies')

' renders the element
ServiceServiceEndpointPolicies('ServiceServiceEndpointPolicies', 'Service Service Endpoint Policies', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceServiceEndpointPoliciesCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceServiceEndpointPoliciesCard
include('azure-6/Item/Networking/ServiceServiceEndpointPolicies')

' renders the element
ServiceServiceEndpointPoliciesCard('ServiceServiceEndpointPoliciesCard', 'Service Service Endpoint Policies Card', 'an optional description')
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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceServiceEndpointPoliciesCard
include('azure-6/Item/Networking/ServiceServiceEndpointPolicies')

' renders the element
ServiceServiceEndpointPoliciesCard('ServiceServiceEndpointPoliciesCard', 'Service Service Endpoint Policies Card', 'an optional description')
@enduml
```

## ServiceServiceEndpointPoliciesGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceServiceEndpointPoliciesGroup
include('azure-6/Item/Networking/ServiceServiceEndpointPolicies')

' renders the element
ServiceServiceEndpointPoliciesGroup('ServiceServiceEndpointPoliciesGroup', 'Service Service Endpoint Policies Group', 'an optional tech label') {
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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceServiceEndpointPoliciesGroup
include('azure-6/Item/Networking/ServiceServiceEndpointPolicies')

' renders the element
ServiceServiceEndpointPoliciesGroup('ServiceServiceEndpointPoliciesGroup', 'Service Service Endpoint Policies Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

