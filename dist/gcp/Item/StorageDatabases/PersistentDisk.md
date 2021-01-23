# Persistent Disk

```text
gcp/Item/StorageDatabases/PersistentDisk
```

```text
include('gcp/Item/StorageDatabases/PersistentDisk')
```

|icon|card|element|group|
|---|---|---|---|
|![](PersistentDisk.png)|![](PersistentDisk.card.png)|![](PersistentDisk.element.png)|![](PersistentDisk.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the PersistentDisk element
include('gcp/Item/StorageDatabases/PersistentDisk')
PersistentDiskCard('persistent_disk', 'Persistent Disk', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the PersistentDisk element
include('gcp/Item/StorageDatabases/PersistentDisk')
PersistentDiskCard('persistent_disk', 'Persistent Disk', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the PersistentDisk element
include('gcp/Item/StorageDatabases/PersistentDisk')
PersistentDisk('persistent_disk', 'Persistent Disk', 'an optional tech field')
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
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the PersistentDisk element
include('gcp/Item/StorageDatabases/PersistentDisk')
PersistentDisk('persistent_disk', 'Persistent Disk', 'an optional tech field')
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
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the PersistentDisk element
include('gcp/Item/StorageDatabases/PersistentDisk')
PersistentDiskGroup('persistent_disk', 'Persistent Disk', 'an optional tech field'){
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
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the PersistentDisk element
include('gcp/Item/StorageDatabases/PersistentDisk')
PersistentDiskGroup('persistent_disk', 'Persistent Disk', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

