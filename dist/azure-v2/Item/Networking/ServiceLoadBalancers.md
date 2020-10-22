# Service Load Balancers

```text
azure-v2/Item/Networking/ServiceLoadBalancers
```

```text
include('azure-v2/Item/Networking/ServiceLoadBalancers')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceLoadBalancers.png)|![](ServiceLoadBalancers.card.png)|![](ServiceLoadBalancers.element.png)|![](ServiceLoadBalancers.group.png)|



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
' loads the ServiceLoadBalancers element
include('azure-v2/Item/Networking/ServiceLoadBalancers')
ServiceLoadBalancersCard('service_load_balancers', 'Service Load Balancers', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceLoadBalancers element
include('azure-v2/Item/Networking/ServiceLoadBalancers')
ServiceLoadBalancersCard('service_load_balancers', 'Service Load Balancers', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceLoadBalancers element
include('azure-v2/Item/Networking/ServiceLoadBalancers')
ServiceLoadBalancers('service_load_balancers', 'Service Load Balancers', 'an optional tech field')
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
' loads the ServiceLoadBalancers element
include('azure-v2/Item/Networking/ServiceLoadBalancers')
ServiceLoadBalancers('service_load_balancers', 'Service Load Balancers', 'an optional tech field')
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
' loads the ServiceLoadBalancers element
include('azure-v2/Item/Networking/ServiceLoadBalancers')
ServiceLoadBalancersGroup('service_load_balancers', 'Service Load Balancers', 'an optional tech field'){
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
' loads the ServiceLoadBalancers element
include('azure-v2/Item/Networking/ServiceLoadBalancers')
ServiceLoadBalancersGroup('service_load_balancers', 'Service Load Balancers', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

