# Service Server Farm

```text
azure-v2/Item/General/ServiceServerFarm
```

```text
include('azure-v2/Item/General/ServiceServerFarm')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceServerFarm.png)|![](ServiceServerFarm.card.png)|![](ServiceServerFarm.element.png)|![](ServiceServerFarm.group.png)|



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
' loads the ServiceServerFarm element
include('azure-v2/Item/General/ServiceServerFarm')
ServiceServerFarmCard('service_server_farm', 'Service Server Farm', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceServerFarm element
include('azure-v2/Item/General/ServiceServerFarm')
ServiceServerFarmCard('service_server_farm', 'Service Server Farm', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceServerFarm element
include('azure-v2/Item/General/ServiceServerFarm')
ServiceServerFarm('service_server_farm', 'Service Server Farm', 'an optional tech field')
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
' loads the ServiceServerFarm element
include('azure-v2/Item/General/ServiceServerFarm')
ServiceServerFarm('service_server_farm', 'Service Server Farm', 'an optional tech field')
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
' loads the ServiceServerFarm element
include('azure-v2/Item/General/ServiceServerFarm')
ServiceServerFarmGroup('service_server_farm', 'Service Server Farm', 'an optional tech field'){
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
' loads the ServiceServerFarm element
include('azure-v2/Item/General/ServiceServerFarm')
ServiceServerFarmGroup('service_server_farm', 'Service Server Farm', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

