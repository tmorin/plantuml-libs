# ServiceToolchainOrchestrator


```text
azure/Item/NewIcons/ServiceToolchainOrchestrator
```

```text
include('azure/Item/NewIcons/ServiceToolchainOrchestrator')
```



| Illustration | ServiceToolchainOrchestrator | ServiceToolchainOrchestratorCard | ServiceToolchainOrchestratorGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/NewIcons/ServiceToolchainOrchestrator.png) | ![illustration for ServiceToolchainOrchestrator](../../../azure/Item/NewIcons/ServiceToolchainOrchestrator.Local.png) | ![illustration for ServiceToolchainOrchestratorCard](../../../azure/Item/NewIcons/ServiceToolchainOrchestratorCard.Local.png) | ![illustration for ServiceToolchainOrchestratorGroup](../../../azure/Item/NewIcons/ServiceToolchainOrchestratorGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceToolchainOrchestratorXs>`
- `<$ServiceToolchainOrchestratorSm>`
- `<$ServiceToolchainOrchestratorMd>`
- `<$ServiceToolchainOrchestratorLg>`





## ServiceToolchainOrchestrator

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceToolchainOrchestrator
include('azure/Item/NewIcons/ServiceToolchainOrchestrator')

' renders the element
ServiceToolchainOrchestrator('ServiceToolchainOrchestrator', 'Service Toolchain Orchestrator', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceToolchainOrchestrator
include('azure/Item/NewIcons/ServiceToolchainOrchestrator')

' renders the element
ServiceToolchainOrchestrator('ServiceToolchainOrchestrator', 'Service Toolchain Orchestrator', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceToolchainOrchestratorCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceToolchainOrchestratorCard
include('azure/Item/NewIcons/ServiceToolchainOrchestrator')

' renders the element
ServiceToolchainOrchestratorCard('ServiceToolchainOrchestratorCard', 'Service Toolchain Orchestrator Card', 'an optional description')
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

' loads the Item which embeds the element ServiceToolchainOrchestratorCard
include('azure/Item/NewIcons/ServiceToolchainOrchestrator')

' renders the element
ServiceToolchainOrchestratorCard('ServiceToolchainOrchestratorCard', 'Service Toolchain Orchestrator Card', 'an optional description')
@enduml
```

## ServiceToolchainOrchestratorGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceToolchainOrchestratorGroup
include('azure/Item/NewIcons/ServiceToolchainOrchestrator')

' renders the element
ServiceToolchainOrchestratorGroup('ServiceToolchainOrchestratorGroup', 'Service Toolchain Orchestrator Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceToolchainOrchestratorGroup
include('azure/Item/NewIcons/ServiceToolchainOrchestrator')

' renders the element
ServiceToolchainOrchestratorGroup('ServiceToolchainOrchestratorGroup', 'Service Toolchain Orchestrator Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

