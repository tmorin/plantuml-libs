# ChannelAdapter


```text
eip/MessagingChannels/ChannelAdapter
```

```text
include('eip/MessagingChannels/ChannelAdapter')
```



| Illustration | ChannelAdapter | ChannelAdapterGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../eip/MessagingChannels/ChannelAdapter.png) | ![illustration for ChannelAdapter](../../eip/MessagingChannels/ChannelAdapter.Local.png) | ![illustration for ChannelAdapterGroup](../../eip/MessagingChannels/ChannelAdapterGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChannelAdapterXs>`
- `<$ChannelAdapterSm>`
- `<$ChannelAdapterMd>`
- `<$ChannelAdapterLg>`





## ChannelAdapter

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element ChannelAdapter
include('eip/MessagingChannels/ChannelAdapter')

' renders the element
ChannelAdapter('ChannelAdapter', 'Channel Adapter', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ChannelAdapter
include('eip/MessagingChannels/ChannelAdapter')

' renders the element
ChannelAdapter('ChannelAdapter', 'Channel Adapter', 'an optional tech label', 'an optional description')
@enduml
```

## ChannelAdapterGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip/bootstrap')

' loads the Item which embeds the element ChannelAdapterGroup
include('eip/MessagingChannels/ChannelAdapter')

' renders the element
ChannelAdapterGroup('ChannelAdapterGroup', 'Channel Adapter Group', 'an optional tech label') {
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

' loads the Item which embeds the element ChannelAdapterGroup
include('eip/MessagingChannels/ChannelAdapter')

' renders the element
ChannelAdapterGroup('ChannelAdapterGroup', 'Channel Adapter Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

