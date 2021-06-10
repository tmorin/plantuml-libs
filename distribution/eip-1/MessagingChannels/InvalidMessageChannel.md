# InvalidMessageChannel


```text
eip-1/MessagingChannels/InvalidMessageChannel
```

```text
include('eip-1/MessagingChannels/InvalidMessageChannel')
```



| Illustration | InvalidMessageChannel | InvalidMessageChannelGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip-1/MessagingChannels/InvalidMessageChannel.png) | ![illustration for InvalidMessageChannel](../../eip-1/MessagingChannels/InvalidMessageChannel.Local.png) | ![illustration for InvalidMessageChannelGroup](../../eip-1/MessagingChannels/InvalidMessageChannelGroup.Local.png) |




## InvalidMessageChannel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element InvalidMessageChannel
include('eip-1/MessagingChannels/InvalidMessageChannel')

' renders the element
InvalidMessageChannel('InvalidMessageChannel', 'Invalid Message Channel', 'an optional tech label')
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

' loads the Item which embeds the element InvalidMessageChannel
include('eip-1/MessagingChannels/InvalidMessageChannel')

' renders the element
InvalidMessageChannel('InvalidMessageChannel', 'Invalid Message Channel', 'an optional tech label')
@enduml
```

## InvalidMessageChannelGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element InvalidMessageChannelGroup
include('eip-1/MessagingChannels/InvalidMessageChannel')

' renders the element
InvalidMessageChannelGroup('InvalidMessageChannelGroup', 'Invalid Message Channel Group', 'an optional tech label') {
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

' loads the Item which embeds the element InvalidMessageChannelGroup
include('eip-1/MessagingChannels/InvalidMessageChannel')

' renders the element
InvalidMessageChannelGroup('InvalidMessageChannelGroup', 'Invalid Message Channel Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

