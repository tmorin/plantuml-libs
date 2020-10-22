# Service Azure Media Service

```text
azure-v2/Item/Web/ServiceAzureMediaService
```

```text
include('azure-v2/Item/Web/ServiceAzureMediaService')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceAzureMediaService.png)|![](ServiceAzureMediaService.card.png)|![](ServiceAzureMediaService.element.png)|![](ServiceAzureMediaService.group.png)|



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
' loads the ServiceAzureMediaService element
include('azure-v2/Item/Web/ServiceAzureMediaService')
ServiceAzureMediaServiceCard('service_azure_media_service', 'Service Azure Media Service', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAzureMediaService element
include('azure-v2/Item/Web/ServiceAzureMediaService')
ServiceAzureMediaServiceCard('service_azure_media_service', 'Service Azure Media Service', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAzureMediaService element
include('azure-v2/Item/Web/ServiceAzureMediaService')
ServiceAzureMediaService('service_azure_media_service', 'Service Azure Media Service', 'an optional tech field')
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
' loads the ServiceAzureMediaService element
include('azure-v2/Item/Web/ServiceAzureMediaService')
ServiceAzureMediaService('service_azure_media_service', 'Service Azure Media Service', 'an optional tech field')
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
' loads the ServiceAzureMediaService element
include('azure-v2/Item/Web/ServiceAzureMediaService')
ServiceAzureMediaServiceGroup('service_azure_media_service', 'Service Azure Media Service', 'an optional tech field'){
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
' loads the ServiceAzureMediaService element
include('azure-v2/Item/Web/ServiceAzureMediaService')
ServiceAzureMediaServiceGroup('service_azure_media_service', 'Service Azure Media Service', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

