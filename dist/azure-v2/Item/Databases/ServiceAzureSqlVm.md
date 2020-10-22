# Service Azure Sql Vm

```text
azure-v2/Item/Databases/ServiceAzureSqlVm
```

```text
include('azure-v2/Item/Databases/ServiceAzureSqlVm')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceAzureSqlVm.png)|![](ServiceAzureSqlVm.card.png)|![](ServiceAzureSqlVm.element.png)|![](ServiceAzureSqlVm.group.png)|



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
' loads the ServiceAzureSqlVm element
include('azure-v2/Item/Databases/ServiceAzureSqlVm')
ServiceAzureSqlVmCard('service_azure_sql_vm', 'Service Azure Sql Vm', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAzureSqlVm element
include('azure-v2/Item/Databases/ServiceAzureSqlVm')
ServiceAzureSqlVmCard('service_azure_sql_vm', 'Service Azure Sql Vm', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAzureSqlVm element
include('azure-v2/Item/Databases/ServiceAzureSqlVm')
ServiceAzureSqlVm('service_azure_sql_vm', 'Service Azure Sql Vm', 'an optional tech field')
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
' loads the ServiceAzureSqlVm element
include('azure-v2/Item/Databases/ServiceAzureSqlVm')
ServiceAzureSqlVm('service_azure_sql_vm', 'Service Azure Sql Vm', 'an optional tech field')
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
' loads the ServiceAzureSqlVm element
include('azure-v2/Item/Databases/ServiceAzureSqlVm')
ServiceAzureSqlVmGroup('service_azure_sql_vm', 'Service Azure Sql Vm', 'an optional tech field'){
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
' loads the ServiceAzureSqlVm element
include('azure-v2/Item/Databases/ServiceAzureSqlVm')
ServiceAzureSqlVmGroup('service_azure_sql_vm', 'Service Azure Sql Vm', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

