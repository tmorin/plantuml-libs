# ServiceRouteFilters


```text
azure-4/Item/Networking/ServiceRouteFilters
```

```text
include('azure-4/Item/Networking/ServiceRouteFilters')
```



| Illustration | ServiceRouteFilters | ServiceRouteFiltersCard | ServiceRouteFiltersGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/Networking/ServiceRouteFilters.png) | ![illustration for ServiceRouteFilters](../../../azure-4/Item/Networking/ServiceRouteFilters.Local.png) | ![illustration for ServiceRouteFiltersCard](../../../azure-4/Item/Networking/ServiceRouteFiltersCard.Local.png) | ![illustration for ServiceRouteFiltersGroup](../../../azure-4/Item/Networking/ServiceRouteFiltersGroup.Local.png) |




## ServiceRouteFilters

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceRouteFilters
include('azure-4/Item/Networking/ServiceRouteFilters')

' renders the element
ServiceRouteFilters('ServiceRouteFilters', 'Service Route Filters', 'an optional tech label')
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

' loads the Item which embeds the element ServiceRouteFilters
include('azure-4/Item/Networking/ServiceRouteFilters')

' renders the element
ServiceRouteFilters('ServiceRouteFilters', 'Service Route Filters', 'an optional tech label')
@enduml
```

## ServiceRouteFiltersCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceRouteFiltersCard
include('azure-4/Item/Networking/ServiceRouteFilters')

' renders the element
ServiceRouteFiltersCard('ServiceRouteFiltersCard', 'Service Route Filters Card', 'an optional description')
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

' loads the Item which embeds the element ServiceRouteFiltersCard
include('azure-4/Item/Networking/ServiceRouteFilters')

' renders the element
ServiceRouteFiltersCard('ServiceRouteFiltersCard', 'Service Route Filters Card', 'an optional description')
@enduml
```

## ServiceRouteFiltersGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceRouteFiltersGroup
include('azure-4/Item/Networking/ServiceRouteFilters')

' renders the element
ServiceRouteFiltersGroup('ServiceRouteFiltersGroup', 'Service Route Filters Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceRouteFiltersGroup
include('azure-4/Item/Networking/ServiceRouteFilters')

' renders the element
ServiceRouteFiltersGroup('ServiceRouteFiltersGroup', 'Service Route Filters Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

