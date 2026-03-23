# ServiceRecoveryServicesVaults


```text
azure/Item/Storage/ServiceRecoveryServicesVaults
```

```text
include('azure/Item/Storage/ServiceRecoveryServicesVaults')
```



| Illustration | ServiceRecoveryServicesVaults | ServiceRecoveryServicesVaultsCard | ServiceRecoveryServicesVaultsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/Storage/ServiceRecoveryServicesVaults.png) | ![illustration for ServiceRecoveryServicesVaults](../../../azure/Item/Storage/ServiceRecoveryServicesVaults.Local.png) | ![illustration for ServiceRecoveryServicesVaultsCard](../../../azure/Item/Storage/ServiceRecoveryServicesVaultsCard.Local.png) | ![illustration for ServiceRecoveryServicesVaultsGroup](../../../azure/Item/Storage/ServiceRecoveryServicesVaultsGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceRecoveryServicesVaultsXs>`
- `<$ServiceRecoveryServicesVaultsSm>`
- `<$ServiceRecoveryServicesVaultsMd>`
- `<$ServiceRecoveryServicesVaultsLg>`





## ServiceRecoveryServicesVaults

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceRecoveryServicesVaults
include('azure/Item/Storage/ServiceRecoveryServicesVaults')

' renders the element
ServiceRecoveryServicesVaults('ServiceRecoveryServicesVaults', 'Service Recovery Services Vaults', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceRecoveryServicesVaults
include('azure/Item/Storage/ServiceRecoveryServicesVaults')

' renders the element
ServiceRecoveryServicesVaults('ServiceRecoveryServicesVaults', 'Service Recovery Services Vaults', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceRecoveryServicesVaultsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceRecoveryServicesVaultsCard
include('azure/Item/Storage/ServiceRecoveryServicesVaults')

' renders the element
ServiceRecoveryServicesVaultsCard('ServiceRecoveryServicesVaultsCard', 'Service Recovery Services Vaults Card', 'an optional description')
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

' loads the Item which embeds the element ServiceRecoveryServicesVaultsCard
include('azure/Item/Storage/ServiceRecoveryServicesVaults')

' renders the element
ServiceRecoveryServicesVaultsCard('ServiceRecoveryServicesVaultsCard', 'Service Recovery Services Vaults Card', 'an optional description')
@enduml
```

## ServiceRecoveryServicesVaultsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceRecoveryServicesVaultsGroup
include('azure/Item/Storage/ServiceRecoveryServicesVaults')

' renders the element
ServiceRecoveryServicesVaultsGroup('ServiceRecoveryServicesVaultsGroup', 'Service Recovery Services Vaults Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceRecoveryServicesVaultsGroup
include('azure/Item/Storage/ServiceRecoveryServicesVaults')

' renders the element
ServiceRecoveryServicesVaultsGroup('ServiceRecoveryServicesVaultsGroup', 'Service Recovery Services Vaults Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

