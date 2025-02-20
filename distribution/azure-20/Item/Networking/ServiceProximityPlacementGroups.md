# ServiceProximityPlacementGroups


```text
azure-20/Item/Networking/ServiceProximityPlacementGroups
```

```text
include('azure-20/Item/Networking/ServiceProximityPlacementGroups')
```



| Illustration | ServiceProximityPlacementGroups | ServiceProximityPlacementGroupsCard | ServiceProximityPlacementGroupsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-20/Item/Networking/ServiceProximityPlacementGroups.png) | ![illustration for ServiceProximityPlacementGroups](../../../azure-20/Item/Networking/ServiceProximityPlacementGroups.Local.png) | ![illustration for ServiceProximityPlacementGroupsCard](../../../azure-20/Item/Networking/ServiceProximityPlacementGroupsCard.Local.png) | ![illustration for ServiceProximityPlacementGroupsGroup](../../../azure-20/Item/Networking/ServiceProximityPlacementGroupsGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceProximityPlacementGroupsXs>`
- `<$ServiceProximityPlacementGroupsSm>`
- `<$ServiceProximityPlacementGroupsMd>`
- `<$ServiceProximityPlacementGroupsLg>`





## ServiceProximityPlacementGroups

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceProximityPlacementGroups
include('azure-20/Item/Networking/ServiceProximityPlacementGroups')

' renders the element
ServiceProximityPlacementGroups('ServiceProximityPlacementGroups', 'Service Proximity Placement Groups', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceProximityPlacementGroups
include('azure-20/Item/Networking/ServiceProximityPlacementGroups')

' renders the element
ServiceProximityPlacementGroups('ServiceProximityPlacementGroups', 'Service Proximity Placement Groups', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceProximityPlacementGroupsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceProximityPlacementGroupsCard
include('azure-20/Item/Networking/ServiceProximityPlacementGroups')

' renders the element
ServiceProximityPlacementGroupsCard('ServiceProximityPlacementGroupsCard', 'Service Proximity Placement Groups Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceProximityPlacementGroupsCard
include('azure-20/Item/Networking/ServiceProximityPlacementGroups')

' renders the element
ServiceProximityPlacementGroupsCard('ServiceProximityPlacementGroupsCard', 'Service Proximity Placement Groups Card', 'an optional description')
@enduml
```

## ServiceProximityPlacementGroupsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceProximityPlacementGroupsGroup
include('azure-20/Item/Networking/ServiceProximityPlacementGroups')

' renders the element
ServiceProximityPlacementGroupsGroup('ServiceProximityPlacementGroupsGroup', 'Service Proximity Placement Groups Group', 'an optional tech label') {
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

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceProximityPlacementGroupsGroup
include('azure-20/Item/Networking/ServiceProximityPlacementGroups')

' renders the element
ServiceProximityPlacementGroupsGroup('ServiceProximityPlacementGroupsGroup', 'Service Proximity Placement Groups Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

