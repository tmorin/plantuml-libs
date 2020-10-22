# Service Io T Hub

```text
azure-v2/Item/IoT/ServiceIoTHub
```

```text
include('azure-v2/Item/IoT/ServiceIoTHub')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceIoTHub.png)|![](ServiceIoTHub.card.png)|![](ServiceIoTHub.element.png)|![](ServiceIoTHub.group.png)|



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
' loads the ServiceIoTHub element
include('azure-v2/Item/IoT/ServiceIoTHub')
ServiceIoTHubCard('service_io_t_hub', 'Service Io T Hub', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceIoTHub element
include('azure-v2/Item/IoT/ServiceIoTHub')
ServiceIoTHubCard('service_io_t_hub', 'Service Io T Hub', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceIoTHub element
include('azure-v2/Item/IoT/ServiceIoTHub')
ServiceIoTHub('service_io_t_hub', 'Service Io T Hub', 'an optional tech field')
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
' loads the ServiceIoTHub element
include('azure-v2/Item/IoT/ServiceIoTHub')
ServiceIoTHub('service_io_t_hub', 'Service Io T Hub', 'an optional tech field')
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
' loads the ServiceIoTHub element
include('azure-v2/Item/IoT/ServiceIoTHub')
ServiceIoTHubGroup('service_io_t_hub', 'Service Io T Hub', 'an optional tech field'){
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
' loads the ServiceIoTHub element
include('azure-v2/Item/IoT/ServiceIoTHub')
ServiceIoTHubGroup('service_io_t_hub', 'Service Io T Hub', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

