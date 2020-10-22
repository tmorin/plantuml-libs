# Service Reservations

```text
azure-v2/Item/General/ServiceReservations
```

```text
include('azure-v2/Item/General/ServiceReservations')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceReservations.png)|![](ServiceReservations.card.png)|![](ServiceReservations.element.png)|![](ServiceReservations.group.png)|



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
' loads the ServiceReservations element
include('azure-v2/Item/General/ServiceReservations')
ServiceReservationsCard('service_reservations', 'Service Reservations', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceReservations element
include('azure-v2/Item/General/ServiceReservations')
ServiceReservationsCard('service_reservations', 'Service Reservations', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceReservations element
include('azure-v2/Item/General/ServiceReservations')
ServiceReservations('service_reservations', 'Service Reservations', 'an optional tech field')
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
' loads the ServiceReservations element
include('azure-v2/Item/General/ServiceReservations')
ServiceReservations('service_reservations', 'Service Reservations', 'an optional tech field')
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
' loads the ServiceReservations element
include('azure-v2/Item/General/ServiceReservations')
ServiceReservationsGroup('service_reservations', 'Service Reservations', 'an optional tech field'){
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
' loads the ServiceReservations element
include('azure-v2/Item/General/ServiceReservations')
ServiceReservationsGroup('service_reservations', 'Service Reservations', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

