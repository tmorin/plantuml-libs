# MessageDispatcher


```text
eip/MessagingEndpoints/MessageDispatcher
```

```text
include('eip/MessagingEndpoints/MessageDispatcher')
```



| Illustration | MessageDispatcher | MessageDispatcherGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip/MessagingEndpoints/MessageDispatcher.png) | ![illustration for MessageDispatcher](../../eip/MessagingEndpoints/MessageDispatcher.Local.png) | ![illustration for MessageDispatcherGroup](../../eip/MessagingEndpoints/MessageDispatcherGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$MessageDispatcherXs>`
- `<$MessageDispatcherSm>`
- `<$MessageDispatcherMd>`
- `<$MessageDispatcherLg>`





## MessageDispatcher

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element MessageDispatcher
include('eip/MessagingEndpoints/MessageDispatcher')

' renders the element
MessageDispatcher('MessageDispatcher', 'Message Dispatcher', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MessageDispatcher
include('eip/MessagingEndpoints/MessageDispatcher')

' renders the element
MessageDispatcher('MessageDispatcher', 'Message Dispatcher', 'an optional tech label', 'an optional description')
@enduml
```

## MessageDispatcherGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element MessageDispatcherGroup
include('eip/MessagingEndpoints/MessageDispatcher')

' renders the element
MessageDispatcherGroup('MessageDispatcherGroup', 'Message Dispatcher Group', 'an optional tech label') {
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

' loads the Item which embeds the element MessageDispatcherGroup
include('eip/MessagingEndpoints/MessageDispatcher')

' renders the element
MessageDispatcherGroup('MessageDispatcherGroup', 'Message Dispatcher Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

