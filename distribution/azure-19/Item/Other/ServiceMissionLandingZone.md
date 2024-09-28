# ServiceMissionLandingZone


```text
azure-19/Item/Other/ServiceMissionLandingZone
```

```text
include('azure-19/Item/Other/ServiceMissionLandingZone')
```



| Illustration | ServiceMissionLandingZone | ServiceMissionLandingZoneCard | ServiceMissionLandingZoneGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-19/Item/Other/ServiceMissionLandingZone.png) | ![illustration for ServiceMissionLandingZone](../../../azure-19/Item/Other/ServiceMissionLandingZone.Local.png) | ![illustration for ServiceMissionLandingZoneCard](../../../azure-19/Item/Other/ServiceMissionLandingZoneCard.Local.png) | ![illustration for ServiceMissionLandingZoneGroup](../../../azure-19/Item/Other/ServiceMissionLandingZoneGroup.Local.png) |



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
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceMissionLandingZone
include('azure-19/Item/Other/ServiceMissionLandingZone')

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
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceMissionLandingZone
include('azure-19/Item/Other/ServiceMissionLandingZone')

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
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceMissionLandingZoneCard
include('azure-19/Item/Other/ServiceMissionLandingZone')

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
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceMissionLandingZoneCard
include('azure-19/Item/Other/ServiceMissionLandingZone')

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
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceMissionLandingZoneGroup
include('azure-19/Item/Other/ServiceMissionLandingZone')

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
include('azure-19/bootstrap')

' loads the Item which embeds the element ServiceMissionLandingZoneGroup
include('azure-19/Item/Other/ServiceMissionLandingZone')

' renders the element
ServiceMissionLandingZoneGroup('ServiceMissionLandingZoneGroup', 'Service Mission Landing Zone Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

