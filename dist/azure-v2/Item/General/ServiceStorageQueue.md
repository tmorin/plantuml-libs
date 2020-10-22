# Service Storage Queue

```text
azure-v2/Item/General/ServiceStorageQueue
```

```text
include('azure-v2/Item/General/ServiceStorageQueue')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceStorageQueue.png)|![](ServiceStorageQueue.card.png)|![](ServiceStorageQueue.element.png)|![](ServiceStorageQueue.group.png)|



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
' loads the ServiceStorageQueue element
include('azure-v2/Item/General/ServiceStorageQueue')
ServiceStorageQueueCard('service_storage_queue', 'Service Storage Queue', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceStorageQueue element
include('azure-v2/Item/General/ServiceStorageQueue')
ServiceStorageQueueCard('service_storage_queue', 'Service Storage Queue', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceStorageQueue element
include('azure-v2/Item/General/ServiceStorageQueue')
ServiceStorageQueue('service_storage_queue', 'Service Storage Queue', 'an optional tech field')
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
' loads the ServiceStorageQueue element
include('azure-v2/Item/General/ServiceStorageQueue')
ServiceStorageQueue('service_storage_queue', 'Service Storage Queue', 'an optional tech field')
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
' loads the ServiceStorageQueue element
include('azure-v2/Item/General/ServiceStorageQueue')
ServiceStorageQueueGroup('service_storage_queue', 'Service Storage Queue', 'an optional tech field'){
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
' loads the ServiceStorageQueue element
include('azure-v2/Item/General/ServiceStorageQueue')
ServiceStorageQueueGroup('service_storage_queue', 'Service Storage Queue', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

