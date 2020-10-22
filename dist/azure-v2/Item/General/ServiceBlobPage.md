# Service Blob Page

```text
azure-v2/Item/General/ServiceBlobPage
```

```text
include('azure-v2/Item/General/ServiceBlobPage')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceBlobPage.png)|![](ServiceBlobPage.card.png)|![](ServiceBlobPage.element.png)|![](ServiceBlobPage.group.png)|



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
' loads the ServiceBlobPage element
include('azure-v2/Item/General/ServiceBlobPage')
ServiceBlobPageCard('service_blob_page', 'Service Blob Page', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceBlobPage element
include('azure-v2/Item/General/ServiceBlobPage')
ServiceBlobPageCard('service_blob_page', 'Service Blob Page', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceBlobPage element
include('azure-v2/Item/General/ServiceBlobPage')
ServiceBlobPage('service_blob_page', 'Service Blob Page', 'an optional tech field')
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
' loads the ServiceBlobPage element
include('azure-v2/Item/General/ServiceBlobPage')
ServiceBlobPage('service_blob_page', 'Service Blob Page', 'an optional tech field')
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
' loads the ServiceBlobPage element
include('azure-v2/Item/General/ServiceBlobPage')
ServiceBlobPageGroup('service_blob_page', 'Service Blob Page', 'an optional tech field'){
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
' loads the ServiceBlobPage element
include('azure-v2/Item/General/ServiceBlobPage')
ServiceBlobPageGroup('service_blob_page', 'Service Blob Page', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

