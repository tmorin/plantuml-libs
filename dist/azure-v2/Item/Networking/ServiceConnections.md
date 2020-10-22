# Service Connections

```text
azure-v2/Item/Networking/ServiceConnections
```

```text
include('azure-v2/Item/Networking/ServiceConnections')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceConnections.png)|![](ServiceConnections.card.png)|![](ServiceConnections.element.png)|![](ServiceConnections.group.png)|



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
' loads the ServiceConnections element
include('azure-v2/Item/Networking/ServiceConnections')
ServiceConnectionsCard('service_connections', 'Service Connections', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceConnections element
include('azure-v2/Item/Networking/ServiceConnections')
ServiceConnectionsCard('service_connections', 'Service Connections', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceConnections element
include('azure-v2/Item/Networking/ServiceConnections')
ServiceConnections('service_connections', 'Service Connections', 'an optional tech field')
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
' loads the ServiceConnections element
include('azure-v2/Item/Networking/ServiceConnections')
ServiceConnections('service_connections', 'Service Connections', 'an optional tech field')
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
' loads the ServiceConnections element
include('azure-v2/Item/Networking/ServiceConnections')
ServiceConnectionsGroup('service_connections', 'Service Connections', 'an optional tech field'){
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
' loads the ServiceConnections element
include('azure-v2/Item/Networking/ServiceConnections')
ServiceConnectionsGroup('service_connections', 'Service Connections', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

