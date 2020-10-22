# Service Availability Sets

```text
azure-v2/Item/Compute/ServiceAvailabilitySets
```

```text
include('azure-v2/Item/Compute/ServiceAvailabilitySets')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceAvailabilitySets.png)|![](ServiceAvailabilitySets.card.png)|![](ServiceAvailabilitySets.element.png)|![](ServiceAvailabilitySets.group.png)|



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
' loads the ServiceAvailabilitySets element
include('azure-v2/Item/Compute/ServiceAvailabilitySets')
ServiceAvailabilitySetsCard('service_availability_sets', 'Service Availability Sets', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAvailabilitySets element
include('azure-v2/Item/Compute/ServiceAvailabilitySets')
ServiceAvailabilitySetsCard('service_availability_sets', 'Service Availability Sets', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAvailabilitySets element
include('azure-v2/Item/Compute/ServiceAvailabilitySets')
ServiceAvailabilitySets('service_availability_sets', 'Service Availability Sets', 'an optional tech field')
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
' loads the ServiceAvailabilitySets element
include('azure-v2/Item/Compute/ServiceAvailabilitySets')
ServiceAvailabilitySets('service_availability_sets', 'Service Availability Sets', 'an optional tech field')
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
' loads the ServiceAvailabilitySets element
include('azure-v2/Item/Compute/ServiceAvailabilitySets')
ServiceAvailabilitySetsGroup('service_availability_sets', 'Service Availability Sets', 'an optional tech field'){
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
' loads the ServiceAvailabilitySets element
include('azure-v2/Item/Compute/ServiceAvailabilitySets')
ServiceAvailabilitySetsGroup('service_availability_sets', 'Service Availability Sets', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

