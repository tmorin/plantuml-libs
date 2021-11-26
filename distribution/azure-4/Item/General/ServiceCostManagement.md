# ServiceCostManagement


```text
azure-4/Item/General/ServiceCostManagement
```

```text
include('azure-4/Item/General/ServiceCostManagement')
```



| Illustration | ServiceCostManagement | ServiceCostManagementCard | ServiceCostManagementGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/General/ServiceCostManagement.png) | ![illustration for ServiceCostManagement](../../../azure-4/Item/General/ServiceCostManagement.Local.png) | ![illustration for ServiceCostManagementCard](../../../azure-4/Item/General/ServiceCostManagementCard.Local.png) | ![illustration for ServiceCostManagementGroup](../../../azure-4/Item/General/ServiceCostManagementGroup.Local.png) |




## ServiceCostManagement

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceCostManagement
include('azure-4/Item/General/ServiceCostManagement')

' renders the element
ServiceCostManagement('ServiceCostManagement', 'Service Cost Management', 'an optional tech label')
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

' loads the Item which embeds the element ServiceCostManagement
include('azure-4/Item/General/ServiceCostManagement')

' renders the element
ServiceCostManagement('ServiceCostManagement', 'Service Cost Management', 'an optional tech label')
@enduml
```

## ServiceCostManagementCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceCostManagementCard
include('azure-4/Item/General/ServiceCostManagement')

' renders the element
ServiceCostManagementCard('ServiceCostManagementCard', 'Service Cost Management Card', 'an optional description')
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

' loads the Item which embeds the element ServiceCostManagementCard
include('azure-4/Item/General/ServiceCostManagement')

' renders the element
ServiceCostManagementCard('ServiceCostManagementCard', 'Service Cost Management Card', 'an optional description')
@enduml
```

## ServiceCostManagementGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceCostManagementGroup
include('azure-4/Item/General/ServiceCostManagement')

' renders the element
ServiceCostManagementGroup('ServiceCostManagementGroup', 'Service Cost Management Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceCostManagementGroup
include('azure-4/Item/General/ServiceCostManagement')

' renders the element
ServiceCostManagementGroup('ServiceCostManagementGroup', 'Service Cost Management Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

