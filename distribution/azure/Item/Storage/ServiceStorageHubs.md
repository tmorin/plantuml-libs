# ServiceStorageHubs


```text
azure/Item/Storage/ServiceStorageHubs
```

```text
include('azure/Item/Storage/ServiceStorageHubs')
```



| Illustration | ServiceStorageHubs | ServiceStorageHubsCard | ServiceStorageHubsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/Storage/ServiceStorageHubs.png) | ![illustration for ServiceStorageHubs](../../../azure/Item/Storage/ServiceStorageHubs.Local.png) | ![illustration for ServiceStorageHubsCard](../../../azure/Item/Storage/ServiceStorageHubsCard.Local.png) | ![illustration for ServiceStorageHubsGroup](../../../azure/Item/Storage/ServiceStorageHubsGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceStorageHubsXs>`
- `<$ServiceStorageHubsSm>`
- `<$ServiceStorageHubsMd>`
- `<$ServiceStorageHubsLg>`





## ServiceStorageHubs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceStorageHubs
include('azure/Item/Storage/ServiceStorageHubs')

' renders the element
ServiceStorageHubs('ServiceStorageHubs', 'Service Storage Hubs', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceStorageHubs
include('azure/Item/Storage/ServiceStorageHubs')

' renders the element
ServiceStorageHubs('ServiceStorageHubs', 'Service Storage Hubs', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceStorageHubsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceStorageHubsCard
include('azure/Item/Storage/ServiceStorageHubs')

' renders the element
ServiceStorageHubsCard('ServiceStorageHubsCard', 'Service Storage Hubs Card', 'an optional description')
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

' loads the Item which embeds the element ServiceStorageHubsCard
include('azure/Item/Storage/ServiceStorageHubs')

' renders the element
ServiceStorageHubsCard('ServiceStorageHubsCard', 'Service Storage Hubs Card', 'an optional description')
@enduml
```

## ServiceStorageHubsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceStorageHubsGroup
include('azure/Item/Storage/ServiceStorageHubs')

' renders the element
ServiceStorageHubsGroup('ServiceStorageHubsGroup', 'Service Storage Hubs Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceStorageHubsGroup
include('azure/Item/Storage/ServiceStorageHubs')

' renders the element
ServiceStorageHubsGroup('ServiceStorageHubsGroup', 'Service Storage Hubs Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

