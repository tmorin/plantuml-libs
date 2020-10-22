# Service Relays

```text
azure-v2/Item/Integration/ServiceRelays
```

```text
include('azure-v2/Item/Integration/ServiceRelays')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceRelays.png)|![](ServiceRelays.card.png)|![](ServiceRelays.element.png)|![](ServiceRelays.group.png)|



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
' loads the ServiceRelays element
include('azure-v2/Item/Integration/ServiceRelays')
ServiceRelaysCard('service_relays', 'Service Relays', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceRelays element
include('azure-v2/Item/Integration/ServiceRelays')
ServiceRelaysCard('service_relays', 'Service Relays', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceRelays element
include('azure-v2/Item/Integration/ServiceRelays')
ServiceRelays('service_relays', 'Service Relays', 'an optional tech field')
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
' loads the ServiceRelays element
include('azure-v2/Item/Integration/ServiceRelays')
ServiceRelays('service_relays', 'Service Relays', 'an optional tech field')
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
' loads the ServiceRelays element
include('azure-v2/Item/Integration/ServiceRelays')
ServiceRelaysGroup('service_relays', 'Service Relays', 'an optional tech field'){
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
' loads the ServiceRelays element
include('azure-v2/Item/Integration/ServiceRelays')
ServiceRelaysGroup('service_relays', 'Service Relays', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

