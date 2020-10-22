# Service Download

```text
azure-v2/Item/General/ServiceDownload
```

```text
include('azure-v2/Item/General/ServiceDownload')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceDownload.png)|![](ServiceDownload.card.png)|![](ServiceDownload.element.png)|![](ServiceDownload.group.png)|



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
' loads the ServiceDownload element
include('azure-v2/Item/General/ServiceDownload')
ServiceDownloadCard('service_download', 'Service Download', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceDownload element
include('azure-v2/Item/General/ServiceDownload')
ServiceDownloadCard('service_download', 'Service Download', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceDownload element
include('azure-v2/Item/General/ServiceDownload')
ServiceDownload('service_download', 'Service Download', 'an optional tech field')
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
' loads the ServiceDownload element
include('azure-v2/Item/General/ServiceDownload')
ServiceDownload('service_download', 'Service Download', 'an optional tech field')
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
' loads the ServiceDownload element
include('azure-v2/Item/General/ServiceDownload')
ServiceDownloadGroup('service_download', 'Service Download', 'an optional tech field'){
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
' loads the ServiceDownload element
include('azure-v2/Item/General/ServiceDownload')
ServiceDownloadGroup('service_download', 'Service Download', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

