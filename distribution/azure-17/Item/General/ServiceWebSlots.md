# ServiceWebSlots


```text
azure-17/Item/General/ServiceWebSlots
```

```text
include('azure-17/Item/General/ServiceWebSlots')
```



| Illustration | ServiceWebSlots | ServiceWebSlotsCard | ServiceWebSlotsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-17/Item/General/ServiceWebSlots.png) | ![illustration for ServiceWebSlots](../../../azure-17/Item/General/ServiceWebSlots.Local.png) | ![illustration for ServiceWebSlotsCard](../../../azure-17/Item/General/ServiceWebSlotsCard.Local.png) | ![illustration for ServiceWebSlotsGroup](../../../azure-17/Item/General/ServiceWebSlotsGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceWebSlotsXs>`
- `<$ServiceWebSlotsSm>`
- `<$ServiceWebSlotsMd>`
- `<$ServiceWebSlotsLg>`





## ServiceWebSlots

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceWebSlots
include('azure-17/Item/General/ServiceWebSlots')

' renders the element
ServiceWebSlots('ServiceWebSlots', 'Service Web Slots', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceWebSlots
include('azure-17/Item/General/ServiceWebSlots')

' renders the element
ServiceWebSlots('ServiceWebSlots', 'Service Web Slots', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceWebSlotsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceWebSlotsCard
include('azure-17/Item/General/ServiceWebSlots')

' renders the element
ServiceWebSlotsCard('ServiceWebSlotsCard', 'Service Web Slots Card', 'an optional description')
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

' loads the Item which embeds the element ServiceWebSlotsCard
include('azure-17/Item/General/ServiceWebSlots')

' renders the element
ServiceWebSlotsCard('ServiceWebSlotsCard', 'Service Web Slots Card', 'an optional description')
@enduml
```

## ServiceWebSlotsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceWebSlotsGroup
include('azure-17/Item/General/ServiceWebSlots')

' renders the element
ServiceWebSlotsGroup('ServiceWebSlotsGroup', 'Service Web Slots Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceWebSlotsGroup
include('azure-17/Item/General/ServiceWebSlots')

' renders the element
ServiceWebSlotsGroup('ServiceWebSlotsGroup', 'Service Web Slots Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

