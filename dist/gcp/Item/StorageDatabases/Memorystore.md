# Memorystore

```text
gcp/Item/StorageDatabases/Memorystore
```

```text
include('gcp/Item/StorageDatabases/Memorystore')
```

|icon|card|element|group|
|---|---|---|---|
|![](Memorystore.png)|![](Memorystore.card.png)|![](Memorystore.element.png)|![](Memorystore.group.png)|



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
' loads the Memorystore element
include('gcp/Item/StorageDatabases/Memorystore')
MemorystoreCard('memorystore', 'Memorystore', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the Memorystore element
include('gcp/Item/StorageDatabases/Memorystore')
MemorystoreCard('memorystore', 'Memorystore', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the Memorystore element
include('gcp/Item/StorageDatabases/Memorystore')
Memorystore('memorystore', 'Memorystore', 'an optional tech field')
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
' loads the Memorystore element
include('gcp/Item/StorageDatabases/Memorystore')
Memorystore('memorystore', 'Memorystore', 'an optional tech field')
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
' loads the Memorystore element
include('gcp/Item/StorageDatabases/Memorystore')
MemorystoreGroup('memorystore', 'Memorystore', 'an optional tech field'){
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
' loads the Memorystore element
include('gcp/Item/StorageDatabases/Memorystore')
MemorystoreGroup('memorystore', 'Memorystore', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

