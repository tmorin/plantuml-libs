# ServiceCapacityReservationGroups


```text
azure-20/Item/Other/ServiceCapacityReservationGroups
```

```text
include('azure-20/Item/Other/ServiceCapacityReservationGroups')
```



| Illustration | ServiceCapacityReservationGroups | ServiceCapacityReservationGroupsCard | ServiceCapacityReservationGroupsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-20/Item/Other/ServiceCapacityReservationGroups.png) | ![illustration for ServiceCapacityReservationGroups](../../../azure-20/Item/Other/ServiceCapacityReservationGroups.Local.png) | ![illustration for ServiceCapacityReservationGroupsCard](../../../azure-20/Item/Other/ServiceCapacityReservationGroupsCard.Local.png) | ![illustration for ServiceCapacityReservationGroupsGroup](../../../azure-20/Item/Other/ServiceCapacityReservationGroupsGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceCapacityReservationGroupsXs>`
- `<$ServiceCapacityReservationGroupsSm>`
- `<$ServiceCapacityReservationGroupsMd>`
- `<$ServiceCapacityReservationGroupsLg>`





## ServiceCapacityReservationGroups

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceCapacityReservationGroups
include('azure-20/Item/Other/ServiceCapacityReservationGroups')

' renders the element
ServiceCapacityReservationGroups('ServiceCapacityReservationGroups', 'Service Capacity Reservation Groups', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceCapacityReservationGroups
include('azure-20/Item/Other/ServiceCapacityReservationGroups')

' renders the element
ServiceCapacityReservationGroups('ServiceCapacityReservationGroups', 'Service Capacity Reservation Groups', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceCapacityReservationGroupsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceCapacityReservationGroupsCard
include('azure-20/Item/Other/ServiceCapacityReservationGroups')

' renders the element
ServiceCapacityReservationGroupsCard('ServiceCapacityReservationGroupsCard', 'Service Capacity Reservation Groups Card', 'an optional description')
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

' loads the Item which embeds the element ServiceCapacityReservationGroupsCard
include('azure-20/Item/Other/ServiceCapacityReservationGroups')

' renders the element
ServiceCapacityReservationGroupsCard('ServiceCapacityReservationGroupsCard', 'Service Capacity Reservation Groups Card', 'an optional description')
@enduml
```

## ServiceCapacityReservationGroupsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceCapacityReservationGroupsGroup
include('azure-20/Item/Other/ServiceCapacityReservationGroups')

' renders the element
ServiceCapacityReservationGroupsGroup('ServiceCapacityReservationGroupsGroup', 'Service Capacity Reservation Groups Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceCapacityReservationGroupsGroup
include('azure-20/Item/Other/ServiceCapacityReservationGroups')

' renders the element
ServiceCapacityReservationGroupsGroup('ServiceCapacityReservationGroupsGroup', 'Service Capacity Reservation Groups Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

