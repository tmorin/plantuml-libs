# DeadLetterChannel


```text
eip-1/MessagingChannels/DeadLetterChannel
```

```text
include('eip-1/MessagingChannels/DeadLetterChannel')
```



| Illustration | DeadLetterChannel | DeadLetterChannelGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip-1/MessagingChannels/DeadLetterChannel.png) | ![illustration for DeadLetterChannel](../../eip-1/MessagingChannels/DeadLetterChannel.Local.png) | ![illustration for DeadLetterChannelGroup](../../eip-1/MessagingChannels/DeadLetterChannelGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DeadLetterChannelXs>`
- `<$DeadLetterChannelSm>`
- `<$DeadLetterChannelMd>`
- `<$DeadLetterChannelLg>`





## DeadLetterChannel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element DeadLetterChannel
include('eip-1/MessagingChannels/DeadLetterChannel')

' renders the element
DeadLetterChannel('DeadLetterChannel', 'Dead Letter Channel', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DeadLetterChannel
include('eip-1/MessagingChannels/DeadLetterChannel')

' renders the element
DeadLetterChannel('DeadLetterChannel', 'Dead Letter Channel', 'an optional tech label', 'an optional description')
@enduml
```

## DeadLetterChannelGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element DeadLetterChannelGroup
include('eip-1/MessagingChannels/DeadLetterChannel')

' renders the element
DeadLetterChannelGroup('DeadLetterChannelGroup', 'Dead Letter Channel Group', 'an optional tech label') {
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

' loads the Item which embeds the element DeadLetterChannelGroup
include('eip-1/MessagingChannels/DeadLetterChannel')

' renders the element
DeadLetterChannelGroup('DeadLetterChannelGroup', 'Dead Letter Channel Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

