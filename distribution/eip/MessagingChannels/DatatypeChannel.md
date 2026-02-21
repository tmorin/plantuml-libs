# DatatypeChannel


```text
eip/MessagingChannels/DatatypeChannel
```

```text
include('eip/MessagingChannels/DatatypeChannel')
```



| Illustration | DatatypeChannel | DatatypeChannelGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip/MessagingChannels/DatatypeChannel.png) | ![illustration for DatatypeChannel](../../eip/MessagingChannels/DatatypeChannel.Local.png) | ![illustration for DatatypeChannelGroup](../../eip/MessagingChannels/DatatypeChannelGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DatatypeChannelXs>`
- `<$DatatypeChannelSm>`
- `<$DatatypeChannelMd>`
- `<$DatatypeChannelLg>`





## DatatypeChannel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element DatatypeChannel
include('eip/MessagingChannels/DatatypeChannel')

' renders the element
DatatypeChannel('DatatypeChannel', 'Datatype Channel', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element DatatypeChannel
include('eip/MessagingChannels/DatatypeChannel')

' renders the element
DatatypeChannel('DatatypeChannel', 'Datatype Channel', 'an optional tech label', 'an optional description')
@enduml
```

## DatatypeChannelGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element DatatypeChannelGroup
include('eip/MessagingChannels/DatatypeChannel')

' renders the element
DatatypeChannelGroup('DatatypeChannelGroup', 'Datatype Channel Group', 'an optional tech label') {
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

' loads the Item which embeds the element DatatypeChannelGroup
include('eip/MessagingChannels/DatatypeChannel')

' renders the element
DatatypeChannelGroup('DatatypeChannelGroup', 'Datatype Channel Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

