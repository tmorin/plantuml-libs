# Cloud Sql

```text
gcp/Item/StorageDatabases/CloudSql
```

```text
include('gcp/Item/StorageDatabases/CloudSql')
```

|icon|card|element|group|
|---|---|---|---|
|![](CloudSql.png)|![](CloudSql.card.png)|![](CloudSql.element.png)|![](CloudSql.group.png)|



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
' loads the CloudSql element
include('gcp/Item/StorageDatabases/CloudSql')
CloudSqlCard('cloud_sql', 'Cloud Sql', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the CloudSql element
include('gcp/Item/StorageDatabases/CloudSql')
CloudSqlCard('cloud_sql', 'Cloud Sql', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the CloudSql element
include('gcp/Item/StorageDatabases/CloudSql')
CloudSql('cloud_sql', 'Cloud Sql', 'an optional tech field')
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
' loads the CloudSql element
include('gcp/Item/StorageDatabases/CloudSql')
CloudSql('cloud_sql', 'Cloud Sql', 'an optional tech field')
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
' loads the CloudSql element
include('gcp/Item/StorageDatabases/CloudSql')
CloudSqlGroup('cloud_sql', 'Cloud Sql', 'an optional tech field'){
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
' loads the CloudSql element
include('gcp/Item/StorageDatabases/CloudSql')
CloudSqlGroup('cloud_sql', 'Cloud Sql', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

