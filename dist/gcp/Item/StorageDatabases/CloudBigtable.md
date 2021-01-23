# Cloud Bigtable

```text
gcp/Item/StorageDatabases/CloudBigtable
```

```text
include('gcp/Item/StorageDatabases/CloudBigtable')
```

|icon|card|element|group|
|---|---|---|---|
|![](CloudBigtable.png)|![](CloudBigtable.card.png)|![](CloudBigtable.element.png)|![](CloudBigtable.group.png)|



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
' loads the CloudBigtable element
include('gcp/Item/StorageDatabases/CloudBigtable')
CloudBigtableCard('cloud_bigtable', 'Cloud Bigtable', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the CloudBigtable element
include('gcp/Item/StorageDatabases/CloudBigtable')
CloudBigtableCard('cloud_bigtable', 'Cloud Bigtable', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the CloudBigtable element
include('gcp/Item/StorageDatabases/CloudBigtable')
CloudBigtable('cloud_bigtable', 'Cloud Bigtable', 'an optional tech field')
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
' loads the CloudBigtable element
include('gcp/Item/StorageDatabases/CloudBigtable')
CloudBigtable('cloud_bigtable', 'Cloud Bigtable', 'an optional tech field')
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
' loads the CloudBigtable element
include('gcp/Item/StorageDatabases/CloudBigtable')
CloudBigtableGroup('cloud_bigtable', 'Cloud Bigtable', 'an optional tech field'){
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
' loads the CloudBigtable element
include('gcp/Item/StorageDatabases/CloudBigtable')
CloudBigtableGroup('cloud_bigtable', 'Cloud Bigtable', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

