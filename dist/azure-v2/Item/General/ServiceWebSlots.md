# Service Web Slots

```text
azure-v2/Item/General/ServiceWebSlots
```

```text
include('azure-v2/Item/General/ServiceWebSlots')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceWebSlots.png)|![](ServiceWebSlots.card.png)|![](ServiceWebSlots.element.png)|![](ServiceWebSlots.group.png)|



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
' loads the ServiceWebSlots element
include('azure-v2/Item/General/ServiceWebSlots')
ServiceWebSlotsCard('service_web_slots', 'Service Web Slots', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceWebSlots element
include('azure-v2/Item/General/ServiceWebSlots')
ServiceWebSlotsCard('service_web_slots', 'Service Web Slots', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceWebSlots element
include('azure-v2/Item/General/ServiceWebSlots')
ServiceWebSlots('service_web_slots', 'Service Web Slots', 'an optional tech field')
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
' loads the ServiceWebSlots element
include('azure-v2/Item/General/ServiceWebSlots')
ServiceWebSlots('service_web_slots', 'Service Web Slots', 'an optional tech field')
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
' loads the ServiceWebSlots element
include('azure-v2/Item/General/ServiceWebSlots')
ServiceWebSlotsGroup('service_web_slots', 'Service Web Slots', 'an optional tech field'){
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
' loads the ServiceWebSlots element
include('azure-v2/Item/General/ServiceWebSlots')
ServiceWebSlotsGroup('service_web_slots', 'Service Web Slots', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

