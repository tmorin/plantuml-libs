# ServicePolicy


```text
azure-4/Item/ManagementGovernance/ServicePolicy
```

```text
include('azure-4/Item/ManagementGovernance/ServicePolicy')
```



| Illustration | ServicePolicy | ServicePolicyCard | ServicePolicyGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/ManagementGovernance/ServicePolicy.png) | ![illustration for ServicePolicy](../../../azure-4/Item/ManagementGovernance/ServicePolicy.Local.png) | ![illustration for ServicePolicyCard](../../../azure-4/Item/ManagementGovernance/ServicePolicyCard.Local.png) | ![illustration for ServicePolicyGroup](../../../azure-4/Item/ManagementGovernance/ServicePolicyGroup.Local.png) |




## ServicePolicy

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServicePolicy
include('azure-4/Item/ManagementGovernance/ServicePolicy')

' renders the element
ServicePolicy('ServicePolicy', 'Service Policy', 'an optional tech label')
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

' loads the Item which embeds the element ServicePolicy
include('azure-4/Item/ManagementGovernance/ServicePolicy')

' renders the element
ServicePolicy('ServicePolicy', 'Service Policy', 'an optional tech label')
@enduml
```

## ServicePolicyCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServicePolicyCard
include('azure-4/Item/ManagementGovernance/ServicePolicy')

' renders the element
ServicePolicyCard('ServicePolicyCard', 'Service Policy Card', 'an optional description')
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

' loads the Item which embeds the element ServicePolicyCard
include('azure-4/Item/ManagementGovernance/ServicePolicy')

' renders the element
ServicePolicyCard('ServicePolicyCard', 'Service Policy Card', 'an optional description')
@enduml
```

## ServicePolicyGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServicePolicyGroup
include('azure-4/Item/ManagementGovernance/ServicePolicy')

' renders the element
ServicePolicyGroup('ServicePolicyGroup', 'Service Policy Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServicePolicyGroup
include('azure-4/Item/ManagementGovernance/ServicePolicy')

' renders the element
ServicePolicyGroup('ServicePolicyGroup', 'Service Policy Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

