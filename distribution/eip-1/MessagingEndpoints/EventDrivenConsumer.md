# EventDrivenConsumer


```text
eip-1/MessagingEndpoints/EventDrivenConsumer
```

```text
include('eip-1/MessagingEndpoints/EventDrivenConsumer')
```



| Illustration | EventDrivenConsumer | EventDrivenConsumerGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip-1/MessagingEndpoints/EventDrivenConsumer.png) | ![illustration for EventDrivenConsumer](../../eip-1/MessagingEndpoints/EventDrivenConsumer.Local.png) | ![illustration for EventDrivenConsumerGroup](../../eip-1/MessagingEndpoints/EventDrivenConsumerGroup.Local.png) |




## EventDrivenConsumer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element EventDrivenConsumer
include('eip-1/MessagingEndpoints/EventDrivenConsumer')

' renders the element
EventDrivenConsumer('EventDrivenConsumer', 'Event Driven Consumer', 'an optional tech label')
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
include('eip-1/bootstrap')

' loads the Item which embeds the element EventDrivenConsumer
include('eip-1/MessagingEndpoints/EventDrivenConsumer')

' renders the element
EventDrivenConsumer('EventDrivenConsumer', 'Event Driven Consumer', 'an optional tech label')
@enduml
```

## EventDrivenConsumerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element EventDrivenConsumerGroup
include('eip-1/MessagingEndpoints/EventDrivenConsumer')

' renders the element
EventDrivenConsumerGroup('EventDrivenConsumerGroup', 'Event Driven Consumer Group', 'an optional tech label') {
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
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element EventDrivenConsumerGroup
include('eip-1/MessagingEndpoints/EventDrivenConsumer')

' renders the element
EventDrivenConsumerGroup('EventDrivenConsumerGroup', 'Event Driven Consumer Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

