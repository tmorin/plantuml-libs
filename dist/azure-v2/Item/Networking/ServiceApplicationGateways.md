# Service Application Gateways

```text
azure-v2/Item/Networking/ServiceApplicationGateways
```

```text
include('azure-v2/Item/Networking/ServiceApplicationGateways')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceApplicationGateways.png)|![](ServiceApplicationGateways.card.png)|![](ServiceApplicationGateways.element.png)|![](ServiceApplicationGateways.group.png)|



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
' loads the ServiceApplicationGateways element
include('azure-v2/Item/Networking/ServiceApplicationGateways')
ServiceApplicationGatewaysCard('service_application_gateways', 'Service Application Gateways', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceApplicationGateways element
include('azure-v2/Item/Networking/ServiceApplicationGateways')
ServiceApplicationGatewaysCard('service_application_gateways', 'Service Application Gateways', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceApplicationGateways element
include('azure-v2/Item/Networking/ServiceApplicationGateways')
ServiceApplicationGateways('service_application_gateways', 'Service Application Gateways', 'an optional tech field')
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
' loads the ServiceApplicationGateways element
include('azure-v2/Item/Networking/ServiceApplicationGateways')
ServiceApplicationGateways('service_application_gateways', 'Service Application Gateways', 'an optional tech field')
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
' loads the ServiceApplicationGateways element
include('azure-v2/Item/Networking/ServiceApplicationGateways')
ServiceApplicationGatewaysGroup('service_application_gateways', 'Service Application Gateways', 'an optional tech field'){
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
' loads the ServiceApplicationGateways element
include('azure-v2/Item/Networking/ServiceApplicationGateways')
ServiceApplicationGatewaysGroup('service_application_gateways', 'Service Application Gateways', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

