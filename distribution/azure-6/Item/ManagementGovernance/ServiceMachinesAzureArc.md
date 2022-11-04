# ServiceMachinesAzureArc


```text
azure-6/Item/ManagementGovernance/ServiceMachinesAzureArc
```

```text
include('azure-6/Item/ManagementGovernance/ServiceMachinesAzureArc')
```



| Illustration | ServiceMachinesAzureArc | ServiceMachinesAzureArcCard | ServiceMachinesAzureArcGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-6/Item/ManagementGovernance/ServiceMachinesAzureArc.png) | ![illustration for ServiceMachinesAzureArc](../../../azure-6/Item/ManagementGovernance/ServiceMachinesAzureArc.Local.png) | ![illustration for ServiceMachinesAzureArcCard](../../../azure-6/Item/ManagementGovernance/ServiceMachinesAzureArcCard.Local.png) | ![illustration for ServiceMachinesAzureArcGroup](../../../azure-6/Item/ManagementGovernance/ServiceMachinesAzureArcGroup.Local.png) |




## ServiceMachinesAzureArc

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceMachinesAzureArc
include('azure-6/Item/ManagementGovernance/ServiceMachinesAzureArc')

' renders the element
ServiceMachinesAzureArc('ServiceMachinesAzureArc', 'Service Machines Azure Arc', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceMachinesAzureArc
include('azure-6/Item/ManagementGovernance/ServiceMachinesAzureArc')

' renders the element
ServiceMachinesAzureArc('ServiceMachinesAzureArc', 'Service Machines Azure Arc', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceMachinesAzureArcCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceMachinesAzureArcCard
include('azure-6/Item/ManagementGovernance/ServiceMachinesAzureArc')

' renders the element
ServiceMachinesAzureArcCard('ServiceMachinesAzureArcCard', 'Service Machines Azure Arc Card', 'an optional description')
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

' loads the Item which embeds the element ServiceMachinesAzureArcCard
include('azure-6/Item/ManagementGovernance/ServiceMachinesAzureArc')

' renders the element
ServiceMachinesAzureArcCard('ServiceMachinesAzureArcCard', 'Service Machines Azure Arc Card', 'an optional description')
@enduml
```

## ServiceMachinesAzureArcGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceMachinesAzureArcGroup
include('azure-6/Item/ManagementGovernance/ServiceMachinesAzureArc')

' renders the element
ServiceMachinesAzureArcGroup('ServiceMachinesAzureArcGroup', 'Service Machines Azure Arc Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceMachinesAzureArcGroup
include('azure-6/Item/ManagementGovernance/ServiceMachinesAzureArc')

' renders the element
ServiceMachinesAzureArcGroup('ServiceMachinesAzureArcGroup', 'Service Machines Azure Arc Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

