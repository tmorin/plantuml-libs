# Service Ip Groups

```text
azure-v2/Item/Networking/ServiceIpGroups
```

```text
include('azure-v2/Item/Networking/ServiceIpGroups')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceIpGroups.png)|![](ServiceIpGroups.card.png)|![](ServiceIpGroups.element.png)|![](ServiceIpGroups.group.png)|



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
' loads the ServiceIpGroups element
include('azure-v2/Item/Networking/ServiceIpGroups')
ServiceIpGroupsCard('service_ip_groups', 'Service Ip Groups', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceIpGroups element
include('azure-v2/Item/Networking/ServiceIpGroups')
ServiceIpGroupsCard('service_ip_groups', 'Service Ip Groups', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceIpGroups element
include('azure-v2/Item/Networking/ServiceIpGroups')
ServiceIpGroups('service_ip_groups', 'Service Ip Groups', 'an optional tech field')
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
' loads the ServiceIpGroups element
include('azure-v2/Item/Networking/ServiceIpGroups')
ServiceIpGroups('service_ip_groups', 'Service Ip Groups', 'an optional tech field')
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
' loads the ServiceIpGroups element
include('azure-v2/Item/Networking/ServiceIpGroups')
ServiceIpGroupsGroup('service_ip_groups', 'Service Ip Groups', 'an optional tech field'){
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
' loads the ServiceIpGroups element
include('azure-v2/Item/Networking/ServiceIpGroups')
ServiceIpGroupsGroup('service_ip_groups', 'Service Ip Groups', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

