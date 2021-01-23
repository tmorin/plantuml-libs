# Filestore

```text
gcp/Item/StorageDatabases/Filestore
```

```text
include('gcp/Item/StorageDatabases/Filestore')
```

|icon|card|element|group|
|---|---|---|---|
|![](Filestore.png)|![](Filestore.card.png)|![](Filestore.element.png)|![](Filestore.group.png)|



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
' loads the Filestore element
include('gcp/Item/StorageDatabases/Filestore')
FilestoreCard('filestore', 'Filestore', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the Filestore element
include('gcp/Item/StorageDatabases/Filestore')
FilestoreCard('filestore', 'Filestore', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the Filestore element
include('gcp/Item/StorageDatabases/Filestore')
Filestore('filestore', 'Filestore', 'an optional tech field')
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
' loads the Filestore element
include('gcp/Item/StorageDatabases/Filestore')
Filestore('filestore', 'Filestore', 'an optional tech field')
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
' loads the Filestore element
include('gcp/Item/StorageDatabases/Filestore')
FilestoreGroup('filestore', 'Filestore', 'an optional tech field'){
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
' loads the Filestore element
include('gcp/Item/StorageDatabases/Filestore')
FilestoreGroup('filestore', 'Filestore', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

