# Service Backlog

```text
azure-v2/Item/General/ServiceBacklog
```

```text
include('azure-v2/Item/General/ServiceBacklog')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceBacklog.png)|![](ServiceBacklog.card.png)|![](ServiceBacklog.element.png)|![](ServiceBacklog.group.png)|



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
' loads the ServiceBacklog element
include('azure-v2/Item/General/ServiceBacklog')
ServiceBacklogCard('service_backlog', 'Service Backlog', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceBacklog element
include('azure-v2/Item/General/ServiceBacklog')
ServiceBacklogCard('service_backlog', 'Service Backlog', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceBacklog element
include('azure-v2/Item/General/ServiceBacklog')
ServiceBacklog('service_backlog', 'Service Backlog', 'an optional tech field')
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
' loads the ServiceBacklog element
include('azure-v2/Item/General/ServiceBacklog')
ServiceBacklog('service_backlog', 'Service Backlog', 'an optional tech field')
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
' loads the ServiceBacklog element
include('azure-v2/Item/General/ServiceBacklog')
ServiceBacklogGroup('service_backlog', 'Service Backlog', 'an optional tech field'){
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
' loads the ServiceBacklog element
include('azure-v2/Item/General/ServiceBacklog')
ServiceBacklogGroup('service_backlog', 'Service Backlog', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

