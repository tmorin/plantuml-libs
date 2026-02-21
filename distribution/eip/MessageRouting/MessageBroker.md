# MessageBroker


```text
eip/MessageRouting/MessageBroker
```

```text
include('eip/MessageRouting/MessageBroker')
```



| Illustration | MessageBroker | MessageBrokerGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip/MessageRouting/MessageBroker.png) | ![illustration for MessageBroker](../../eip/MessageRouting/MessageBroker.Local.png) | ![illustration for MessageBrokerGroup](../../eip/MessageRouting/MessageBrokerGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MessageBrokerXs>`
- `<$MessageBrokerSm>`
- `<$MessageBrokerMd>`
- `<$MessageBrokerLg>`





## MessageBroker

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element MessageBroker
include('eip/MessageRouting/MessageBroker')

' renders the element
MessageBroker('MessageBroker', 'Message Broker', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MessageBroker
include('eip/MessageRouting/MessageBroker')

' renders the element
MessageBroker('MessageBroker', 'Message Broker', 'an optional tech label', 'an optional description')
@enduml
```

## MessageBrokerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element MessageBrokerGroup
include('eip/MessageRouting/MessageBroker')

' renders the element
MessageBrokerGroup('MessageBrokerGroup', 'Message Broker Group', 'an optional tech label') {
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

' loads the Item which embeds the element MessageBrokerGroup
include('eip/MessageRouting/MessageBroker')

' renders the element
MessageBrokerGroup('MessageBrokerGroup', 'Message Broker Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

