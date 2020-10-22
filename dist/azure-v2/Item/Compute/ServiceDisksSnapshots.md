# Service Disks Snapshots

```text
azure-v2/Item/Compute/ServiceDisksSnapshots
```

```text
include('azure-v2/Item/Compute/ServiceDisksSnapshots')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceDisksSnapshots.png)|![](ServiceDisksSnapshots.card.png)|![](ServiceDisksSnapshots.element.png)|![](ServiceDisksSnapshots.group.png)|



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
' loads the ServiceDisksSnapshots element
include('azure-v2/Item/Compute/ServiceDisksSnapshots')
ServiceDisksSnapshotsCard('service_disks_snapshots', 'Service Disks Snapshots', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceDisksSnapshots element
include('azure-v2/Item/Compute/ServiceDisksSnapshots')
ServiceDisksSnapshotsCard('service_disks_snapshots', 'Service Disks Snapshots', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceDisksSnapshots element
include('azure-v2/Item/Compute/ServiceDisksSnapshots')
ServiceDisksSnapshots('service_disks_snapshots', 'Service Disks Snapshots', 'an optional tech field')
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
' loads the ServiceDisksSnapshots element
include('azure-v2/Item/Compute/ServiceDisksSnapshots')
ServiceDisksSnapshots('service_disks_snapshots', 'Service Disks Snapshots', 'an optional tech field')
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
' loads the ServiceDisksSnapshots element
include('azure-v2/Item/Compute/ServiceDisksSnapshots')
ServiceDisksSnapshotsGroup('service_disks_snapshots', 'Service Disks Snapshots', 'an optional tech field'){
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
' loads the ServiceDisksSnapshots element
include('azure-v2/Item/Compute/ServiceDisksSnapshots')
ServiceDisksSnapshotsGroup('service_disks_snapshots', 'Service Disks Snapshots', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

