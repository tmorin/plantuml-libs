# ServiceReservedCapacity


```text
azure/Item/Other/ServiceReservedCapacity
```

```text
include('azure/Item/Other/ServiceReservedCapacity')
```



| Illustration | ServiceReservedCapacity | ServiceReservedCapacityCard | ServiceReservedCapacityGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/Other/ServiceReservedCapacity.png) | ![illustration for ServiceReservedCapacity](../../../azure/Item/Other/ServiceReservedCapacity.Local.png) | ![illustration for ServiceReservedCapacityCard](../../../azure/Item/Other/ServiceReservedCapacityCard.Local.png) | ![illustration for ServiceReservedCapacityGroup](../../../azure/Item/Other/ServiceReservedCapacityGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceReservedCapacityXs>`
- `<$ServiceReservedCapacitySm>`
- `<$ServiceReservedCapacityMd>`
- `<$ServiceReservedCapacityLg>`





## ServiceReservedCapacity

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceReservedCapacity
include('azure/Item/Other/ServiceReservedCapacity')

' renders the element
ServiceReservedCapacity('ServiceReservedCapacity', 'Service Reserved Capacity', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceReservedCapacity
include('azure/Item/Other/ServiceReservedCapacity')

' renders the element
ServiceReservedCapacity('ServiceReservedCapacity', 'Service Reserved Capacity', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceReservedCapacityCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceReservedCapacityCard
include('azure/Item/Other/ServiceReservedCapacity')

' renders the element
ServiceReservedCapacityCard('ServiceReservedCapacityCard', 'Service Reserved Capacity Card', 'an optional description')
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

' loads the Item which embeds the element ServiceReservedCapacityCard
include('azure/Item/Other/ServiceReservedCapacity')

' renders the element
ServiceReservedCapacityCard('ServiceReservedCapacityCard', 'Service Reserved Capacity Card', 'an optional description')
@enduml
```

## ServiceReservedCapacityGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceReservedCapacityGroup
include('azure/Item/Other/ServiceReservedCapacity')

' renders the element
ServiceReservedCapacityGroup('ServiceReservedCapacityGroup', 'Service Reserved Capacity Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceReservedCapacityGroup
include('azure/Item/Other/ServiceReservedCapacity')

' renders the element
ServiceReservedCapacityGroup('ServiceReservedCapacityGroup', 'Service Reserved Capacity Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

