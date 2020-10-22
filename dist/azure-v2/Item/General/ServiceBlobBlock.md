# Service Blob Block

```text
azure-v2/Item/General/ServiceBlobBlock
```

```text
include('azure-v2/Item/General/ServiceBlobBlock')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceBlobBlock.png)|![](ServiceBlobBlock.card.png)|![](ServiceBlobBlock.element.png)|![](ServiceBlobBlock.group.png)|



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
' loads the ServiceBlobBlock element
include('azure-v2/Item/General/ServiceBlobBlock')
ServiceBlobBlockCard('service_blob_block', 'Service Blob Block', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceBlobBlock element
include('azure-v2/Item/General/ServiceBlobBlock')
ServiceBlobBlockCard('service_blob_block', 'Service Blob Block', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceBlobBlock element
include('azure-v2/Item/General/ServiceBlobBlock')
ServiceBlobBlock('service_blob_block', 'Service Blob Block', 'an optional tech field')
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
' loads the ServiceBlobBlock element
include('azure-v2/Item/General/ServiceBlobBlock')
ServiceBlobBlock('service_blob_block', 'Service Blob Block', 'an optional tech field')
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
' loads the ServiceBlobBlock element
include('azure-v2/Item/General/ServiceBlobBlock')
ServiceBlobBlockGroup('service_blob_block', 'Service Blob Block', 'an optional tech field'){
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
' loads the ServiceBlobBlock element
include('azure-v2/Item/General/ServiceBlobBlock')
ServiceBlobBlockGroup('service_blob_block', 'Service Blob Block', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

