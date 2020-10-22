# Service Azure Migrate

```text
azure-v2/Item/Migrate/ServiceAzureMigrate
```

```text
include('azure-v2/Item/Migrate/ServiceAzureMigrate')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceAzureMigrate.png)|![](ServiceAzureMigrate.card.png)|![](ServiceAzureMigrate.element.png)|![](ServiceAzureMigrate.group.png)|



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
' loads the ServiceAzureMigrate element
include('azure-v2/Item/Migrate/ServiceAzureMigrate')
ServiceAzureMigrateCard('service_azure_migrate', 'Service Azure Migrate', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAzureMigrate element
include('azure-v2/Item/Migrate/ServiceAzureMigrate')
ServiceAzureMigrateCard('service_azure_migrate', 'Service Azure Migrate', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAzureMigrate element
include('azure-v2/Item/Migrate/ServiceAzureMigrate')
ServiceAzureMigrate('service_azure_migrate', 'Service Azure Migrate', 'an optional tech field')
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
' loads the ServiceAzureMigrate element
include('azure-v2/Item/Migrate/ServiceAzureMigrate')
ServiceAzureMigrate('service_azure_migrate', 'Service Azure Migrate', 'an optional tech field')
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
' loads the ServiceAzureMigrate element
include('azure-v2/Item/Migrate/ServiceAzureMigrate')
ServiceAzureMigrateGroup('service_azure_migrate', 'Service Azure Migrate', 'an optional tech field'){
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
' loads the ServiceAzureMigrate element
include('azure-v2/Item/Migrate/ServiceAzureMigrate')
ServiceAzureMigrateGroup('service_azure_migrate', 'Service Azure Migrate', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

