# Service Storage Container

```text
azure-v2/Item/General/ServiceStorageContainer
```

```text
include('azure-v2/Item/General/ServiceStorageContainer')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceStorageContainer.png)|![](ServiceStorageContainer.card.png)|![](ServiceStorageContainer.element.png)|![](ServiceStorageContainer.group.png)|



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
' loads the ServiceStorageContainer element
include('azure-v2/Item/General/ServiceStorageContainer')
ServiceStorageContainerCard('service_storage_container', 'Service Storage Container', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceStorageContainer element
include('azure-v2/Item/General/ServiceStorageContainer')
ServiceStorageContainerCard('service_storage_container', 'Service Storage Container', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceStorageContainer element
include('azure-v2/Item/General/ServiceStorageContainer')
ServiceStorageContainer('service_storage_container', 'Service Storage Container', 'an optional tech field')
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
' loads the ServiceStorageContainer element
include('azure-v2/Item/General/ServiceStorageContainer')
ServiceStorageContainer('service_storage_container', 'Service Storage Container', 'an optional tech field')
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
' loads the ServiceStorageContainer element
include('azure-v2/Item/General/ServiceStorageContainer')
ServiceStorageContainerGroup('service_storage_container', 'Service Storage Container', 'an optional tech field'){
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
' loads the ServiceStorageContainer element
include('azure-v2/Item/General/ServiceStorageContainer')
ServiceStorageContainerGroup('service_storage_container', 'Service Storage Container', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

