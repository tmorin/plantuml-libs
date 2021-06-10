# ServiceResourceMover


```text
azure-4/Item/Other/ServiceResourceMover
```

```text
include('azure-4/Item/Other/ServiceResourceMover')
```



| Illustration | ServiceResourceMover | ServiceResourceMoverCard | ServiceResourceMoverGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/Other/ServiceResourceMover.png) | ![illustration for ServiceResourceMover](../../../azure-4/Item/Other/ServiceResourceMover.Local.png) | ![illustration for ServiceResourceMoverCard](../../../azure-4/Item/Other/ServiceResourceMoverCard.Local.png) | ![illustration for ServiceResourceMoverGroup](../../../azure-4/Item/Other/ServiceResourceMoverGroup.Local.png) |




## ServiceResourceMover

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceResourceMover
include('azure-4/Item/Other/ServiceResourceMover')

' renders the element
ServiceResourceMover('ServiceResourceMover', 'Service Resource Mover', 'an optional tech label')
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
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceResourceMover
include('azure-4/Item/Other/ServiceResourceMover')

' renders the element
ServiceResourceMover('ServiceResourceMover', 'Service Resource Mover', 'an optional tech label')
@enduml
```

## ServiceResourceMoverCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceResourceMoverCard
include('azure-4/Item/Other/ServiceResourceMover')

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
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceResourceMoverCard
include('azure-4/Item/Other/ServiceResourceMover')

' renders the element
ServiceResourceMoverCard('ServiceResourceMoverCard', 'Service Resource Mover Card', 'an optional description')
@enduml
```

## ServiceResourceMoverGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceResourceMoverGroup
include('azure-4/Item/Other/ServiceResourceMover')

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
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceResourceMoverGroup
include('azure-4/Item/Other/ServiceResourceMover')

' renders the element
ServiceResourceMoverGroup('ServiceResourceMoverGroup', 'Service Resource Mover Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

