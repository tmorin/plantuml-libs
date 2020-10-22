# Service Rtos

```text
azure-v2/Item/Preview/ServiceRtos
```

```text
include('azure-v2/Item/Preview/ServiceRtos')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceRtos.png)|![](ServiceRtos.card.png)|![](ServiceRtos.element.png)|![](ServiceRtos.group.png)|



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
' loads the ServiceRtos element
include('azure-v2/Item/Preview/ServiceRtos')
ServiceRtosCard('service_rtos', 'Service Rtos', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceRtos element
include('azure-v2/Item/Preview/ServiceRtos')
ServiceRtosCard('service_rtos', 'Service Rtos', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceRtos element
include('azure-v2/Item/Preview/ServiceRtos')
ServiceRtos('service_rtos', 'Service Rtos', 'an optional tech field')
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
' loads the ServiceRtos element
include('azure-v2/Item/Preview/ServiceRtos')
ServiceRtos('service_rtos', 'Service Rtos', 'an optional tech field')
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
' loads the ServiceRtos element
include('azure-v2/Item/Preview/ServiceRtos')
ServiceRtosGroup('service_rtos', 'Service Rtos', 'an optional tech field'){
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
' loads the ServiceRtos element
include('azure-v2/Item/Preview/ServiceRtos')
ServiceRtosGroup('service_rtos', 'Service Rtos', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

