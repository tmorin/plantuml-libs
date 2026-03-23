# ServiceMissionLandingZone


```text
azure/Item/Other/ServiceMissionLandingZone
```

```text
include('azure/Item/Other/ServiceMissionLandingZone')
```



| Illustration | ServiceMissionLandingZone | ServiceMissionLandingZoneCard | ServiceMissionLandingZoneGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/Other/ServiceMissionLandingZone.png) | ![illustration for ServiceMissionLandingZone](../../../azure/Item/Other/ServiceMissionLandingZone.Local.png) | ![illustration for ServiceMissionLandingZoneCard](../../../azure/Item/Other/ServiceMissionLandingZoneCard.Local.png) | ![illustration for ServiceMissionLandingZoneGroup](../../../azure/Item/Other/ServiceMissionLandingZoneGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceMissionLandingZoneXs>`
- `<$ServiceMissionLandingZoneSm>`
- `<$ServiceMissionLandingZoneMd>`
- `<$ServiceMissionLandingZoneLg>`





## ServiceMissionLandingZone

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceMissionLandingZone
include('azure/Item/Other/ServiceMissionLandingZone')

' renders the element
ServiceMissionLandingZone('ServiceMissionLandingZone', 'Service Mission Landing Zone', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceMissionLandingZone
include('azure/Item/Other/ServiceMissionLandingZone')

' renders the element
ServiceMissionLandingZone('ServiceMissionLandingZone', 'Service Mission Landing Zone', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceMissionLandingZoneCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceMissionLandingZoneCard
include('azure/Item/Other/ServiceMissionLandingZone')

' renders the element
ServiceMissionLandingZoneCard('ServiceMissionLandingZoneCard', 'Service Mission Landing Zone Card', 'an optional description')
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

' loads the Item which embeds the element ServiceMissionLandingZoneCard
include('azure/Item/Other/ServiceMissionLandingZone')

' renders the element
ServiceMissionLandingZoneCard('ServiceMissionLandingZoneCard', 'Service Mission Landing Zone Card', 'an optional description')
@enduml
```

## ServiceMissionLandingZoneGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceMissionLandingZoneGroup
include('azure/Item/Other/ServiceMissionLandingZone')

' renders the element
ServiceMissionLandingZoneGroup('ServiceMissionLandingZoneGroup', 'Service Mission Landing Zone Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceMissionLandingZoneGroup
include('azure/Item/Other/ServiceMissionLandingZone')

' renders the element
ServiceMissionLandingZoneGroup('ServiceMissionLandingZoneGroup', 'Service Mission Landing Zone Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

