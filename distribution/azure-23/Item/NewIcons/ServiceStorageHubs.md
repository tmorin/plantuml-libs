# ServiceStorageHubs


```text
azure-23/Item/NewIcons/ServiceStorageHubs
```

```text
include('azure-23/Item/NewIcons/ServiceStorageHubs')
```



| Illustration | ServiceStorageHubs | ServiceStorageHubsCard | ServiceStorageHubsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-23/Item/NewIcons/ServiceStorageHubs.png) | ![illustration for ServiceStorageHubs](../../../azure-23/Item/NewIcons/ServiceStorageHubs.Local.png) | ![illustration for ServiceStorageHubsCard](../../../azure-23/Item/NewIcons/ServiceStorageHubsCard.Local.png) | ![illustration for ServiceStorageHubsGroup](../../../azure-23/Item/NewIcons/ServiceStorageHubsGroup.Local.png) |



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
include('azure-23/bootstrap')

' loads the Item which embeds the element ServiceStorageHubs
include('azure-23/Item/NewIcons/ServiceStorageHubs')

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
include('azure-23/bootstrap')

' loads the Item which embeds the element ServiceStorageHubs
include('azure-23/Item/NewIcons/ServiceStorageHubs')

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
include('azure-23/bootstrap')

' loads the Item which embeds the element ServiceStorageHubsCard
include('azure-23/Item/NewIcons/ServiceStorageHubs')

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
include('azure-23/bootstrap')

' loads the Item which embeds the element ServiceStorageHubsCard
include('azure-23/Item/NewIcons/ServiceStorageHubs')

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
include('azure-23/bootstrap')

' loads the Item which embeds the element ServiceStorageHubsGroup
include('azure-23/Item/NewIcons/ServiceStorageHubs')

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
include('azure-23/bootstrap')

' loads the Item which embeds the element ServiceStorageHubsGroup
include('azure-23/Item/NewIcons/ServiceStorageHubs')

' renders the element
ServiceStorageHubsGroup('ServiceStorageHubsGroup', 'Service Storage Hubs Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

