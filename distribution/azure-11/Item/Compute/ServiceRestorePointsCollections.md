# ServiceRestorePointsCollections


```text
azure-11/Item/Compute/ServiceRestorePointsCollections
```

```text
include('azure-11/Item/Compute/ServiceRestorePointsCollections')
```



| Illustration | ServiceRestorePointsCollections | ServiceRestorePointsCollectionsCard | ServiceRestorePointsCollectionsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-11/Item/Compute/ServiceRestorePointsCollections.png) | ![illustration for ServiceRestorePointsCollections](../../../azure-11/Item/Compute/ServiceRestorePointsCollections.Local.png) | ![illustration for ServiceRestorePointsCollectionsCard](../../../azure-11/Item/Compute/ServiceRestorePointsCollectionsCard.Local.png) | ![illustration for ServiceRestorePointsCollectionsGroup](../../../azure-11/Item/Compute/ServiceRestorePointsCollectionsGroup.Local.png) |




## ServiceRestorePointsCollections

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceRestorePointsCollections
include('azure-11/Item/Compute/ServiceRestorePointsCollections')

' renders the element
ServiceRestorePointsCollections('ServiceRestorePointsCollections', 'Service Restore Points Collections', 'an optional tech label', 'an optional description')
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
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceRestorePointsCollections
include('azure-11/Item/Compute/ServiceRestorePointsCollections')

' renders the element
ServiceRestorePointsCollections('ServiceRestorePointsCollections', 'Service Restore Points Collections', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceRestorePointsCollectionsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceRestorePointsCollectionsCard
include('azure-11/Item/Compute/ServiceRestorePointsCollections')

' renders the element
ServiceRestorePointsCollectionsCard('ServiceRestorePointsCollectionsCard', 'Service Restore Points Collections Card', 'an optional description')
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
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceRestorePointsCollectionsCard
include('azure-11/Item/Compute/ServiceRestorePointsCollections')

' renders the element
ServiceRestorePointsCollectionsCard('ServiceRestorePointsCollectionsCard', 'Service Restore Points Collections Card', 'an optional description')
@enduml
```

## ServiceRestorePointsCollectionsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceRestorePointsCollectionsGroup
include('azure-11/Item/Compute/ServiceRestorePointsCollections')

' renders the element
ServiceRestorePointsCollectionsGroup('ServiceRestorePointsCollectionsGroup', 'Service Restore Points Collections Group', 'an optional tech label') {
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
include('azure-11/bootstrap')

' loads the Item which embeds the element ServiceRestorePointsCollectionsGroup
include('azure-11/Item/Compute/ServiceRestorePointsCollections')

' renders the element
ServiceRestorePointsCollectionsGroup('ServiceRestorePointsCollectionsGroup', 'Service Restore Points Collections Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

