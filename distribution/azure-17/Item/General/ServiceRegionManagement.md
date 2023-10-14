# ServiceRegionManagement


```text
azure-17/Item/General/ServiceRegionManagement
```

```text
include('azure-17/Item/General/ServiceRegionManagement')
```



| Illustration | ServiceRegionManagement | ServiceRegionManagementCard | ServiceRegionManagementGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-17/Item/General/ServiceRegionManagement.png) | ![illustration for ServiceRegionManagement](../../../azure-17/Item/General/ServiceRegionManagement.Local.png) | ![illustration for ServiceRegionManagementCard](../../../azure-17/Item/General/ServiceRegionManagementCard.Local.png) | ![illustration for ServiceRegionManagementGroup](../../../azure-17/Item/General/ServiceRegionManagementGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceRegionManagementXs>`
- `<$ServiceRegionManagementSm>`
- `<$ServiceRegionManagementMd>`
- `<$ServiceRegionManagementLg>`





## ServiceRegionManagement

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceRegionManagement
include('azure-17/Item/General/ServiceRegionManagement')

' renders the element
ServiceRegionManagement('ServiceRegionManagement', 'Service Region Management', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceRegionManagement
include('azure-17/Item/General/ServiceRegionManagement')

' renders the element
ServiceRegionManagement('ServiceRegionManagement', 'Service Region Management', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceRegionManagementCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceRegionManagementCard
include('azure-17/Item/General/ServiceRegionManagement')

' renders the element
ServiceRegionManagementCard('ServiceRegionManagementCard', 'Service Region Management Card', 'an optional description')
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

' loads the Item which embeds the element ServiceRegionManagementCard
include('azure-17/Item/General/ServiceRegionManagement')

' renders the element
ServiceRegionManagementCard('ServiceRegionManagementCard', 'Service Region Management Card', 'an optional description')
@enduml
```

## ServiceRegionManagementGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceRegionManagementGroup
include('azure-17/Item/General/ServiceRegionManagement')

' renders the element
ServiceRegionManagementGroup('ServiceRegionManagementGroup', 'Service Region Management Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceRegionManagementGroup
include('azure-17/Item/General/ServiceRegionManagement')

' renders the element
ServiceRegionManagementGroup('ServiceRegionManagementGroup', 'Service Region Management Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

