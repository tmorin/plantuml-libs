# ServiceWorkflow


```text
azure-4/Item/General/ServiceWorkflow
```

```text
include('azure-4/Item/General/ServiceWorkflow')
```



| Illustration | ServiceWorkflow | ServiceWorkflowCard | ServiceWorkflowGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/General/ServiceWorkflow.png) | ![illustration for ServiceWorkflow](../../../azure-4/Item/General/ServiceWorkflow.Local.png) | ![illustration for ServiceWorkflowCard](../../../azure-4/Item/General/ServiceWorkflowCard.Local.png) | ![illustration for ServiceWorkflowGroup](../../../azure-4/Item/General/ServiceWorkflowGroup.Local.png) |




## ServiceWorkflow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceWorkflow
include('azure-4/Item/General/ServiceWorkflow')

' renders the element
ServiceWorkflow('ServiceWorkflow', 'Service Workflow', 'an optional tech label')
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

' loads the Item which embeds the element ServiceWorkflow
include('azure-4/Item/General/ServiceWorkflow')

' renders the element
ServiceWorkflow('ServiceWorkflow', 'Service Workflow', 'an optional tech label')
@enduml
```

## ServiceWorkflowCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceWorkflowCard
include('azure-4/Item/General/ServiceWorkflow')

' renders the element
ServiceWorkflowCard('ServiceWorkflowCard', 'Service Workflow Card', 'an optional description')
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

' loads the Item which embeds the element ServiceWorkflowCard
include('azure-4/Item/General/ServiceWorkflow')

' renders the element
ServiceWorkflowCard('ServiceWorkflowCard', 'Service Workflow Card', 'an optional description')
@enduml
```

## ServiceWorkflowGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceWorkflowGroup
include('azure-4/Item/General/ServiceWorkflow')

' renders the element
ServiceWorkflowGroup('ServiceWorkflowGroup', 'Service Workflow Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceWorkflowGroup
include('azure-4/Item/General/ServiceWorkflow')

' renders the element
ServiceWorkflowGroup('ServiceWorkflowGroup', 'Service Workflow Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

