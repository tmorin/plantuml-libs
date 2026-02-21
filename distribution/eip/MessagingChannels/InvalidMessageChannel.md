# InvalidMessageChannel


```text
eip/MessagingChannels/InvalidMessageChannel
```

```text
include('eip/MessagingChannels/InvalidMessageChannel')
```



| Illustration | InvalidMessageChannel | InvalidMessageChannelGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip/MessagingChannels/InvalidMessageChannel.png) | ![illustration for InvalidMessageChannel](../../eip/MessagingChannels/InvalidMessageChannel.Local.png) | ![illustration for InvalidMessageChannelGroup](../../eip/MessagingChannels/InvalidMessageChannelGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$InvalidMessageChannelXs>`
- `<$InvalidMessageChannelSm>`
- `<$InvalidMessageChannelMd>`
- `<$InvalidMessageChannelLg>`





## InvalidMessageChannel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element InvalidMessageChannel
include('eip/MessagingChannels/InvalidMessageChannel')

' renders the element
InvalidMessageChannel('InvalidMessageChannel', 'Invalid Message Channel', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element InvalidMessageChannel
include('eip/MessagingChannels/InvalidMessageChannel')

' renders the element
InvalidMessageChannel('InvalidMessageChannel', 'Invalid Message Channel', 'an optional tech label', 'an optional description')
@enduml
```

## InvalidMessageChannelGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element InvalidMessageChannelGroup
include('eip/MessagingChannels/InvalidMessageChannel')

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
include('eip/bootstrap')

' loads the Item which embeds the element InvalidMessageChannelGroup
include('eip/MessagingChannels/InvalidMessageChannel')

' renders the element
InvalidMessageChannelGroup('InvalidMessageChannelGroup', 'Invalid Message Channel Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

