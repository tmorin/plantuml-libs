# IntegrationEvent


```text
eventstorming/Element/IntegrationEvent
```

```text
include('eventstorming/Element/IntegrationEvent')
```



| IntegrationEvent |
| :---: |
| ![illustration for IntegrationEvent](../../eventstorming/Element/IntegrationEvent.Local.png) |




## IntegrationEvent

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eventstorming/bootstrap')

' loads the Item which embeds the element IntegrationEvent
include('eventstorming/Element/IntegrationEvent')

IntegrationEvent('IntegrationEvent') [
Integration Event
--
An integration event notifies to other systems something happened.
]
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eventstorming/bootstrap')

' loads the Item which embeds the element IntegrationEvent
include('eventstorming/Element/IntegrationEvent')

IntegrationEvent('IntegrationEvent') [
Integration Event
--
An integration event notifies to other systems something happened.
]
@enduml
```

