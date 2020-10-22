# Service Sql Managed Instance

```text
azure-v2/Item/Databases/ServiceSqlManagedInstance
```

```text
include('azure-v2/Item/Databases/ServiceSqlManagedInstance')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceSqlManagedInstance.png)|![](ServiceSqlManagedInstance.card.png)|![](ServiceSqlManagedInstance.element.png)|![](ServiceSqlManagedInstance.group.png)|



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
' loads the ServiceSqlManagedInstance element
include('azure-v2/Item/Databases/ServiceSqlManagedInstance')
ServiceSqlManagedInstanceCard('service_sql_managed_instance', 'Service Sql Managed Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceSqlManagedInstance element
include('azure-v2/Item/Databases/ServiceSqlManagedInstance')
ServiceSqlManagedInstanceCard('service_sql_managed_instance', 'Service Sql Managed Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceSqlManagedInstance element
include('azure-v2/Item/Databases/ServiceSqlManagedInstance')
ServiceSqlManagedInstance('service_sql_managed_instance', 'Service Sql Managed Instance', 'an optional tech field')
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
' loads the ServiceSqlManagedInstance element
include('azure-v2/Item/Databases/ServiceSqlManagedInstance')
ServiceSqlManagedInstance('service_sql_managed_instance', 'Service Sql Managed Instance', 'an optional tech field')
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
' loads the ServiceSqlManagedInstance element
include('azure-v2/Item/Databases/ServiceSqlManagedInstance')
ServiceSqlManagedInstanceGroup('service_sql_managed_instance', 'Service Sql Managed Instance', 'an optional tech field'){
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
' loads the ServiceSqlManagedInstance element
include('azure-v2/Item/Databases/ServiceSqlManagedInstance')
ServiceSqlManagedInstanceGroup('service_sql_managed_instance', 'Service Sql Managed Instance', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

