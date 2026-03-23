# ServiceNotificationHubs


```text
azure/Item/Iot/ServiceNotificationHubs
```

```text
include('azure/Item/Iot/ServiceNotificationHubs')
```



| Illustration | ServiceNotificationHubs | ServiceNotificationHubsCard | ServiceNotificationHubsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure/Item/Iot/ServiceNotificationHubs.png) | ![illustration for ServiceNotificationHubs](../../../azure/Item/Iot/ServiceNotificationHubs.Local.png) | ![illustration for ServiceNotificationHubsCard](../../../azure/Item/Iot/ServiceNotificationHubsCard.Local.png) | ![illustration for ServiceNotificationHubsGroup](../../../azure/Item/Iot/ServiceNotificationHubsGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceNotificationHubsXs>`
- `<$ServiceNotificationHubsSm>`
- `<$ServiceNotificationHubsMd>`
- `<$ServiceNotificationHubsLg>`





## ServiceNotificationHubs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceNotificationHubs
include('azure/Item/Iot/ServiceNotificationHubs')

' renders the element
ServiceNotificationHubs('ServiceNotificationHubs', 'Service Notification Hubs', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ServiceNotificationHubs
include('azure/Item/Iot/ServiceNotificationHubs')

' renders the element
ServiceNotificationHubs('ServiceNotificationHubs', 'Service Notification Hubs', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceNotificationHubsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceNotificationHubsCard
include('azure/Item/Iot/ServiceNotificationHubs')

' renders the element
ServiceNotificationHubsCard('ServiceNotificationHubsCard', 'Service Notification Hubs Card', 'an optional description')
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

' loads the Item which embeds the element ServiceNotificationHubsCard
include('azure/Item/Iot/ServiceNotificationHubs')

' renders the element
ServiceNotificationHubsCard('ServiceNotificationHubsCard', 'Service Notification Hubs Card', 'an optional description')
@enduml
```

## ServiceNotificationHubsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure/bootstrap')

' loads the Item which embeds the element ServiceNotificationHubsGroup
include('azure/Item/Iot/ServiceNotificationHubs')

' renders the element
ServiceNotificationHubsGroup('ServiceNotificationHubsGroup', 'Service Notification Hubs Group', 'an optional tech label') {
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

' loads the Item which embeds the element ServiceNotificationHubsGroup
include('azure/Item/Iot/ServiceNotificationHubs')

' renders the element
ServiceNotificationHubsGroup('ServiceNotificationHubsGroup', 'Service Notification Hubs Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

