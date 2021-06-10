# ServiceDataBoxEdge


```text
azure-4/Item/Migrate/ServiceDataBoxEdge
```

```text
include('azure-4/Item/Migrate/ServiceDataBoxEdge')
```



| Illustration | ServiceDataBoxEdge | ServiceDataBoxEdgeCard | ServiceDataBoxEdgeGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-4/Item/Migrate/ServiceDataBoxEdge.png) | ![illustration for ServiceDataBoxEdge](../../../azure-4/Item/Migrate/ServiceDataBoxEdge.Local.png) | ![illustration for ServiceDataBoxEdgeCard](../../../azure-4/Item/Migrate/ServiceDataBoxEdgeCard.Local.png) | ![illustration for ServiceDataBoxEdgeGroup](../../../azure-4/Item/Migrate/ServiceDataBoxEdgeGroup.Local.png) |




## ServiceDataBoxEdge

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceDataBoxEdge
include('azure-4/Item/Migrate/ServiceDataBoxEdge')

' renders the element
ServiceDataBoxEdge('ServiceDataBoxEdge', 'Service Data Box Edge', 'an optional tech label')
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

' loads the Item which embeds the element ServiceDataBoxEdge
include('azure-4/Item/Migrate/ServiceDataBoxEdge')

' renders the element
ServiceDataBoxEdge('ServiceDataBoxEdge', 'Service Data Box Edge', 'an optional tech label')
@enduml
```

## ServiceDataBoxEdgeCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceDataBoxEdgeCard
include('azure-4/Item/Migrate/ServiceDataBoxEdge')

' renders the element
ServiceDataBoxEdgeCard('ServiceDataBoxEdgeCard', 'Service Data Box Edge Card', 'an optional description')
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

' loads the Item which embeds the element ServiceDataBoxEdgeCard
include('azure-4/Item/Migrate/ServiceDataBoxEdge')

' renders the element
ServiceDataBoxEdgeCard('ServiceDataBoxEdgeCard', 'Service Data Box Edge Card', 'an optional description')
@enduml
```

## ServiceDataBoxEdgeGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-4/bootstrap')

' loads the Item which embeds the element ServiceDataBoxEdgeGroup
include('azure-4/Item/Migrate/ServiceDataBoxEdge')

' renders the element
ServiceDataBoxEdgeGroup('ServiceDataBoxEdgeGroup', 'Service Data Box Edge Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceDataBoxEdgeGroup
include('azure-4/Item/Migrate/ServiceDataBoxEdge')

' renders the element
ServiceDataBoxEdgeGroup('ServiceDataBoxEdgeGroup', 'Service Data Box Edge Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

