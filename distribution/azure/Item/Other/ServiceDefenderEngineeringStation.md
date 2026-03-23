# ServiceDefenderEngineeringStation


```text
azure/Item/Other/ServiceDefenderEngineeringStation
```

```text
include('azure/Item/Other/ServiceDefenderEngineeringStation')
```



| Illustration | ServiceDefenderEngineeringStation | ServiceDefenderEngineeringStationCard | ServiceDefenderEngineeringStationGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/Other/ServiceDefenderEngineeringStation.png) | ![illustration for ServiceDefenderEngineeringStation](../../../azure/Item/Other/ServiceDefenderEngineeringStation.Local.png) | ![illustration for ServiceDefenderEngineeringStationCard](../../../azure/Item/Other/ServiceDefenderEngineeringStationCard.Local.png) | ![illustration for ServiceDefenderEngineeringStationGroup](../../../azure/Item/Other/ServiceDefenderEngineeringStationGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceDefenderEngineeringStationXs>`
- `<$ServiceDefenderEngineeringStationSm>`
- `<$ServiceDefenderEngineeringStationMd>`
- `<$ServiceDefenderEngineeringStationLg>`





## ServiceDefenderEngineeringStation

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceDefenderEngineeringStation
include('azure/Item/Other/ServiceDefenderEngineeringStation')

' renders the element
ServiceDefenderEngineeringStation('ServiceDefenderEngineeringStation', 'Service Defender Engineering Station', 'an optional tech label', 'an optional description')
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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceDefenderEngineeringStation
include('azure/Item/Other/ServiceDefenderEngineeringStation')

' renders the element
ServiceDefenderEngineeringStation('ServiceDefenderEngineeringStation', 'Service Defender Engineering Station', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceDefenderEngineeringStationCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceDefenderEngineeringStationCard
include('azure/Item/Other/ServiceDefenderEngineeringStation')

' renders the element
ServiceDefenderEngineeringStationCard('ServiceDefenderEngineeringStationCard', 'Service Defender Engineering Station Card', 'an optional description')
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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceDefenderEngineeringStationCard
include('azure/Item/Other/ServiceDefenderEngineeringStation')

' renders the element
ServiceDefenderEngineeringStationCard('ServiceDefenderEngineeringStationCard', 'Service Defender Engineering Station Card', 'an optional description')
@enduml
```

## ServiceDefenderEngineeringStationGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceDefenderEngineeringStationGroup
include('azure/Item/Other/ServiceDefenderEngineeringStation')

' renders the element
ServiceDefenderEngineeringStationGroup('ServiceDefenderEngineeringStationGroup', 'Service Defender Engineering Station Group', 'an optional tech label') {
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
include('azure/bootstrap')

' loads the Item which embeds the element ServiceDefenderEngineeringStationGroup
include('azure/Item/Other/ServiceDefenderEngineeringStation')

' renders the element
ServiceDefenderEngineeringStationGroup('ServiceDefenderEngineeringStationGroup', 'Service Defender Engineering Station Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

