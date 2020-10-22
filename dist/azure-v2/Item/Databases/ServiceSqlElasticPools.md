# Service Sql Elastic Pools

```text
azure-v2/Item/Databases/ServiceSqlElasticPools
```

```text
include('azure-v2/Item/Databases/ServiceSqlElasticPools')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceSqlElasticPools.png)|![](ServiceSqlElasticPools.card.png)|![](ServiceSqlElasticPools.element.png)|![](ServiceSqlElasticPools.group.png)|



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
' loads the ServiceSqlElasticPools element
include('azure-v2/Item/Databases/ServiceSqlElasticPools')
ServiceSqlElasticPoolsCard('service_sql_elastic_pools', 'Service Sql Elastic Pools', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceSqlElasticPools element
include('azure-v2/Item/Databases/ServiceSqlElasticPools')
ServiceSqlElasticPoolsCard('service_sql_elastic_pools', 'Service Sql Elastic Pools', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceSqlElasticPools element
include('azure-v2/Item/Databases/ServiceSqlElasticPools')
ServiceSqlElasticPools('service_sql_elastic_pools', 'Service Sql Elastic Pools', 'an optional tech field')
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
' loads the ServiceSqlElasticPools element
include('azure-v2/Item/Databases/ServiceSqlElasticPools')
ServiceSqlElasticPools('service_sql_elastic_pools', 'Service Sql Elastic Pools', 'an optional tech field')
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
' loads the ServiceSqlElasticPools element
include('azure-v2/Item/Databases/ServiceSqlElasticPools')
ServiceSqlElasticPoolsGroup('service_sql_elastic_pools', 'Service Sql Elastic Pools', 'an optional tech field'){
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
' loads the ServiceSqlElasticPools element
include('azure-v2/Item/Databases/ServiceSqlElasticPools')
ServiceSqlElasticPoolsGroup('service_sql_elastic_pools', 'Service Sql Elastic Pools', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

