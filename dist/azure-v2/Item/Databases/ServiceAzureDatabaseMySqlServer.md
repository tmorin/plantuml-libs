# Service Azure Database My Sql Server

```text
azure-v2/Item/Databases/ServiceAzureDatabaseMySqlServer
```

```text
include('azure-v2/Item/Databases/ServiceAzureDatabaseMySqlServer')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceAzureDatabaseMySqlServer.png)|![](ServiceAzureDatabaseMySqlServer.card.png)|![](ServiceAzureDatabaseMySqlServer.element.png)|![](ServiceAzureDatabaseMySqlServer.group.png)|



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
' loads the ServiceAzureDatabaseMySqlServer element
include('azure-v2/Item/Databases/ServiceAzureDatabaseMySqlServer')
ServiceAzureDatabaseMySqlServerCard('service_azure_database_my_sql_server', 'Service Azure Database My Sql Server', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAzureDatabaseMySqlServer element
include('azure-v2/Item/Databases/ServiceAzureDatabaseMySqlServer')
ServiceAzureDatabaseMySqlServerCard('service_azure_database_my_sql_server', 'Service Azure Database My Sql Server', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAzureDatabaseMySqlServer element
include('azure-v2/Item/Databases/ServiceAzureDatabaseMySqlServer')
ServiceAzureDatabaseMySqlServer('service_azure_database_my_sql_server', 'Service Azure Database My Sql Server', 'an optional tech field')
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
' loads the ServiceAzureDatabaseMySqlServer element
include('azure-v2/Item/Databases/ServiceAzureDatabaseMySqlServer')
ServiceAzureDatabaseMySqlServer('service_azure_database_my_sql_server', 'Service Azure Database My Sql Server', 'an optional tech field')
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
' loads the ServiceAzureDatabaseMySqlServer element
include('azure-v2/Item/Databases/ServiceAzureDatabaseMySqlServer')
ServiceAzureDatabaseMySqlServerGroup('service_azure_database_my_sql_server', 'Service Azure Database My Sql Server', 'an optional tech field'){
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
' loads the ServiceAzureDatabaseMySqlServer element
include('azure-v2/Item/Databases/ServiceAzureDatabaseMySqlServer')
ServiceAzureDatabaseMySqlServerGroup('service_azure_database_my_sql_server', 'Service Azure Database My Sql Server', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

