# Service Firewalls

```text
azure-v2/Item/Networking/ServiceFirewalls
```

```text
include('azure-v2/Item/Networking/ServiceFirewalls')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceFirewalls.png)|![](ServiceFirewalls.card.png)|![](ServiceFirewalls.element.png)|![](ServiceFirewalls.group.png)|



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
' loads the ServiceFirewalls element
include('azure-v2/Item/Networking/ServiceFirewalls')
ServiceFirewallsCard('service_firewalls', 'Service Firewalls', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceFirewalls element
include('azure-v2/Item/Networking/ServiceFirewalls')
ServiceFirewallsCard('service_firewalls', 'Service Firewalls', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceFirewalls element
include('azure-v2/Item/Networking/ServiceFirewalls')
ServiceFirewalls('service_firewalls', 'Service Firewalls', 'an optional tech field')
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
' loads the ServiceFirewalls element
include('azure-v2/Item/Networking/ServiceFirewalls')
ServiceFirewalls('service_firewalls', 'Service Firewalls', 'an optional tech field')
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
' loads the ServiceFirewalls element
include('azure-v2/Item/Networking/ServiceFirewalls')
ServiceFirewallsGroup('service_firewalls', 'Service Firewalls', 'an optional tech field'){
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
' loads the ServiceFirewalls element
include('azure-v2/Item/Networking/ServiceFirewalls')
ServiceFirewallsGroup('service_firewalls', 'Service Firewalls', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

