# ServiceMarketplaceManagement


```text
azure-6/Item/NewIcons/ServiceMarketplaceManagement
```

```text
include('azure-6/Item/NewIcons/ServiceMarketplaceManagement')
```



| Illustration | ServiceMarketplaceManagement | ServiceMarketplaceManagementCard | ServiceMarketplaceManagementGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-6/Item/NewIcons/ServiceMarketplaceManagement.png) | ![illustration for ServiceMarketplaceManagement](../../../azure-6/Item/NewIcons/ServiceMarketplaceManagement.Local.png) | ![illustration for ServiceMarketplaceManagementCard](../../../azure-6/Item/NewIcons/ServiceMarketplaceManagementCard.Local.png) | ![illustration for ServiceMarketplaceManagementGroup](../../../azure-6/Item/NewIcons/ServiceMarketplaceManagementGroup.Local.png) |




## ServiceMarketplaceManagement

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceMarketplaceManagement
include('azure-6/Item/NewIcons/ServiceMarketplaceManagement')

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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceMarketplaceManagement
include('azure-6/Item/NewIcons/ServiceMarketplaceManagement')

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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceMarketplaceManagementCard
include('azure-6/Item/NewIcons/ServiceMarketplaceManagement')

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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceMarketplaceManagementCard
include('azure-6/Item/NewIcons/ServiceMarketplaceManagement')

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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceMarketplaceManagementGroup
include('azure-6/Item/NewIcons/ServiceMarketplaceManagement')

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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceMarketplaceManagementGroup
include('azure-6/Item/NewIcons/ServiceMarketplaceManagement')

' renders the element
ServiceMarketplaceManagementGroup('ServiceMarketplaceManagementGroup', 'Service Marketplace Management Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

