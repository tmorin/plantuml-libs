# ServiceArcMachines


```text
azure-20/Item/ManagementGovernance/ServiceArcMachines
```

```text
include('azure-20/Item/ManagementGovernance/ServiceArcMachines')
```



| Illustration | ServiceArcMachines | ServiceArcMachinesCard | ServiceArcMachinesGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-20/Item/ManagementGovernance/ServiceArcMachines.png) | ![illustration for ServiceArcMachines](../../../azure-20/Item/ManagementGovernance/ServiceArcMachines.Local.png) | ![illustration for ServiceArcMachinesCard](../../../azure-20/Item/ManagementGovernance/ServiceArcMachinesCard.Local.png) | ![illustration for ServiceArcMachinesGroup](../../../azure-20/Item/ManagementGovernance/ServiceArcMachinesGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceArcMachinesXs>`
- `<$ServiceArcMachinesSm>`
- `<$ServiceArcMachinesMd>`
- `<$ServiceArcMachinesLg>`





## ServiceArcMachines

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceArcMachines
include('azure-20/Item/ManagementGovernance/ServiceArcMachines')

' renders the element
ServiceArcMachines('ServiceArcMachines', 'Service Arc Machines', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceArcMachines
include('azure-20/Item/ManagementGovernance/ServiceArcMachines')

' renders the element
ServiceArcMachines('ServiceArcMachines', 'Service Arc Machines', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceArcMachinesCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceArcMachinesCard
include('azure-20/Item/ManagementGovernance/ServiceArcMachines')

' renders the element
ServiceArcMachinesCard('ServiceArcMachinesCard', 'Service Arc Machines Card', 'an optional description')
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

' loads the Item which embeds the element ServiceArcMachinesCard
include('azure-20/Item/ManagementGovernance/ServiceArcMachines')

' renders the element
ServiceArcMachinesCard('ServiceArcMachinesCard', 'Service Arc Machines Card', 'an optional description')
@enduml
```

## ServiceArcMachinesGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceArcMachinesGroup
include('azure-20/Item/ManagementGovernance/ServiceArcMachines')

' renders the element
ServiceArcMachinesGroup('ServiceArcMachinesGroup', 'Service Arc Machines Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceArcMachinesGroup
include('azure-20/Item/ManagementGovernance/ServiceArcMachines')

' renders the element
ServiceArcMachinesGroup('ServiceArcMachinesGroup', 'Service Arc Machines Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

