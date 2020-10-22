# Service Updates

```text
azure-v2/Item/AzureStack/ServiceUpdates
```

```text
include('azure-v2/Item/AzureStack/ServiceUpdates')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceUpdates.png)|![](ServiceUpdates.card.png)|![](ServiceUpdates.element.png)|![](ServiceUpdates.group.png)|



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
' loads the ServiceUpdates element
include('azure-v2/Item/AzureStack/ServiceUpdates')
ServiceUpdatesCard('service_updates', 'Service Updates', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceUpdates element
include('azure-v2/Item/AzureStack/ServiceUpdates')
ServiceUpdatesCard('service_updates', 'Service Updates', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceUpdates element
include('azure-v2/Item/AzureStack/ServiceUpdates')
ServiceUpdates('service_updates', 'Service Updates', 'an optional tech field')
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
' loads the ServiceUpdates element
include('azure-v2/Item/AzureStack/ServiceUpdates')
ServiceUpdates('service_updates', 'Service Updates', 'an optional tech field')
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
' loads the ServiceUpdates element
include('azure-v2/Item/AzureStack/ServiceUpdates')
ServiceUpdatesGroup('service_updates', 'Service Updates', 'an optional tech field'){
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
' loads the ServiceUpdates element
include('azure-v2/Item/AzureStack/ServiceUpdates')
ServiceUpdatesGroup('service_updates', 'Service Updates', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

