# Service Workflow

```text
azure-v2/Item/General/ServiceWorkflow
```

```text
include('azure-v2/Item/General/ServiceWorkflow')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceWorkflow.png)|![](ServiceWorkflow.card.png)|![](ServiceWorkflow.element.png)|![](ServiceWorkflow.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceWorkflow element
include('azure-v2/Item/General/ServiceWorkflow')
ServiceWorkflowCard('service_workflow', 'Service Workflow', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceWorkflow element
include('azure-v2/Item/General/ServiceWorkflow')
ServiceWorkflowCard('service_workflow', 'Service Workflow', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```


## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceWorkflow element
include('azure-v2/Item/General/ServiceWorkflow')
ServiceWorkflow('service_workflow', 'Service Workflow', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceWorkflow element
include('azure-v2/Item/General/ServiceWorkflow')
ServiceWorkflow('service_workflow', 'Service Workflow', 'an optional tech field')
@enduml
```


## group
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceWorkflow element
include('azure-v2/Item/General/ServiceWorkflow')
ServiceWorkflowGroup('service_workflow', 'Service Workflow', 'an optional tech field'){
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
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceWorkflow element
include('azure-v2/Item/General/ServiceWorkflow')
ServiceWorkflowGroup('service_workflow', 'Service Workflow', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

