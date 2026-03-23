# ServiceIoTEdge


```text
azure/Item/Iot/ServiceIoTEdge
```

```text
include('azure/Item/Iot/ServiceIoTEdge')
```



| Illustration | ServiceIoTEdge | ServiceIoTEdgeCard | ServiceIoTEdgeGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/Iot/ServiceIoTEdge.png) | ![illustration for ServiceIoTEdge](../../../azure/Item/Iot/ServiceIoTEdge.Local.png) | ![illustration for ServiceIoTEdgeCard](../../../azure/Item/Iot/ServiceIoTEdgeCard.Local.png) | ![illustration for ServiceIoTEdgeGroup](../../../azure/Item/Iot/ServiceIoTEdgeGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceIoTEdgeXs>`
- `<$ServiceIoTEdgeSm>`
- `<$ServiceIoTEdgeMd>`
- `<$ServiceIoTEdgeLg>`





## ServiceIoTEdge

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceIoTEdge
include('azure/Item/Iot/ServiceIoTEdge')

' renders the element
ServiceIoTEdge('ServiceIoTEdge', 'Service Io T Edge', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceIoTEdge
include('azure/Item/Iot/ServiceIoTEdge')

' renders the element
ServiceIoTEdge('ServiceIoTEdge', 'Service Io T Edge', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceIoTEdgeCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceIoTEdgeCard
include('azure/Item/Iot/ServiceIoTEdge')

' renders the element
ServiceIoTEdgeCard('ServiceIoTEdgeCard', 'Service Io T Edge Card', 'an optional description')
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

' loads the Item which embeds the element ServiceIoTEdgeCard
include('azure/Item/Iot/ServiceIoTEdge')

' renders the element
ServiceIoTEdgeCard('ServiceIoTEdgeCard', 'Service Io T Edge Card', 'an optional description')
@enduml
```

## ServiceIoTEdgeGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceIoTEdgeGroup
include('azure/Item/Iot/ServiceIoTEdge')

' renders the element
ServiceIoTEdgeGroup('ServiceIoTEdgeGroup', 'Service Io T Edge Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceIoTEdgeGroup
include('azure/Item/Iot/ServiceIoTEdge')

' renders the element
ServiceIoTEdgeGroup('ServiceIoTEdgeGroup', 'Service Io T Edge Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

