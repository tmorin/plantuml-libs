# MessageChannel


```text
eip-1/MessagingSystems/MessageChannel
```

```text
include('eip-1/MessagingSystems/MessageChannel')
```



| Illustration | MessageChannel | MessageChannelGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip-1/MessagingSystems/MessageChannel.png) | ![illustration for MessageChannel](../../eip-1/MessagingSystems/MessageChannel.Local.png) | ![illustration for MessageChannelGroup](../../eip-1/MessagingSystems/MessageChannelGroup.Local.png) |




## MessageChannel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element MessageChannel
include('eip-1/MessagingSystems/MessageChannel')

' renders the element
MessageChannel('MessageChannel', 'Message Channel', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element MessageChannel
include('eip-1/MessagingSystems/MessageChannel')

' renders the element
MessageChannel('MessageChannel', 'Message Channel', 'an optional tech label', 'an optional description')
@enduml
```

## MessageChannelGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element MessageChannelGroup
include('eip-1/MessagingSystems/MessageChannel')

' renders the element
MessageChannelGroup('MessageChannelGroup', 'Message Channel Group', 'an optional tech label') {
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

' loads the Item which embeds the element MessageChannelGroup
include('eip-1/MessagingSystems/MessageChannel')

' renders the element
MessageChannelGroup('MessageChannelGroup', 'Message Channel Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

