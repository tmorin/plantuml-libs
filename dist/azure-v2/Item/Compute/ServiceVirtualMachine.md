# Service Virtual Machine

```text
azure-v2/Item/Compute/ServiceVirtualMachine
```

```text
include('azure-v2/Item/Compute/ServiceVirtualMachine')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceVirtualMachine.png)|![](ServiceVirtualMachine.card.png)|![](ServiceVirtualMachine.element.png)|![](ServiceVirtualMachine.group.png)|



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
' loads the ServiceVirtualMachine element
include('azure-v2/Item/Compute/ServiceVirtualMachine')
ServiceVirtualMachineCard('service_virtual_machine', 'Service Virtual Machine', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceVirtualMachine element
include('azure-v2/Item/Compute/ServiceVirtualMachine')
ServiceVirtualMachineCard('service_virtual_machine', 'Service Virtual Machine', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceVirtualMachine element
include('azure-v2/Item/Compute/ServiceVirtualMachine')
ServiceVirtualMachine('service_virtual_machine', 'Service Virtual Machine', 'an optional tech field')
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
' loads the ServiceVirtualMachine element
include('azure-v2/Item/Compute/ServiceVirtualMachine')
ServiceVirtualMachine('service_virtual_machine', 'Service Virtual Machine', 'an optional tech field')
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
' loads the ServiceVirtualMachine element
include('azure-v2/Item/Compute/ServiceVirtualMachine')
ServiceVirtualMachineGroup('service_virtual_machine', 'Service Virtual Machine', 'an optional tech field'){
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
' loads the ServiceVirtualMachine element
include('azure-v2/Item/Compute/ServiceVirtualMachine')
ServiceVirtualMachineGroup('service_virtual_machine', 'Service Virtual Machine', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

