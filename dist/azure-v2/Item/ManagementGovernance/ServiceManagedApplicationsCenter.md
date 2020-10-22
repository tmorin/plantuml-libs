# Service Managed Applications Center

```text
azure-v2/Item/ManagementGovernance/ServiceManagedApplicationsCenter
```

```text
include('azure-v2/Item/ManagementGovernance/ServiceManagedApplicationsCenter')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceManagedApplicationsCenter.png)|![](ServiceManagedApplicationsCenter.card.png)|![](ServiceManagedApplicationsCenter.element.png)|![](ServiceManagedApplicationsCenter.group.png)|



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
' loads the ServiceManagedApplicationsCenter element
include('azure-v2/Item/ManagementGovernance/ServiceManagedApplicationsCenter')
ServiceManagedApplicationsCenterCard('service_managed_applications_center', 'Service Managed Applications Center', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceManagedApplicationsCenter element
include('azure-v2/Item/ManagementGovernance/ServiceManagedApplicationsCenter')
ServiceManagedApplicationsCenterCard('service_managed_applications_center', 'Service Managed Applications Center', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceManagedApplicationsCenter element
include('azure-v2/Item/ManagementGovernance/ServiceManagedApplicationsCenter')
ServiceManagedApplicationsCenter('service_managed_applications_center', 'Service Managed Applications Center', 'an optional tech field')
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
' loads the ServiceManagedApplicationsCenter element
include('azure-v2/Item/ManagementGovernance/ServiceManagedApplicationsCenter')
ServiceManagedApplicationsCenter('service_managed_applications_center', 'Service Managed Applications Center', 'an optional tech field')
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
' loads the ServiceManagedApplicationsCenter element
include('azure-v2/Item/ManagementGovernance/ServiceManagedApplicationsCenter')
ServiceManagedApplicationsCenterGroup('service_managed_applications_center', 'Service Managed Applications Center', 'an optional tech field'){
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
' loads the ServiceManagedApplicationsCenter element
include('azure-v2/Item/ManagementGovernance/ServiceManagedApplicationsCenter')
ServiceManagedApplicationsCenterGroup('service_managed_applications_center', 'Service Managed Applications Center', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

