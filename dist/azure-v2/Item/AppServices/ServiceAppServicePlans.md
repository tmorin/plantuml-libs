# Service App Service Plans

```text
azure-v2/Item/AppServices/ServiceAppServicePlans
```

```text
include('azure-v2/Item/AppServices/ServiceAppServicePlans')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceAppServicePlans.png)|![](ServiceAppServicePlans.card.png)|![](ServiceAppServicePlans.element.png)|![](ServiceAppServicePlans.group.png)|



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
' loads the ServiceAppServicePlans element
include('azure-v2/Item/AppServices/ServiceAppServicePlans')
ServiceAppServicePlansCard('service_app_service_plans', 'Service App Service Plans', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAppServicePlans element
include('azure-v2/Item/AppServices/ServiceAppServicePlans')
ServiceAppServicePlansCard('service_app_service_plans', 'Service App Service Plans', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAppServicePlans element
include('azure-v2/Item/AppServices/ServiceAppServicePlans')
ServiceAppServicePlans('service_app_service_plans', 'Service App Service Plans', 'an optional tech field')
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
' loads the ServiceAppServicePlans element
include('azure-v2/Item/AppServices/ServiceAppServicePlans')
ServiceAppServicePlans('service_app_service_plans', 'Service App Service Plans', 'an optional tech field')
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
' loads the ServiceAppServicePlans element
include('azure-v2/Item/AppServices/ServiceAppServicePlans')
ServiceAppServicePlansGroup('service_app_service_plans', 'Service App Service Plans', 'an optional tech field'){
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
' loads the ServiceAppServicePlans element
include('azure-v2/Item/AppServices/ServiceAppServicePlans')
ServiceAppServicePlansGroup('service_app_service_plans', 'Service App Service Plans', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

