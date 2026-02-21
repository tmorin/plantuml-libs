# PublishSubscribeChannel


```text
eip/MessagingChannels/PublishSubscribeChannel
```

```text
include('eip/MessagingChannels/PublishSubscribeChannel')
```



| Illustration | PublishSubscribeChannel | PublishSubscribeChannelGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip/MessagingChannels/PublishSubscribeChannel.png) | ![illustration for PublishSubscribeChannel](../../eip/MessagingChannels/PublishSubscribeChannel.Local.png) | ![illustration for PublishSubscribeChannelGroup](../../eip/MessagingChannels/PublishSubscribeChannelGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PublishSubscribeChannelXs>`
- `<$PublishSubscribeChannelSm>`
- `<$PublishSubscribeChannelMd>`
- `<$PublishSubscribeChannelLg>`





## PublishSubscribeChannel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element PublishSubscribeChannel
include('eip/MessagingChannels/PublishSubscribeChannel')

' renders the element
PublishSubscribeChannel('PublishSubscribeChannel', 'Publish Subscribe Channel', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PublishSubscribeChannel
include('eip/MessagingChannels/PublishSubscribeChannel')

' renders the element
PublishSubscribeChannel('PublishSubscribeChannel', 'Publish Subscribe Channel', 'an optional tech label', 'an optional description')
@enduml
```

## PublishSubscribeChannelGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element PublishSubscribeChannelGroup
include('eip/MessagingChannels/PublishSubscribeChannel')

' renders the element
PublishSubscribeChannelGroup('PublishSubscribeChannelGroup', 'Publish Subscribe Channel Group', 'an optional tech label') {
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

' loads the Item which embeds the element PublishSubscribeChannelGroup
include('eip/MessagingChannels/PublishSubscribeChannel')

' renders the element
PublishSubscribeChannelGroup('PublishSubscribeChannelGroup', 'Publish Subscribe Channel Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

