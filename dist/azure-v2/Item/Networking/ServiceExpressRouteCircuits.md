# Service Express Route Circuits

```text
azure-v2/Item/Networking/ServiceExpressRouteCircuits
```

```text
include('azure-v2/Item/Networking/ServiceExpressRouteCircuits')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceExpressRouteCircuits.png)|![](ServiceExpressRouteCircuits.card.png)|![](ServiceExpressRouteCircuits.element.png)|![](ServiceExpressRouteCircuits.group.png)|



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
' loads the ServiceExpressRouteCircuits element
include('azure-v2/Item/Networking/ServiceExpressRouteCircuits')
ServiceExpressRouteCircuitsCard('service_express_route_circuits', 'Service Express Route Circuits', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceExpressRouteCircuits element
include('azure-v2/Item/Networking/ServiceExpressRouteCircuits')
ServiceExpressRouteCircuitsCard('service_express_route_circuits', 'Service Express Route Circuits', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceExpressRouteCircuits element
include('azure-v2/Item/Networking/ServiceExpressRouteCircuits')
ServiceExpressRouteCircuits('service_express_route_circuits', 'Service Express Route Circuits', 'an optional tech field')
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
' loads the ServiceExpressRouteCircuits element
include('azure-v2/Item/Networking/ServiceExpressRouteCircuits')
ServiceExpressRouteCircuits('service_express_route_circuits', 'Service Express Route Circuits', 'an optional tech field')
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
' loads the ServiceExpressRouteCircuits element
include('azure-v2/Item/Networking/ServiceExpressRouteCircuits')
ServiceExpressRouteCircuitsGroup('service_express_route_circuits', 'Service Express Route Circuits', 'an optional tech field'){
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
' loads the ServiceExpressRouteCircuits element
include('azure-v2/Item/Networking/ServiceExpressRouteCircuits')
ServiceExpressRouteCircuitsGroup('service_express_route_circuits', 'Service Express Route Circuits', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

