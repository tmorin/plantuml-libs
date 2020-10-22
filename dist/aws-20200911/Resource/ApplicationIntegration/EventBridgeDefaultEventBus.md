# Event Bridge Default Event Bus

```text
aws-20200911/Resource/ApplicationIntegration/EventBridgeDefaultEventBus
```

```text
include('aws-20200911/Resource/ApplicationIntegration/EventBridgeDefaultEventBus')
```

|icon|card|element|group|
|---|---|---|---|
|![](EventBridgeDefaultEventBus.png)|![](EventBridgeDefaultEventBus.card.png)|![](EventBridgeDefaultEventBus.element.png)|![](EventBridgeDefaultEventBus.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the EventBridgeDefaultEventBus element
include('aws-20200911/Resource/ApplicationIntegration/EventBridgeDefaultEventBus')
EventBridgeDefaultEventBusCard('event_bridge_default_event_bus', 'Event Bridge Default Event Bus', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the EventBridgeDefaultEventBus element
include('aws-20200911/Resource/ApplicationIntegration/EventBridgeDefaultEventBus')
EventBridgeDefaultEventBusCard('event_bridge_default_event_bus', 'Event Bridge Default Event Bus', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the EventBridgeDefaultEventBus element
include('aws-20200911/Resource/ApplicationIntegration/EventBridgeDefaultEventBus')
EventBridgeDefaultEventBus('event_bridge_default_event_bus', 'Event Bridge Default Event Bus', 'an optional tech field')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the EventBridgeDefaultEventBus element
include('aws-20200911/Resource/ApplicationIntegration/EventBridgeDefaultEventBus')
EventBridgeDefaultEventBus('event_bridge_default_event_bus', 'Event Bridge Default Event Bus', 'an optional tech field')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the EventBridgeDefaultEventBus element
include('aws-20200911/Resource/ApplicationIntegration/EventBridgeDefaultEventBus')
EventBridgeDefaultEventBusGroup('event_bridge_default_event_bus', 'Event Bridge Default Event Bus', 'an optional tech field'){
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the EventBridgeDefaultEventBus element
include('aws-20200911/Resource/ApplicationIntegration/EventBridgeDefaultEventBus')
EventBridgeDefaultEventBusGroup('event_bridge_default_event_bus', 'Event Bridge Default Event Bus', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

