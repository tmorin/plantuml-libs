# Service Disks Classic

```text
azure-v2/Item/Compute/ServiceDisksClassic
```

```text
include('azure-v2/Item/Compute/ServiceDisksClassic')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceDisksClassic.png)|![](ServiceDisksClassic.card.png)|![](ServiceDisksClassic.element.png)|![](ServiceDisksClassic.group.png)|



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
' loads the ServiceDisksClassic element
include('azure-v2/Item/Compute/ServiceDisksClassic')
ServiceDisksClassicCard('service_disks_classic', 'Service Disks Classic', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceDisksClassic element
include('azure-v2/Item/Compute/ServiceDisksClassic')
ServiceDisksClassicCard('service_disks_classic', 'Service Disks Classic', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceDisksClassic element
include('azure-v2/Item/Compute/ServiceDisksClassic')
ServiceDisksClassic('service_disks_classic', 'Service Disks Classic', 'an optional tech field')
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
' loads the ServiceDisksClassic element
include('azure-v2/Item/Compute/ServiceDisksClassic')
ServiceDisksClassic('service_disks_classic', 'Service Disks Classic', 'an optional tech field')
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
' loads the ServiceDisksClassic element
include('azure-v2/Item/Compute/ServiceDisksClassic')
ServiceDisksClassicGroup('service_disks_classic', 'Service Disks Classic', 'an optional tech field'){
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
' loads the ServiceDisksClassic element
include('azure-v2/Item/Compute/ServiceDisksClassic')
ServiceDisksClassicGroup('service_disks_classic', 'Service Disks Classic', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

