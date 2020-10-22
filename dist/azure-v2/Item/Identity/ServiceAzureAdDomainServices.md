# Service Azure Ad Domain Services

```text
azure-v2/Item/Identity/ServiceAzureAdDomainServices
```

```text
include('azure-v2/Item/Identity/ServiceAzureAdDomainServices')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceAzureAdDomainServices.png)|![](ServiceAzureAdDomainServices.card.png)|![](ServiceAzureAdDomainServices.element.png)|![](ServiceAzureAdDomainServices.group.png)|



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
' loads the ServiceAzureAdDomainServices element
include('azure-v2/Item/Identity/ServiceAzureAdDomainServices')
ServiceAzureAdDomainServicesCard('service_azure_ad_domain_services', 'Service Azure Ad Domain Services', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAzureAdDomainServices element
include('azure-v2/Item/Identity/ServiceAzureAdDomainServices')
ServiceAzureAdDomainServicesCard('service_azure_ad_domain_services', 'Service Azure Ad Domain Services', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAzureAdDomainServices element
include('azure-v2/Item/Identity/ServiceAzureAdDomainServices')
ServiceAzureAdDomainServices('service_azure_ad_domain_services', 'Service Azure Ad Domain Services', 'an optional tech field')
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
' loads the ServiceAzureAdDomainServices element
include('azure-v2/Item/Identity/ServiceAzureAdDomainServices')
ServiceAzureAdDomainServices('service_azure_ad_domain_services', 'Service Azure Ad Domain Services', 'an optional tech field')
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
' loads the ServiceAzureAdDomainServices element
include('azure-v2/Item/Identity/ServiceAzureAdDomainServices')
ServiceAzureAdDomainServicesGroup('service_azure_ad_domain_services', 'Service Azure Ad Domain Services', 'an optional tech field'){
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
' loads the ServiceAzureAdDomainServices element
include('azure-v2/Item/Identity/ServiceAzureAdDomainServices')
ServiceAzureAdDomainServicesGroup('service_azure_ad_domain_services', 'Service Azure Ad Domain Services', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

