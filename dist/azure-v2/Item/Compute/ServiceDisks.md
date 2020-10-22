# Service Disks

```text
azure-v2/Item/Compute/ServiceDisks
```

```text
include('azure-v2/Item/Compute/ServiceDisks')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceDisks.png)|![](ServiceDisks.card.png)|![](ServiceDisks.element.png)|![](ServiceDisks.group.png)|



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
' loads the ServiceDisks element
include('azure-v2/Item/Compute/ServiceDisks')
ServiceDisksCard('service_disks', 'Service Disks', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceDisks element
include('azure-v2/Item/Compute/ServiceDisks')
ServiceDisksCard('service_disks', 'Service Disks', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceDisks element
include('azure-v2/Item/Compute/ServiceDisks')
ServiceDisks('service_disks', 'Service Disks', 'an optional tech field')
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
' loads the ServiceDisks element
include('azure-v2/Item/Compute/ServiceDisks')
ServiceDisks('service_disks', 'Service Disks', 'an optional tech field')
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
' loads the ServiceDisks element
include('azure-v2/Item/Compute/ServiceDisks')
ServiceDisksGroup('service_disks', 'Service Disks', 'an optional tech field'){
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
' loads the ServiceDisks element
include('azure-v2/Item/Compute/ServiceDisks')
ServiceDisksGroup('service_disks', 'Service Disks', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

