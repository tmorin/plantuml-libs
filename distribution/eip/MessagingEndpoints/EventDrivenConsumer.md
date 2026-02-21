# EventDrivenConsumer


```text
eip/MessagingEndpoints/EventDrivenConsumer
```

```text
include('eip/MessagingEndpoints/EventDrivenConsumer')
```



| Illustration | EventDrivenConsumer | EventDrivenConsumerGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip/MessagingEndpoints/EventDrivenConsumer.png) | ![illustration for EventDrivenConsumer](../../eip/MessagingEndpoints/EventDrivenConsumer.Local.png) | ![illustration for EventDrivenConsumerGroup](../../eip/MessagingEndpoints/EventDrivenConsumerGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$EventDrivenConsumerXs>`
- `<$EventDrivenConsumerSm>`
- `<$EventDrivenConsumerMd>`
- `<$EventDrivenConsumerLg>`





## EventDrivenConsumer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element EventDrivenConsumer
include('eip/MessagingEndpoints/EventDrivenConsumer')

' renders the element
EventDrivenConsumer('EventDrivenConsumer', 'Event Driven Consumer', 'an optional tech label', 'an optional description')
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
include('eip/bootstrap')

' loads the Item which embeds the element EventDrivenConsumer
include('eip/MessagingEndpoints/EventDrivenConsumer')

' renders the element
EventDrivenConsumer('EventDrivenConsumer', 'Event Driven Consumer', 'an optional tech label', 'an optional description')
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
include('eip/bootstrap')

' loads the Item which embeds the element EventDrivenConsumerGroup
include('eip/MessagingEndpoints/EventDrivenConsumer')

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
include('eip/bootstrap')

' loads the Item which embeds the element EventDrivenConsumerGroup
include('eip/MessagingEndpoints/EventDrivenConsumer')

' renders the element
EventDrivenConsumerGroup('EventDrivenConsumerGroup', 'Event Driven Consumer Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

