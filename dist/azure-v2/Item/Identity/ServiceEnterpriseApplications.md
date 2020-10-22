# Service Enterprise Applications

```text
azure-v2/Item/Identity/ServiceEnterpriseApplications
```

```text
include('azure-v2/Item/Identity/ServiceEnterpriseApplications')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceEnterpriseApplications.png)|![](ServiceEnterpriseApplications.card.png)|![](ServiceEnterpriseApplications.element.png)|![](ServiceEnterpriseApplications.group.png)|



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
' loads the ServiceEnterpriseApplications element
include('azure-v2/Item/Identity/ServiceEnterpriseApplications')
ServiceEnterpriseApplicationsCard('service_enterprise_applications', 'Service Enterprise Applications', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceEnterpriseApplications element
include('azure-v2/Item/Identity/ServiceEnterpriseApplications')
ServiceEnterpriseApplicationsCard('service_enterprise_applications', 'Service Enterprise Applications', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceEnterpriseApplications element
include('azure-v2/Item/Identity/ServiceEnterpriseApplications')
ServiceEnterpriseApplications('service_enterprise_applications', 'Service Enterprise Applications', 'an optional tech field')
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
' loads the ServiceEnterpriseApplications element
include('azure-v2/Item/Identity/ServiceEnterpriseApplications')
ServiceEnterpriseApplications('service_enterprise_applications', 'Service Enterprise Applications', 'an optional tech field')
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
' loads the ServiceEnterpriseApplications element
include('azure-v2/Item/Identity/ServiceEnterpriseApplications')
ServiceEnterpriseApplicationsGroup('service_enterprise_applications', 'Service Enterprise Applications', 'an optional tech field'){
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
' loads the ServiceEnterpriseApplications element
include('azure-v2/Item/Identity/ServiceEnterpriseApplications')
ServiceEnterpriseApplicationsGroup('service_enterprise_applications', 'Service Enterprise Applications', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

