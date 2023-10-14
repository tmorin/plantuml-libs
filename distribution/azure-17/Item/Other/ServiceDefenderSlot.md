# ServiceDefenderSlot


```text
azure-17/Item/Other/ServiceDefenderSlot
```

```text
include('azure-17/Item/Other/ServiceDefenderSlot')
```



| Illustration | ServiceDefenderSlot | ServiceDefenderSlotCard | ServiceDefenderSlotGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-17/Item/Other/ServiceDefenderSlot.png) | ![illustration for ServiceDefenderSlot](../../../azure-17/Item/Other/ServiceDefenderSlot.Local.png) | ![illustration for ServiceDefenderSlotCard](../../../azure-17/Item/Other/ServiceDefenderSlotCard.Local.png) | ![illustration for ServiceDefenderSlotGroup](../../../azure-17/Item/Other/ServiceDefenderSlotGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceDefenderSlotXs>`
- `<$ServiceDefenderSlotSm>`
- `<$ServiceDefenderSlotMd>`
- `<$ServiceDefenderSlotLg>`





## ServiceDefenderSlot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceDefenderSlot
include('azure-17/Item/Other/ServiceDefenderSlot')

' renders the element
ServiceDefenderSlot('ServiceDefenderSlot', 'Service Defender Slot', 'an optional tech label', 'an optional description')
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
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceDefenderSlot
include('azure-17/Item/Other/ServiceDefenderSlot')

' renders the element
ServiceDefenderSlot('ServiceDefenderSlot', 'Service Defender Slot', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceDefenderSlotCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceDefenderSlotCard
include('azure-17/Item/Other/ServiceDefenderSlot')

' renders the element
ServiceDefenderSlotCard('ServiceDefenderSlotCard', 'Service Defender Slot Card', 'an optional description')
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
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceDefenderSlotCard
include('azure-17/Item/Other/ServiceDefenderSlot')

' renders the element
ServiceDefenderSlotCard('ServiceDefenderSlotCard', 'Service Defender Slot Card', 'an optional description')
@enduml
```

## ServiceDefenderSlotGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceDefenderSlotGroup
include('azure-17/Item/Other/ServiceDefenderSlot')

' renders the element
ServiceDefenderSlotGroup('ServiceDefenderSlotGroup', 'Service Defender Slot Group', 'an optional tech label') {
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
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceDefenderSlotGroup
include('azure-17/Item/Other/ServiceDefenderSlot')

' renders the element
ServiceDefenderSlotGroup('ServiceDefenderSlotGroup', 'Service Defender Slot Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

