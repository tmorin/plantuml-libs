# Service App Service Environments

```text
azure-v2/Item/AppServices/ServiceAppServiceEnvironments
```

```text
include('azure-v2/Item/AppServices/ServiceAppServiceEnvironments')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceAppServiceEnvironments.png)|![](ServiceAppServiceEnvironments.card.png)|![](ServiceAppServiceEnvironments.element.png)|![](ServiceAppServiceEnvironments.group.png)|



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
' loads the ServiceAppServiceEnvironments element
include('azure-v2/Item/AppServices/ServiceAppServiceEnvironments')
ServiceAppServiceEnvironmentsCard('service_app_service_environments', 'Service App Service Environments', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAppServiceEnvironments element
include('azure-v2/Item/AppServices/ServiceAppServiceEnvironments')
ServiceAppServiceEnvironmentsCard('service_app_service_environments', 'Service App Service Environments', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAppServiceEnvironments element
include('azure-v2/Item/AppServices/ServiceAppServiceEnvironments')
ServiceAppServiceEnvironments('service_app_service_environments', 'Service App Service Environments', 'an optional tech field')
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
' loads the ServiceAppServiceEnvironments element
include('azure-v2/Item/AppServices/ServiceAppServiceEnvironments')
ServiceAppServiceEnvironments('service_app_service_environments', 'Service App Service Environments', 'an optional tech field')
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
' loads the ServiceAppServiceEnvironments element
include('azure-v2/Item/AppServices/ServiceAppServiceEnvironments')
ServiceAppServiceEnvironmentsGroup('service_app_service_environments', 'Service App Service Environments', 'an optional tech field'){
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
' loads the ServiceAppServiceEnvironments element
include('azure-v2/Item/AppServices/ServiceAppServiceEnvironments')
ServiceAppServiceEnvironmentsGroup('service_app_service_environments', 'Service App Service Environments', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

