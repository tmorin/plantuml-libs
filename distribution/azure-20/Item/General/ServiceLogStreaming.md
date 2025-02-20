# ServiceLogStreaming


```text
azure-20/Item/General/ServiceLogStreaming
```

```text
include('azure-20/Item/General/ServiceLogStreaming')
```



| Illustration | ServiceLogStreaming | ServiceLogStreamingCard | ServiceLogStreamingGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../azure-20/Item/General/ServiceLogStreaming.png) | ![illustration for ServiceLogStreaming](../../../azure-20/Item/General/ServiceLogStreaming.Local.png) | ![illustration for ServiceLogStreamingCard](../../../azure-20/Item/General/ServiceLogStreamingCard.Local.png) | ![illustration for ServiceLogStreamingGroup](../../../azure-20/Item/General/ServiceLogStreamingGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ServiceLogStreamingXs>`
- `<$ServiceLogStreamingSm>`
- `<$ServiceLogStreamingMd>`
- `<$ServiceLogStreamingLg>`





## ServiceLogStreaming

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceLogStreaming
include('azure-20/Item/General/ServiceLogStreaming')

' renders the element
ServiceLogStreaming('ServiceLogStreaming', 'Service Log Streaming', 'an optional tech label', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceLogStreaming
include('azure-20/Item/General/ServiceLogStreaming')

' renders the element
ServiceLogStreaming('ServiceLogStreaming', 'Service Log Streaming', 'an optional tech label', 'an optional description')
@enduml
```

## ServiceLogStreamingCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceLogStreamingCard
include('azure-20/Item/General/ServiceLogStreaming')

' renders the element
ServiceLogStreamingCard('ServiceLogStreamingCard', 'Service Log Streaming Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceLogStreamingCard
include('azure-20/Item/General/ServiceLogStreaming')

' renders the element
ServiceLogStreamingCard('ServiceLogStreamingCard', 'Service Log Streaming Card', 'an optional description')
@enduml
```

## ServiceLogStreamingGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceLogStreamingGroup
include('azure-20/Item/General/ServiceLogStreaming')

' renders the element
ServiceLogStreamingGroup('ServiceLogStreamingGroup', 'Service Log Streaming Group', 'an optional tech label') {
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
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('azure-20/bootstrap')

' loads the Item which embeds the element ServiceLogStreamingGroup
include('azure-20/Item/General/ServiceLogStreaming')

' renders the element
ServiceLogStreamingGroup('ServiceLogStreamingGroup', 'Service Log Streaming Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

