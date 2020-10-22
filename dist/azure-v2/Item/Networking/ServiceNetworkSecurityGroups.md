# Service Network Security Groups

```text
azure-v2/Item/Networking/ServiceNetworkSecurityGroups
```

```text
include('azure-v2/Item/Networking/ServiceNetworkSecurityGroups')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceNetworkSecurityGroups.png)|![](ServiceNetworkSecurityGroups.card.png)|![](ServiceNetworkSecurityGroups.element.png)|![](ServiceNetworkSecurityGroups.group.png)|



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
' loads the ServiceNetworkSecurityGroups element
include('azure-v2/Item/Networking/ServiceNetworkSecurityGroups')
ServiceNetworkSecurityGroupsCard('service_network_security_groups', 'Service Network Security Groups', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceNetworkSecurityGroups element
include('azure-v2/Item/Networking/ServiceNetworkSecurityGroups')
ServiceNetworkSecurityGroupsCard('service_network_security_groups', 'Service Network Security Groups', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceNetworkSecurityGroups element
include('azure-v2/Item/Networking/ServiceNetworkSecurityGroups')
ServiceNetworkSecurityGroups('service_network_security_groups', 'Service Network Security Groups', 'an optional tech field')
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
' loads the ServiceNetworkSecurityGroups element
include('azure-v2/Item/Networking/ServiceNetworkSecurityGroups')
ServiceNetworkSecurityGroups('service_network_security_groups', 'Service Network Security Groups', 'an optional tech field')
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
' loads the ServiceNetworkSecurityGroups element
include('azure-v2/Item/Networking/ServiceNetworkSecurityGroups')
ServiceNetworkSecurityGroupsGroup('service_network_security_groups', 'Service Network Security Groups', 'an optional tech field'){
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
' loads the ServiceNetworkSecurityGroups element
include('azure-v2/Item/Networking/ServiceNetworkSecurityGroups')
ServiceNetworkSecurityGroupsGroup('service_network_security_groups', 'Service Network Security Groups', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

