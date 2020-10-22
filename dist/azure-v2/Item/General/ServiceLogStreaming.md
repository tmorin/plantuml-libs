# Service Log Streaming

```text
azure-v2/Item/General/ServiceLogStreaming
```

```text
include('azure-v2/Item/General/ServiceLogStreaming')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceLogStreaming.png)|![](ServiceLogStreaming.card.png)|![](ServiceLogStreaming.element.png)|![](ServiceLogStreaming.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceLogStreaming element
include('azure-v2/Item/General/ServiceLogStreaming')
ServiceLogStreamingCard('service_log_streaming', 'Service Log Streaming', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceLogStreaming element
include('azure-v2/Item/General/ServiceLogStreaming')
ServiceLogStreamingCard('service_log_streaming', 'Service Log Streaming', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```


## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceLogStreaming element
include('azure-v2/Item/General/ServiceLogStreaming')
ServiceLogStreaming('service_log_streaming', 'Service Log Streaming', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceLogStreaming element
include('azure-v2/Item/General/ServiceLogStreaming')
ServiceLogStreaming('service_log_streaming', 'Service Log Streaming', 'an optional tech field')
@enduml
```


## group
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceLogStreaming element
include('azure-v2/Item/General/ServiceLogStreaming')
ServiceLogStreamingGroup('service_log_streaming', 'Service Log Streaming', 'an optional tech field'){
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
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the ServiceLogStreaming element
include('azure-v2/Item/General/ServiceLogStreaming')
ServiceLogStreamingGroup('service_log_streaming', 'Service Log Streaming', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

