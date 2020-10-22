# Service App Services

```text
azure-v2/Item/Compute/ServiceAppServices
```

```text
include('azure-v2/Item/Compute/ServiceAppServices')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceAppServices.png)|![](ServiceAppServices.card.png)|![](ServiceAppServices.element.png)|![](ServiceAppServices.group.png)|



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
' loads the ServiceAppServices element
include('azure-v2/Item/Compute/ServiceAppServices')
ServiceAppServicesCard('service_app_services', 'Service App Services', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAppServices element
include('azure-v2/Item/Compute/ServiceAppServices')
ServiceAppServicesCard('service_app_services', 'Service App Services', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAppServices element
include('azure-v2/Item/Compute/ServiceAppServices')
ServiceAppServices('service_app_services', 'Service App Services', 'an optional tech field')
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
' loads the ServiceAppServices element
include('azure-v2/Item/Compute/ServiceAppServices')
ServiceAppServices('service_app_services', 'Service App Services', 'an optional tech field')
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
' loads the ServiceAppServices element
include('azure-v2/Item/Compute/ServiceAppServices')
ServiceAppServicesGroup('service_app_services', 'Service App Services', 'an optional tech field'){
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
' loads the ServiceAppServices element
include('azure-v2/Item/Compute/ServiceAppServices')
ServiceAppServicesGroup('service_app_services', 'Service App Services', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

