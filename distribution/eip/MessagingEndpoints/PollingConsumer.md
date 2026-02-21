# PollingConsumer


```text
eip/MessagingEndpoints/PollingConsumer
```

```text
include('eip/MessagingEndpoints/PollingConsumer')
```



| Illustration | PollingConsumer | PollingConsumerGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip/MessagingEndpoints/PollingConsumer.png) | ![illustration for PollingConsumer](../../eip/MessagingEndpoints/PollingConsumer.Local.png) | ![illustration for PollingConsumerGroup](../../eip/MessagingEndpoints/PollingConsumerGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PollingConsumerXs>`
- `<$PollingConsumerSm>`
- `<$PollingConsumerMd>`
- `<$PollingConsumerLg>`





## PollingConsumer

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element PollingConsumer
include('eip/MessagingEndpoints/PollingConsumer')

' renders the element
PollingConsumer('PollingConsumer', 'Polling Consumer', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PollingConsumer
include('eip/MessagingEndpoints/PollingConsumer')

' renders the element
PollingConsumer('PollingConsumer', 'Polling Consumer', 'an optional tech label', 'an optional description')
@enduml
```

## PollingConsumerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element PollingConsumerGroup
include('eip/MessagingEndpoints/PollingConsumer')

' renders the element
PollingConsumerGroup('PollingConsumerGroup', 'Polling Consumer Group', 'an optional tech label') {
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

' loads the Item which embeds the element PollingConsumerGroup
include('eip/MessagingEndpoints/PollingConsumer')

' renders the element
PollingConsumerGroup('PollingConsumerGroup', 'Polling Consumer Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

