# Routing Slip

```text
eip/MessageRouting/RoutingSlip
```

```text
include('eip/MessageRouting/RoutingSlip')
```

|icon|element|
|---|---|
|![](RoutingSlip.png)|![](RoutingSlip.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the eip bootstrap
include('eip/bootstrap')
' loads the RoutingSlip element
include('eip/MessageRouting/RoutingSlip')
RoutingSlip('routing_slip', 'Routing Slip', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the eip bootstrap
include('eip/bootstrap')
' loads the RoutingSlip element
include('eip/MessageRouting/RoutingSlip')
RoutingSlip('routing_slip', 'Routing Slip', 'an optional tech field')
@enduml
```

