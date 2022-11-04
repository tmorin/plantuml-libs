# ServiceWebSlots


```text
azure-6/Item/General/ServiceWebSlots
```

```text
include('azure-6/Item/General/ServiceWebSlots')
```



| Illustration | ServiceWebSlots | ServiceWebSlotsCard | ServiceWebSlotsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-6/Item/General/ServiceWebSlots.png) | ![illustration for ServiceWebSlots](../../../azure-6/Item/General/ServiceWebSlots.Local.png) | ![illustration for ServiceWebSlotsCard](../../../azure-6/Item/General/ServiceWebSlotsCard.Local.png) | ![illustration for ServiceWebSlotsGroup](../../../azure-6/Item/General/ServiceWebSlotsGroup.Local.png) |




## ServiceWebSlots

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceWebSlots
include('azure-6/Item/General/ServiceWebSlots')

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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceWebSlots
include('azure-6/Item/General/ServiceWebSlots')

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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceWebSlotsCard
include('azure-6/Item/General/ServiceWebSlots')

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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceWebSlotsCard
include('azure-6/Item/General/ServiceWebSlots')

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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceWebSlotsGroup
include('azure-6/Item/General/ServiceWebSlots')

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
include('azure-6/bootstrap')

' loads the Item which embeds the element ServiceWebSlotsGroup
include('azure-6/Item/General/ServiceWebSlots')

' renders the element
ServiceWebSlotsGroup('ServiceWebSlotsGroup', 'Service Web Slots Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

