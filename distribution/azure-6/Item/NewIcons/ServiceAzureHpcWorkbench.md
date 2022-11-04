# ServiceAzureHpcWorkbench


```text
azure-6/Item/NewIcons/ServiceAzureHpcWorkbench
```

```text
include('azure-6/Item/NewIcons/ServiceAzureHpcWorkbench')
```



| Illustration | ServiceAzureHpcWorkbench | ServiceAzureHpcWorkbenchCard | ServiceAzureHpcWorkbenchGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-6/Item/NewIcons/ServiceAzureHpcWorkbench.png) | ![illustration for ServiceAzureHpcWorkbench](../../../azure-6/Item/NewIcons/ServiceAzureHpcWorkbench.Local.png) | ![illustration for ServiceAzureHpcWorkbenchCard](../../../azure-6/Item/NewIcons/ServiceAzureHpcWorkbenchCard.Local.png) | ![illustration for ServiceAzureHpcWorkbenchGroup](../../../azure-6/Item/NewIcons/ServiceAzureHpcWorkbenchGroup.Local.png) |




## ServiceAzureHpcWorkbench

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceAzureHpcWorkbench
include('azure-6/Item/NewIcons/ServiceAzureHpcWorkbench')

' renders the element
ServiceAzureHpcWorkbench('ServiceAzureHpcWorkbench', 'Service Azure Hpc Workbench', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceAzureHpcWorkbench
include('azure-6/Item/NewIcons/ServiceAzureHpcWorkbench')

' renders the element
ServiceAzureHpcWorkbench('ServiceAzureHpcWorkbench', 'Service Azure Hpc Workbench', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceAzureHpcWorkbenchCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceAzureHpcWorkbenchCard
include('azure-6/Item/NewIcons/ServiceAzureHpcWorkbench')

' renders the element
ServiceAzureHpcWorkbenchCard('ServiceAzureHpcWorkbenchCard', 'Service Azure Hpc Workbench Card', 'an optional description')
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

' loads the Item which embeds the element ServiceAzureHpcWorkbenchCard
include('azure-6/Item/NewIcons/ServiceAzureHpcWorkbench')

' renders the element
ServiceAzureHpcWorkbenchCard('ServiceAzureHpcWorkbenchCard', 'Service Azure Hpc Workbench Card', 'an optional description')
@enduml
```

## ServiceAzureHpcWorkbenchGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceAzureHpcWorkbenchGroup
include('azure-6/Item/NewIcons/ServiceAzureHpcWorkbench')

' renders the element
ServiceAzureHpcWorkbenchGroup('ServiceAzureHpcWorkbenchGroup', 'Service Azure Hpc Workbench Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceAzureHpcWorkbenchGroup
include('azure-6/Item/NewIcons/ServiceAzureHpcWorkbench')

' renders the element
ServiceAzureHpcWorkbenchGroup('ServiceAzureHpcWorkbenchGroup', 'Service Azure Hpc Workbench Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

