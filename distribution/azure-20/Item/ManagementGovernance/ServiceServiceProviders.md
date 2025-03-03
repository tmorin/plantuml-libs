# ServiceServiceProviders


```text
azure-20/Item/ManagementGovernance/ServiceServiceProviders
```

```text
include('azure-20/Item/ManagementGovernance/ServiceServiceProviders')
```



| Illustration | ServiceServiceProviders | ServiceServiceProvidersCard | ServiceServiceProvidersGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-20/Item/ManagementGovernance/ServiceServiceProviders.png) | ![illustration for ServiceServiceProviders](../../../azure-20/Item/ManagementGovernance/ServiceServiceProviders.Local.png) | ![illustration for ServiceServiceProvidersCard](../../../azure-20/Item/ManagementGovernance/ServiceServiceProvidersCard.Local.png) | ![illustration for ServiceServiceProvidersGroup](../../../azure-20/Item/ManagementGovernance/ServiceServiceProvidersGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceServiceProvidersXs>`
- `<$ServiceServiceProvidersSm>`
- `<$ServiceServiceProvidersMd>`
- `<$ServiceServiceProvidersLg>`





## ServiceServiceProviders

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceServiceProviders
include('azure-20/Item/ManagementGovernance/ServiceServiceProviders')

' renders the element
ServiceServiceProviders('ServiceServiceProviders', 'Service Service Providers', 'an optional tech label', 'an optional description')
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
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceServiceProviders
include('azure-20/Item/ManagementGovernance/ServiceServiceProviders')

' renders the element
ServiceServiceProviders('ServiceServiceProviders', 'Service Service Providers', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceServiceProvidersCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceServiceProvidersCard
include('azure-20/Item/ManagementGovernance/ServiceServiceProviders')

' renders the element
ServiceServiceProvidersCard('ServiceServiceProvidersCard', 'Service Service Providers Card', 'an optional description')
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
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceServiceProvidersCard
include('azure-20/Item/ManagementGovernance/ServiceServiceProviders')

' renders the element
ServiceServiceProvidersCard('ServiceServiceProvidersCard', 'Service Service Providers Card', 'an optional description')
@enduml
```

## ServiceServiceProvidersGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceServiceProvidersGroup
include('azure-20/Item/ManagementGovernance/ServiceServiceProviders')

' renders the element
ServiceServiceProvidersGroup('ServiceServiceProvidersGroup', 'Service Service Providers Group', 'an optional tech label') {
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
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceServiceProvidersGroup
include('azure-20/Item/ManagementGovernance/ServiceServiceProviders')

' renders the element
ServiceServiceProvidersGroup('ServiceServiceProvidersGroup', 'Service Service Providers Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

