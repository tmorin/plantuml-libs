# ServiceIdentityGovernance


```text
azure-11/Item/Identity/ServiceIdentityGovernance
```

```text
include('azure-11/Item/Identity/ServiceIdentityGovernance')
```



| Illustration | ServiceIdentityGovernance | ServiceIdentityGovernanceCard | ServiceIdentityGovernanceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-11/Item/Identity/ServiceIdentityGovernance.png) | ![illustration for ServiceIdentityGovernance](../../../azure-11/Item/Identity/ServiceIdentityGovernance.Local.png) | ![illustration for ServiceIdentityGovernanceCard](../../../azure-11/Item/Identity/ServiceIdentityGovernanceCard.Local.png) | ![illustration for ServiceIdentityGovernanceGroup](../../../azure-11/Item/Identity/ServiceIdentityGovernanceGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceIdentityGovernanceXs>`
- `<$ServiceIdentityGovernanceSm>`
- `<$ServiceIdentityGovernanceMd>`
- `<$ServiceIdentityGovernanceLg>`





## ServiceIdentityGovernance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceIdentityGovernance
include('azure-11/Item/Identity/ServiceIdentityGovernance')

' renders the element
ServiceIdentityGovernance('ServiceIdentityGovernance', 'Service Identity Governance', 'an optional tech label', 'an optional description')
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
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceIdentityGovernance
include('azure-11/Item/Identity/ServiceIdentityGovernance')

' renders the element
ServiceIdentityGovernance('ServiceIdentityGovernance', 'Service Identity Governance', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceIdentityGovernanceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceIdentityGovernanceCard
include('azure-11/Item/Identity/ServiceIdentityGovernance')

' renders the element
ServiceIdentityGovernanceCard('ServiceIdentityGovernanceCard', 'Service Identity Governance Card', 'an optional description')
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
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceIdentityGovernanceCard
include('azure-11/Item/Identity/ServiceIdentityGovernance')

' renders the element
ServiceIdentityGovernanceCard('ServiceIdentityGovernanceCard', 'Service Identity Governance Card', 'an optional description')
@enduml
```

## ServiceIdentityGovernanceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceIdentityGovernanceGroup
include('azure-11/Item/Identity/ServiceIdentityGovernance')

' renders the element
ServiceIdentityGovernanceGroup('ServiceIdentityGovernanceGroup', 'Service Identity Governance Group', 'an optional tech label') {
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
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceIdentityGovernanceGroup
include('azure-11/Item/Identity/ServiceIdentityGovernance')

' renders the element
ServiceIdentityGovernanceGroup('ServiceIdentityGovernanceGroup', 'Service Identity Governance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

