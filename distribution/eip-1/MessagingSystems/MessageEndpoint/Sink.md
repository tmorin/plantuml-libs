# Sink


```text
eip-1/MessagingSystems/MessageEndpoint/Sink
```

```text
include('eip-1/MessagingSystems/MessageEndpoint/Sink')
```



| Illustration | Sink | SinkGroup |
| :---: | :---: | :---: |
| ![illustration for Illustration](../../../eip-1/MessagingSystems/MessageEndpoint/Sink.png) | ![illustration for Sink](../../../eip-1/MessagingSystems/MessageEndpoint/Sink.Local.png) | ![illustration for SinkGroup](../../../eip-1/MessagingSystems/MessageEndpoint/SinkGroup.Local.png) |




## Sink

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element Sink
include('eip-1/MessagingSystems/MessageEndpoint/Sink')

' renders the element
Sink('Sink', 'Sink', 'an optional tech label')
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
include('eip-1/bootstrap')

' loads the Item which embeds the element Sink
include('eip-1/MessagingSystems/MessageEndpoint/Sink')

' renders the element
Sink('Sink', 'Sink', 'an optional tech label')
@enduml
```

## SinkGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('eip-1/bootstrap')

' loads the Item which embeds the element SinkGroup
include('eip-1/MessagingSystems/MessageEndpoint/Sink')

' renders the element
SinkGroup('SinkGroup', 'Sink Group', 'an optional tech label') {
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
include('eip-1/bootstrap')

' loads the Item which embeds the element SinkGroup
include('eip-1/MessagingSystems/MessageEndpoint/Sink')

' renders the element
SinkGroup('SinkGroup', 'Sink Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

