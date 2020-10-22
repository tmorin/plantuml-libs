# Service App Service Domains

```text
azure-v2/Item/AppServices/ServiceAppServiceDomains
```

```text
include('azure-v2/Item/AppServices/ServiceAppServiceDomains')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceAppServiceDomains.png)|![](ServiceAppServiceDomains.card.png)|![](ServiceAppServiceDomains.element.png)|![](ServiceAppServiceDomains.group.png)|



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
' loads the ServiceAppServiceDomains element
include('azure-v2/Item/AppServices/ServiceAppServiceDomains')
ServiceAppServiceDomainsCard('service_app_service_domains', 'Service App Service Domains', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAppServiceDomains element
include('azure-v2/Item/AppServices/ServiceAppServiceDomains')
ServiceAppServiceDomainsCard('service_app_service_domains', 'Service App Service Domains', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAppServiceDomains element
include('azure-v2/Item/AppServices/ServiceAppServiceDomains')
ServiceAppServiceDomains('service_app_service_domains', 'Service App Service Domains', 'an optional tech field')
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
' loads the ServiceAppServiceDomains element
include('azure-v2/Item/AppServices/ServiceAppServiceDomains')
ServiceAppServiceDomains('service_app_service_domains', 'Service App Service Domains', 'an optional tech field')
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
' loads the ServiceAppServiceDomains element
include('azure-v2/Item/AppServices/ServiceAppServiceDomains')
ServiceAppServiceDomainsGroup('service_app_service_domains', 'Service App Service Domains', 'an optional tech field'){
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
' loads the ServiceAppServiceDomains element
include('azure-v2/Item/AppServices/ServiceAppServiceDomains')
ServiceAppServiceDomainsGroup('service_app_service_domains', 'Service App Service Domains', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

