# Service Production Ready Database

```text
azure-v2/Item/General/ServiceProductionReadyDatabase
```

```text
include('azure-v2/Item/General/ServiceProductionReadyDatabase')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceProductionReadyDatabase.png)|![](ServiceProductionReadyDatabase.card.png)|![](ServiceProductionReadyDatabase.element.png)|![](ServiceProductionReadyDatabase.group.png)|



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
' loads the ServiceProductionReadyDatabase element
include('azure-v2/Item/General/ServiceProductionReadyDatabase')
ServiceProductionReadyDatabaseCard('service_production_ready_database', 'Service Production Ready Database', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceProductionReadyDatabase element
include('azure-v2/Item/General/ServiceProductionReadyDatabase')
ServiceProductionReadyDatabaseCard('service_production_ready_database', 'Service Production Ready Database', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceProductionReadyDatabase element
include('azure-v2/Item/General/ServiceProductionReadyDatabase')
ServiceProductionReadyDatabase('service_production_ready_database', 'Service Production Ready Database', 'an optional tech field')
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
' loads the ServiceProductionReadyDatabase element
include('azure-v2/Item/General/ServiceProductionReadyDatabase')
ServiceProductionReadyDatabase('service_production_ready_database', 'Service Production Ready Database', 'an optional tech field')
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
' loads the ServiceProductionReadyDatabase element
include('azure-v2/Item/General/ServiceProductionReadyDatabase')
ServiceProductionReadyDatabaseGroup('service_production_ready_database', 'Service Production Ready Database', 'an optional tech field'){
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
' loads the ServiceProductionReadyDatabase element
include('azure-v2/Item/General/ServiceProductionReadyDatabase')
ServiceProductionReadyDatabaseGroup('service_production_ready_database', 'Service Production Ready Database', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

