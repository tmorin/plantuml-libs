# ServiceResourceMover


```text
azure-17/Item/Other/ServiceResourceMover
```

```text
include('azure-17/Item/Other/ServiceResourceMover')
```



| Illustration | ServiceResourceMover | ServiceResourceMoverCard | ServiceResourceMoverGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-17/Item/Other/ServiceResourceMover.png) | ![illustration for ServiceResourceMover](../../../azure-17/Item/Other/ServiceResourceMover.Local.png) | ![illustration for ServiceResourceMoverCard](../../../azure-17/Item/Other/ServiceResourceMoverCard.Local.png) | ![illustration for ServiceResourceMoverGroup](../../../azure-17/Item/Other/ServiceResourceMoverGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceResourceMoverXs>`
- `<$ServiceResourceMoverSm>`
- `<$ServiceResourceMoverMd>`
- `<$ServiceResourceMoverLg>`





## ServiceResourceMover

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceResourceMover
include('azure-17/Item/Other/ServiceResourceMover')

' renders the element
ServiceResourceMover('ServiceResourceMover', 'Service Resource Mover', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceResourceMover
include('azure-17/Item/Other/ServiceResourceMover')

' renders the element
ServiceResourceMover('ServiceResourceMover', 'Service Resource Mover', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceResourceMoverCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceResourceMoverCard
include('azure-17/Item/Other/ServiceResourceMover')

' renders the element
ServiceResourceMoverCard('ServiceResourceMoverCard', 'Service Resource Mover Card', 'an optional description')
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

' loads the Item which embeds the element ServiceResourceMoverCard
include('azure-17/Item/Other/ServiceResourceMover')

' renders the element
ServiceResourceMoverCard('ServiceResourceMoverCard', 'Service Resource Mover Card', 'an optional description')
@enduml
```

## ServiceResourceMoverGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-17/bootstrap')

' loads the Item which embeds the element ServiceResourceMoverGroup
include('azure-17/Item/Other/ServiceResourceMover')

' renders the element
ServiceResourceMoverGroup('ServiceResourceMoverGroup', 'Service Resource Mover Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceResourceMoverGroup
include('azure-17/Item/Other/ServiceResourceMover')

' renders the element
ServiceResourceMoverGroup('ServiceResourceMoverGroup', 'Service Resource Mover Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

