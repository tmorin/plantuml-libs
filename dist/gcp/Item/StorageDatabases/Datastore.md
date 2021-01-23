# Datastore

```text
gcp/Item/StorageDatabases/Datastore
```

```text
include('gcp/Item/StorageDatabases/Datastore')
```

|icon|card|element|group|
|---|---|---|---|
|![](Datastore.png)|![](Datastore.card.png)|![](Datastore.element.png)|![](Datastore.group.png)|



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
' loads the Datastore element
include('gcp/Item/StorageDatabases/Datastore')
DatastoreCard('datastore', 'Datastore', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the Datastore element
include('gcp/Item/StorageDatabases/Datastore')
DatastoreCard('datastore', 'Datastore', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the Datastore element
include('gcp/Item/StorageDatabases/Datastore')
Datastore('datastore', 'Datastore', 'an optional tech field')
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
' loads the Datastore element
include('gcp/Item/StorageDatabases/Datastore')
Datastore('datastore', 'Datastore', 'an optional tech field')
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
' loads the Datastore element
include('gcp/Item/StorageDatabases/Datastore')
DatastoreGroup('datastore', 'Datastore', 'an optional tech field'){
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
' loads the Datastore element
include('gcp/Item/StorageDatabases/Datastore')
DatastoreGroup('datastore', 'Datastore', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

