# Service Management Portal

```text
azure-v2/Item/General/ServiceManagementPortal
```

```text
include('azure-v2/Item/General/ServiceManagementPortal')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceManagementPortal.png)|![](ServiceManagementPortal.card.png)|![](ServiceManagementPortal.element.png)|![](ServiceManagementPortal.group.png)|



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
' loads the ServiceManagementPortal element
include('azure-v2/Item/General/ServiceManagementPortal')
ServiceManagementPortalCard('service_management_portal', 'Service Management Portal', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceManagementPortal element
include('azure-v2/Item/General/ServiceManagementPortal')
ServiceManagementPortalCard('service_management_portal', 'Service Management Portal', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceManagementPortal element
include('azure-v2/Item/General/ServiceManagementPortal')
ServiceManagementPortal('service_management_portal', 'Service Management Portal', 'an optional tech field')
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
' loads the ServiceManagementPortal element
include('azure-v2/Item/General/ServiceManagementPortal')
ServiceManagementPortal('service_management_portal', 'Service Management Portal', 'an optional tech field')
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
' loads the ServiceManagementPortal element
include('azure-v2/Item/General/ServiceManagementPortal')
ServiceManagementPortalGroup('service_management_portal', 'Service Management Portal', 'an optional tech field'){
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
' loads the ServiceManagementPortal element
include('azure-v2/Item/General/ServiceManagementPortal')
ServiceManagementPortalGroup('service_management_portal', 'Service Management Portal', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

