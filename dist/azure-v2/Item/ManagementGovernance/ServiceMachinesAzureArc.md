# Service Machines Azure Arc

```text
azure-v2/Item/ManagementGovernance/ServiceMachinesAzureArc
```

```text
include('azure-v2/Item/ManagementGovernance/ServiceMachinesAzureArc')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceMachinesAzureArc.png)|![](ServiceMachinesAzureArc.card.png)|![](ServiceMachinesAzureArc.element.png)|![](ServiceMachinesAzureArc.group.png)|



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
' loads the ServiceMachinesAzureArc element
include('azure-v2/Item/ManagementGovernance/ServiceMachinesAzureArc')
ServiceMachinesAzureArcCard('service_machines_azure_arc', 'Service Machines Azure Arc', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceMachinesAzureArc element
include('azure-v2/Item/ManagementGovernance/ServiceMachinesAzureArc')
ServiceMachinesAzureArcCard('service_machines_azure_arc', 'Service Machines Azure Arc', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceMachinesAzureArc element
include('azure-v2/Item/ManagementGovernance/ServiceMachinesAzureArc')
ServiceMachinesAzureArc('service_machines_azure_arc', 'Service Machines Azure Arc', 'an optional tech field')
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
' loads the ServiceMachinesAzureArc element
include('azure-v2/Item/ManagementGovernance/ServiceMachinesAzureArc')
ServiceMachinesAzureArc('service_machines_azure_arc', 'Service Machines Azure Arc', 'an optional tech field')
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
' loads the ServiceMachinesAzureArc element
include('azure-v2/Item/ManagementGovernance/ServiceMachinesAzureArc')
ServiceMachinesAzureArcGroup('service_machines_azure_arc', 'Service Machines Azure Arc', 'an optional tech field'){
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
' loads the ServiceMachinesAzureArc element
include('azure-v2/Item/ManagementGovernance/ServiceMachinesAzureArc')
ServiceMachinesAzureArcGroup('service_machines_azure_arc', 'Service Machines Azure Arc', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

