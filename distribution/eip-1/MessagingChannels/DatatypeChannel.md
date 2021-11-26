# DatatypeChannel


```text
eip-1/MessagingChannels/DatatypeChannel
```

```text
include('eip-1/MessagingChannels/DatatypeChannel')
```



| Illustration | DatatypeChannel | DatatypeChannelGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip-1/MessagingChannels/DatatypeChannel.png) | ![illustration for DatatypeChannel](../../eip-1/MessagingChannels/DatatypeChannel.Local.png) | ![illustration for DatatypeChannelGroup](../../eip-1/MessagingChannels/DatatypeChannelGroup.Local.png) |




## DatatypeChannel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element DatatypeChannel
include('eip-1/MessagingChannels/DatatypeChannel')

' renders the element
DatatypeChannel('DatatypeChannel', 'Datatype Channel', 'an optional tech label')
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

' loads the Item which embeds the element DatatypeChannel
include('eip-1/MessagingChannels/DatatypeChannel')

' renders the element
DatatypeChannel('DatatypeChannel', 'Datatype Channel', 'an optional tech label')
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
include('eip-1/bootstrap')

' loads the Item which embeds the element DatatypeChannelGroup
include('eip-1/MessagingChannels/DatatypeChannel')

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
include('eip-1/bootstrap')

' loads the Item which embeds the element DatatypeChannelGroup
include('eip-1/MessagingChannels/DatatypeChannel')

' renders the element
DatatypeChannelGroup('DatatypeChannelGroup', 'Datatype Channel Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

