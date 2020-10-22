# Service Virtual Machines Classic

```text
azure-v2/Item/Compute/ServiceVirtualMachinesClassic
```

```text
include('azure-v2/Item/Compute/ServiceVirtualMachinesClassic')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceVirtualMachinesClassic.png)|![](ServiceVirtualMachinesClassic.card.png)|![](ServiceVirtualMachinesClassic.element.png)|![](ServiceVirtualMachinesClassic.group.png)|



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
' loads the ServiceVirtualMachinesClassic element
include('azure-v2/Item/Compute/ServiceVirtualMachinesClassic')
ServiceVirtualMachinesClassicCard('service_virtual_machines_classic', 'Service Virtual Machines Classic', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceVirtualMachinesClassic element
include('azure-v2/Item/Compute/ServiceVirtualMachinesClassic')
ServiceVirtualMachinesClassicCard('service_virtual_machines_classic', 'Service Virtual Machines Classic', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceVirtualMachinesClassic element
include('azure-v2/Item/Compute/ServiceVirtualMachinesClassic')
ServiceVirtualMachinesClassic('service_virtual_machines_classic', 'Service Virtual Machines Classic', 'an optional tech field')
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
' loads the ServiceVirtualMachinesClassic element
include('azure-v2/Item/Compute/ServiceVirtualMachinesClassic')
ServiceVirtualMachinesClassic('service_virtual_machines_classic', 'Service Virtual Machines Classic', 'an optional tech field')
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
' loads the ServiceVirtualMachinesClassic element
include('azure-v2/Item/Compute/ServiceVirtualMachinesClassic')
ServiceVirtualMachinesClassicGroup('service_virtual_machines_classic', 'Service Virtual Machines Classic', 'an optional tech field'){
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
' loads the ServiceVirtualMachinesClassic element
include('azure-v2/Item/Compute/ServiceVirtualMachinesClassic')
ServiceVirtualMachinesClassicGroup('service_virtual_machines_classic', 'Service Virtual Machines Classic', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

