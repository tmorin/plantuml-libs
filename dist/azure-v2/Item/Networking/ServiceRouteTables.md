# Service Route Tables

```text
azure-v2/Item/Networking/ServiceRouteTables
```

```text
include('azure-v2/Item/Networking/ServiceRouteTables')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceRouteTables.png)|![](ServiceRouteTables.card.png)|![](ServiceRouteTables.element.png)|![](ServiceRouteTables.group.png)|



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
' loads the ServiceRouteTables element
include('azure-v2/Item/Networking/ServiceRouteTables')
ServiceRouteTablesCard('service_route_tables', 'Service Route Tables', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceRouteTables element
include('azure-v2/Item/Networking/ServiceRouteTables')
ServiceRouteTablesCard('service_route_tables', 'Service Route Tables', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceRouteTables element
include('azure-v2/Item/Networking/ServiceRouteTables')
ServiceRouteTables('service_route_tables', 'Service Route Tables', 'an optional tech field')
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
' loads the ServiceRouteTables element
include('azure-v2/Item/Networking/ServiceRouteTables')
ServiceRouteTables('service_route_tables', 'Service Route Tables', 'an optional tech field')
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
' loads the ServiceRouteTables element
include('azure-v2/Item/Networking/ServiceRouteTables')
ServiceRouteTablesGroup('service_route_tables', 'Service Route Tables', 'an optional tech field'){
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
' loads the ServiceRouteTables element
include('azure-v2/Item/Networking/ServiceRouteTables')
ServiceRouteTablesGroup('service_route_tables', 'Service Route Tables', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

