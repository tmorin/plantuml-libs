# Service Sql Database

```text
azure-v2/Item/Databases/ServiceSqlDatabase
```

```text
include('azure-v2/Item/Databases/ServiceSqlDatabase')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceSqlDatabase.png)|![](ServiceSqlDatabase.card.png)|![](ServiceSqlDatabase.element.png)|![](ServiceSqlDatabase.group.png)|



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
' loads the ServiceSqlDatabase element
include('azure-v2/Item/Databases/ServiceSqlDatabase')
ServiceSqlDatabaseCard('service_sql_database', 'Service Sql Database', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceSqlDatabase element
include('azure-v2/Item/Databases/ServiceSqlDatabase')
ServiceSqlDatabaseCard('service_sql_database', 'Service Sql Database', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceSqlDatabase element
include('azure-v2/Item/Databases/ServiceSqlDatabase')
ServiceSqlDatabase('service_sql_database', 'Service Sql Database', 'an optional tech field')
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
' loads the ServiceSqlDatabase element
include('azure-v2/Item/Databases/ServiceSqlDatabase')
ServiceSqlDatabase('service_sql_database', 'Service Sql Database', 'an optional tech field')
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
' loads the ServiceSqlDatabase element
include('azure-v2/Item/Databases/ServiceSqlDatabase')
ServiceSqlDatabaseGroup('service_sql_database', 'Service Sql Database', 'an optional tech field'){
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
' loads the ServiceSqlDatabase element
include('azure-v2/Item/Databases/ServiceSqlDatabase')
ServiceSqlDatabaseGroup('service_sql_database', 'Service Sql Database', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

