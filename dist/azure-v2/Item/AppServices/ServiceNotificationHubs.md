# Service Notification Hubs

```text
azure-v2/Item/AppServices/ServiceNotificationHubs
```

```text
include('azure-v2/Item/AppServices/ServiceNotificationHubs')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceNotificationHubs.png)|![](ServiceNotificationHubs.card.png)|![](ServiceNotificationHubs.element.png)|![](ServiceNotificationHubs.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceNotificationHubs element
include('azure-v2/Item/AppServices/ServiceNotificationHubs')
ServiceNotificationHubsCard('service_notification_hubs', 'Service Notification Hubs', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceNotificationHubs element
include('azure-v2/Item/AppServices/ServiceNotificationHubs')
ServiceNotificationHubsCard('service_notification_hubs', 'Service Notification Hubs', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```


## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceNotificationHubs element
include('azure-v2/Item/AppServices/ServiceNotificationHubs')
ServiceNotificationHubs('service_notification_hubs', 'Service Notification Hubs', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceNotificationHubs element
include('azure-v2/Item/AppServices/ServiceNotificationHubs')
ServiceNotificationHubs('service_notification_hubs', 'Service Notification Hubs', 'an optional tech field')
@enduml
```


## group
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceNotificationHubs element
include('azure-v2/Item/AppServices/ServiceNotificationHubs')
ServiceNotificationHubsGroup('service_notification_hubs', 'Service Notification Hubs', 'an optional tech field'){
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
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceNotificationHubs element
include('azure-v2/Item/AppServices/ServiceNotificationHubs')
ServiceNotificationHubsGroup('service_notification_hubs', 'Service Notification Hubs', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

