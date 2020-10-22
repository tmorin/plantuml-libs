# Service Proximity Placement Groups

```text
azure-v2/Item/Networking/ServiceProximityPlacementGroups
```

```text
include('azure-v2/Item/Networking/ServiceProximityPlacementGroups')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceProximityPlacementGroups.png)|![](ServiceProximityPlacementGroups.card.png)|![](ServiceProximityPlacementGroups.element.png)|![](ServiceProximityPlacementGroups.group.png)|



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
' loads the ServiceProximityPlacementGroups element
include('azure-v2/Item/Networking/ServiceProximityPlacementGroups')
ServiceProximityPlacementGroupsCard('service_proximity_placement_groups', 'Service Proximity Placement Groups', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceProximityPlacementGroups element
include('azure-v2/Item/Networking/ServiceProximityPlacementGroups')
ServiceProximityPlacementGroupsCard('service_proximity_placement_groups', 'Service Proximity Placement Groups', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceProximityPlacementGroups element
include('azure-v2/Item/Networking/ServiceProximityPlacementGroups')
ServiceProximityPlacementGroups('service_proximity_placement_groups', 'Service Proximity Placement Groups', 'an optional tech field')
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
' loads the ServiceProximityPlacementGroups element
include('azure-v2/Item/Networking/ServiceProximityPlacementGroups')
ServiceProximityPlacementGroups('service_proximity_placement_groups', 'Service Proximity Placement Groups', 'an optional tech field')
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
' loads the ServiceProximityPlacementGroups element
include('azure-v2/Item/Networking/ServiceProximityPlacementGroups')
ServiceProximityPlacementGroupsGroup('service_proximity_placement_groups', 'Service Proximity Placement Groups', 'an optional tech field'){
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
' loads the ServiceProximityPlacementGroups element
include('azure-v2/Item/Networking/ServiceProximityPlacementGroups')
ServiceProximityPlacementGroupsGroup('service_proximity_placement_groups', 'Service Proximity Placement Groups', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

