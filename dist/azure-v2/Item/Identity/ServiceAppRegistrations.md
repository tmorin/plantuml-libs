# Service App Registrations

```text
azure-v2/Item/Identity/ServiceAppRegistrations
```

```text
include('azure-v2/Item/Identity/ServiceAppRegistrations')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceAppRegistrations.png)|![](ServiceAppRegistrations.card.png)|![](ServiceAppRegistrations.element.png)|![](ServiceAppRegistrations.group.png)|



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
' loads the ServiceAppRegistrations element
include('azure-v2/Item/Identity/ServiceAppRegistrations')
ServiceAppRegistrationsCard('service_app_registrations', 'Service App Registrations', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAppRegistrations element
include('azure-v2/Item/Identity/ServiceAppRegistrations')
ServiceAppRegistrationsCard('service_app_registrations', 'Service App Registrations', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAppRegistrations element
include('azure-v2/Item/Identity/ServiceAppRegistrations')
ServiceAppRegistrations('service_app_registrations', 'Service App Registrations', 'an optional tech field')
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
' loads the ServiceAppRegistrations element
include('azure-v2/Item/Identity/ServiceAppRegistrations')
ServiceAppRegistrations('service_app_registrations', 'Service App Registrations', 'an optional tech field')
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
' loads the ServiceAppRegistrations element
include('azure-v2/Item/Identity/ServiceAppRegistrations')
ServiceAppRegistrationsGroup('service_app_registrations', 'Service App Registrations', 'an optional tech field'){
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
' loads the ServiceAppRegistrations element
include('azure-v2/Item/Identity/ServiceAppRegistrations')
ServiceAppRegistrationsGroup('service_app_registrations', 'Service App Registrations', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

