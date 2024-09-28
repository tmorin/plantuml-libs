# ServiceMarketplaceManagement


```text
azure-19/Item/General/ServiceMarketplaceManagement
```

```text
include('azure-19/Item/General/ServiceMarketplaceManagement')
```



| Illustration | ServiceMarketplaceManagement | ServiceMarketplaceManagementCard | ServiceMarketplaceManagementGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-19/Item/General/ServiceMarketplaceManagement.png) | ![illustration for ServiceMarketplaceManagement](../../../azure-19/Item/General/ServiceMarketplaceManagement.Local.png) | ![illustration for ServiceMarketplaceManagementCard](../../../azure-19/Item/General/ServiceMarketplaceManagementCard.Local.png) | ![illustration for ServiceMarketplaceManagementGroup](../../../azure-19/Item/General/ServiceMarketplaceManagementGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceMarketplaceManagementXs>`
- `<$ServiceMarketplaceManagementSm>`
- `<$ServiceMarketplaceManagementMd>`
- `<$ServiceMarketplaceManagementLg>`





## ServiceMarketplaceManagement

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceMarketplaceManagement
include('azure-19/Item/General/ServiceMarketplaceManagement')

' renders the element
ServiceMarketplaceManagement('ServiceMarketplaceManagement', 'Service Marketplace Management', 'an optional tech label', 'an optional description')
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
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceMarketplaceManagement
include('azure-19/Item/General/ServiceMarketplaceManagement')

' renders the element
ServiceMarketplaceManagement('ServiceMarketplaceManagement', 'Service Marketplace Management', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceMarketplaceManagementCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceMarketplaceManagementCard
include('azure-19/Item/General/ServiceMarketplaceManagement')

' renders the element
ServiceMarketplaceManagementCard('ServiceMarketplaceManagementCard', 'Service Marketplace Management Card', 'an optional description')
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
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceMarketplaceManagementCard
include('azure-19/Item/General/ServiceMarketplaceManagement')

' renders the element
ServiceMarketplaceManagementCard('ServiceMarketplaceManagementCard', 'Service Marketplace Management Card', 'an optional description')
@enduml
```

## ServiceMarketplaceManagementGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceMarketplaceManagementGroup
include('azure-19/Item/General/ServiceMarketplaceManagement')

' renders the element
ServiceMarketplaceManagementGroup('ServiceMarketplaceManagementGroup', 'Service Marketplace Management Group', 'an optional tech label') {
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
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceMarketplaceManagementGroup
include('azure-19/Item/General/ServiceMarketplaceManagement')

' renders the element
ServiceMarketplaceManagementGroup('ServiceMarketplaceManagementGroup', 'Service Marketplace Management Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

