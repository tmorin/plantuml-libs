# Service Service Health

```text
azure-v2/Item/General/ServiceServiceHealth
```

```text
include('azure-v2/Item/General/ServiceServiceHealth')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceServiceHealth.png)|![](ServiceServiceHealth.card.png)|![](ServiceServiceHealth.element.png)|![](ServiceServiceHealth.group.png)|



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
' loads the ServiceServiceHealth element
include('azure-v2/Item/General/ServiceServiceHealth')
ServiceServiceHealthCard('service_service_health', 'Service Service Health', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceServiceHealth element
include('azure-v2/Item/General/ServiceServiceHealth')
ServiceServiceHealthCard('service_service_health', 'Service Service Health', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceServiceHealth element
include('azure-v2/Item/General/ServiceServiceHealth')
ServiceServiceHealth('service_service_health', 'Service Service Health', 'an optional tech field')
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
' loads the ServiceServiceHealth element
include('azure-v2/Item/General/ServiceServiceHealth')
ServiceServiceHealth('service_service_health', 'Service Service Health', 'an optional tech field')
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
' loads the ServiceServiceHealth element
include('azure-v2/Item/General/ServiceServiceHealth')
ServiceServiceHealthGroup('service_service_health', 'Service Service Health', 'an optional tech field'){
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
' loads the ServiceServiceHealth element
include('azure-v2/Item/General/ServiceServiceHealth')
ServiceServiceHealthGroup('service_service_health', 'Service Service Health', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

