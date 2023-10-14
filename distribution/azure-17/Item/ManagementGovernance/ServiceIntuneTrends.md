# ServiceIntuneTrends


```text
azure-17/Item/ManagementGovernance/ServiceIntuneTrends
```

```text
include('azure-17/Item/ManagementGovernance/ServiceIntuneTrends')
```



| Illustration | ServiceIntuneTrends | ServiceIntuneTrendsCard | ServiceIntuneTrendsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-17/Item/ManagementGovernance/ServiceIntuneTrends.png) | ![illustration for ServiceIntuneTrends](../../../azure-17/Item/ManagementGovernance/ServiceIntuneTrends.Local.png) | ![illustration for ServiceIntuneTrendsCard](../../../azure-17/Item/ManagementGovernance/ServiceIntuneTrendsCard.Local.png) | ![illustration for ServiceIntuneTrendsGroup](../../../azure-17/Item/ManagementGovernance/ServiceIntuneTrendsGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceIntuneTrendsXs>`
- `<$ServiceIntuneTrendsSm>`
- `<$ServiceIntuneTrendsMd>`
- `<$ServiceIntuneTrendsLg>`





## ServiceIntuneTrends

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceIntuneTrends
include('azure-17/Item/ManagementGovernance/ServiceIntuneTrends')

' renders the element
ServiceIntuneTrends('ServiceIntuneTrends', 'Service Intune Trends', 'an optional tech label', 'an optional description')
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
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceIntuneTrends
include('azure-17/Item/ManagementGovernance/ServiceIntuneTrends')

' renders the element
ServiceIntuneTrends('ServiceIntuneTrends', 'Service Intune Trends', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceIntuneTrendsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceIntuneTrendsCard
include('azure-17/Item/ManagementGovernance/ServiceIntuneTrends')

' renders the element
ServiceIntuneTrendsCard('ServiceIntuneTrendsCard', 'Service Intune Trends Card', 'an optional description')
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
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceIntuneTrendsCard
include('azure-17/Item/ManagementGovernance/ServiceIntuneTrends')

' renders the element
ServiceIntuneTrendsCard('ServiceIntuneTrendsCard', 'Service Intune Trends Card', 'an optional description')
@enduml
```

## ServiceIntuneTrendsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceIntuneTrendsGroup
include('azure-17/Item/ManagementGovernance/ServiceIntuneTrends')

' renders the element
ServiceIntuneTrendsGroup('ServiceIntuneTrendsGroup', 'Service Intune Trends Group', 'an optional tech label') {
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
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceIntuneTrendsGroup
include('azure-17/Item/ManagementGovernance/ServiceIntuneTrends')

' renders the element
ServiceIntuneTrendsGroup('ServiceIntuneTrendsGroup', 'Service Intune Trends Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

