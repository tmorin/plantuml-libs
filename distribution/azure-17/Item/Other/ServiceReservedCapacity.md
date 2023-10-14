# ServiceReservedCapacity


```text
azure-17/Item/Other/ServiceReservedCapacity
```

```text
include('azure-17/Item/Other/ServiceReservedCapacity')
```



| Illustration | ServiceReservedCapacity | ServiceReservedCapacityCard | ServiceReservedCapacityGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-17/Item/Other/ServiceReservedCapacity.png) | ![illustration for ServiceReservedCapacity](../../../azure-17/Item/Other/ServiceReservedCapacity.Local.png) | ![illustration for ServiceReservedCapacityCard](../../../azure-17/Item/Other/ServiceReservedCapacityCard.Local.png) | ![illustration for ServiceReservedCapacityGroup](../../../azure-17/Item/Other/ServiceReservedCapacityGroup.Local.png) |



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
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceReservedCapacity
include('azure-17/Item/Other/ServiceReservedCapacity')

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
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceReservedCapacity
include('azure-17/Item/Other/ServiceReservedCapacity')

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
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceReservedCapacityCard
include('azure-17/Item/Other/ServiceReservedCapacity')

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
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceReservedCapacityCard
include('azure-17/Item/Other/ServiceReservedCapacity')

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
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceReservedCapacityGroup
include('azure-17/Item/Other/ServiceReservedCapacity')

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
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceReservedCapacityGroup
include('azure-17/Item/Other/ServiceReservedCapacity')

' renders the element
ServiceReservedCapacityGroup('ServiceReservedCapacityGroup', 'Service Reserved Capacity Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

