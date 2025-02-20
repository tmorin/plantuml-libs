# ServiceComputeFleet


```text
azure-20/Item/Compute/ServiceComputeFleet
```

```text
include('azure-20/Item/Compute/ServiceComputeFleet')
```



| Illustration | ServiceComputeFleet | ServiceComputeFleetCard | ServiceComputeFleetGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-20/Item/Compute/ServiceComputeFleet.png) | ![illustration for ServiceComputeFleet](../../../azure-20/Item/Compute/ServiceComputeFleet.Local.png) | ![illustration for ServiceComputeFleetCard](../../../azure-20/Item/Compute/ServiceComputeFleetCard.Local.png) | ![illustration for ServiceComputeFleetGroup](../../../azure-20/Item/Compute/ServiceComputeFleetGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceComputeFleetXs>`
- `<$ServiceComputeFleetSm>`
- `<$ServiceComputeFleetMd>`
- `<$ServiceComputeFleetLg>`





## ServiceComputeFleet

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceComputeFleet
include('azure-20/Item/Compute/ServiceComputeFleet')

' renders the element
ServiceComputeFleet('ServiceComputeFleet', 'Service Compute Fleet', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceComputeFleet
include('azure-20/Item/Compute/ServiceComputeFleet')

' renders the element
ServiceComputeFleet('ServiceComputeFleet', 'Service Compute Fleet', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceComputeFleetCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceComputeFleetCard
include('azure-20/Item/Compute/ServiceComputeFleet')

' renders the element
ServiceComputeFleetCard('ServiceComputeFleetCard', 'Service Compute Fleet Card', 'an optional description')
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

' loads the Item which embeds the element ServiceComputeFleetCard
include('azure-20/Item/Compute/ServiceComputeFleet')

' renders the element
ServiceComputeFleetCard('ServiceComputeFleetCard', 'Service Compute Fleet Card', 'an optional description')
@enduml
```

## ServiceComputeFleetGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceComputeFleetGroup
include('azure-20/Item/Compute/ServiceComputeFleet')

' renders the element
ServiceComputeFleetGroup('ServiceComputeFleetGroup', 'Service Compute Fleet Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceComputeFleetGroup
include('azure-20/Item/Compute/ServiceComputeFleet')

' renders the element
ServiceComputeFleetGroup('ServiceComputeFleetGroup', 'Service Compute Fleet Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

