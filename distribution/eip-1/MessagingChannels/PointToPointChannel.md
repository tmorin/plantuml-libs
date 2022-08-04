# PointToPointChannel


```text
eip-1/MessagingChannels/PointToPointChannel
```

```text
include('eip-1/MessagingChannels/PointToPointChannel')
```



| Illustration | PointToPointChannel | PointToPointChannelGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip-1/MessagingChannels/PointToPointChannel.png) | ![illustration for PointToPointChannel](../../eip-1/MessagingChannels/PointToPointChannel.Local.png) | ![illustration for PointToPointChannelGroup](../../eip-1/MessagingChannels/PointToPointChannelGroup.Local.png) |




## PointToPointChannel

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element PointToPointChannel
include('eip-1/MessagingChannels/PointToPointChannel')

' renders the element
PointToPointChannel('PointToPointChannel', 'Point To Point Channel', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PointToPointChannel
include('eip-1/MessagingChannels/PointToPointChannel')

' renders the element
PointToPointChannel('PointToPointChannel', 'Point To Point Channel', 'an optional tech label', 'an optional description')
@enduml
```

## PointToPointChannelGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element PointToPointChannelGroup
include('eip-1/MessagingChannels/PointToPointChannel')

' renders the element
PointToPointChannelGroup('PointToPointChannelGroup', 'Point To Point Channel Group', 'an optional tech label') {
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

' loads the Item which embeds the element PointToPointChannelGroup
include('eip-1/MessagingChannels/PointToPointChannel')

' renders the element
PointToPointChannelGroup('PointToPointChannelGroup', 'Point To Point Channel Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

