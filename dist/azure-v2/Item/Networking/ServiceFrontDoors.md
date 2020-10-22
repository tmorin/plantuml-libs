# Service Front Doors

```text
azure-v2/Item/Networking/ServiceFrontDoors
```

```text
include('azure-v2/Item/Networking/ServiceFrontDoors')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceFrontDoors.png)|![](ServiceFrontDoors.card.png)|![](ServiceFrontDoors.element.png)|![](ServiceFrontDoors.group.png)|



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
' loads the ServiceFrontDoors element
include('azure-v2/Item/Networking/ServiceFrontDoors')
ServiceFrontDoorsCard('service_front_doors', 'Service Front Doors', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceFrontDoors element
include('azure-v2/Item/Networking/ServiceFrontDoors')
ServiceFrontDoorsCard('service_front_doors', 'Service Front Doors', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceFrontDoors element
include('azure-v2/Item/Networking/ServiceFrontDoors')
ServiceFrontDoors('service_front_doors', 'Service Front Doors', 'an optional tech field')
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
' loads the ServiceFrontDoors element
include('azure-v2/Item/Networking/ServiceFrontDoors')
ServiceFrontDoors('service_front_doors', 'Service Front Doors', 'an optional tech field')
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
' loads the ServiceFrontDoors element
include('azure-v2/Item/Networking/ServiceFrontDoors')
ServiceFrontDoorsGroup('service_front_doors', 'Service Front Doors', 'an optional tech field'){
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
' loads the ServiceFrontDoors element
include('azure-v2/Item/Networking/ServiceFrontDoors')
ServiceFrontDoorsGroup('service_front_doors', 'Service Front Doors', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

