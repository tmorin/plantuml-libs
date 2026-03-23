# ServiceWorkflow


```text
azure/Item/General/ServiceWorkflow
```

```text
include('azure/Item/General/ServiceWorkflow')
```



| Illustration | ServiceWorkflow | ServiceWorkflowCard | ServiceWorkflowGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/General/ServiceWorkflow.png) | ![illustration for ServiceWorkflow](../../../azure/Item/General/ServiceWorkflow.Local.png) | ![illustration for ServiceWorkflowCard](../../../azure/Item/General/ServiceWorkflowCard.Local.png) | ![illustration for ServiceWorkflowGroup](../../../azure/Item/General/ServiceWorkflowGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceWorkflowXs>`
- `<$ServiceWorkflowSm>`
- `<$ServiceWorkflowMd>`
- `<$ServiceWorkflowLg>`





## ServiceWorkflow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceWorkflow
include('azure/Item/General/ServiceWorkflow')

' renders the element
ServiceWorkflow('ServiceWorkflow', 'Service Workflow', 'an optional tech label', 'an optional description')
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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceWorkflow
include('azure/Item/General/ServiceWorkflow')

' renders the element
ServiceWorkflow('ServiceWorkflow', 'Service Workflow', 'an optional tech label', 'an optional description')
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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceWorkflowCard
include('azure/Item/General/ServiceWorkflow')

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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceWorkflowCard
include('azure/Item/General/ServiceWorkflow')

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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceWorkflowGroup
include('azure/Item/General/ServiceWorkflow')

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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceWorkflowGroup
include('azure/Item/General/ServiceWorkflow')

' renders the element
ServiceWorkflowGroup('ServiceWorkflowGroup', 'Service Workflow Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

