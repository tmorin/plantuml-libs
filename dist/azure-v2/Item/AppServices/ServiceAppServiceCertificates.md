# Service App Service Certificates

```text
azure-v2/Item/AppServices/ServiceAppServiceCertificates
```

```text
include('azure-v2/Item/AppServices/ServiceAppServiceCertificates')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceAppServiceCertificates.png)|![](ServiceAppServiceCertificates.card.png)|![](ServiceAppServiceCertificates.element.png)|![](ServiceAppServiceCertificates.group.png)|



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
' loads the ServiceAppServiceCertificates element
include('azure-v2/Item/AppServices/ServiceAppServiceCertificates')
ServiceAppServiceCertificatesCard('service_app_service_certificates', 'Service App Service Certificates', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAppServiceCertificates element
include('azure-v2/Item/AppServices/ServiceAppServiceCertificates')
ServiceAppServiceCertificatesCard('service_app_service_certificates', 'Service App Service Certificates', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAppServiceCertificates element
include('azure-v2/Item/AppServices/ServiceAppServiceCertificates')
ServiceAppServiceCertificates('service_app_service_certificates', 'Service App Service Certificates', 'an optional tech field')
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
' loads the ServiceAppServiceCertificates element
include('azure-v2/Item/AppServices/ServiceAppServiceCertificates')
ServiceAppServiceCertificates('service_app_service_certificates', 'Service App Service Certificates', 'an optional tech field')
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
' loads the ServiceAppServiceCertificates element
include('azure-v2/Item/AppServices/ServiceAppServiceCertificates')
ServiceAppServiceCertificatesGroup('service_app_service_certificates', 'Service App Service Certificates', 'an optional tech field'){
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
' loads the ServiceAppServiceCertificates element
include('azure-v2/Item/AppServices/ServiceAppServiceCertificates')
ServiceAppServiceCertificatesGroup('service_app_service_certificates', 'Service App Service Certificates', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

