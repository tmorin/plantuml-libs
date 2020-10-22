# Service Dashboard

```text
azure-v2/Item/General/ServiceDashboard
```

```text
include('azure-v2/Item/General/ServiceDashboard')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceDashboard.png)|![](ServiceDashboard.card.png)|![](ServiceDashboard.element.png)|![](ServiceDashboard.group.png)|



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
' loads the ServiceDashboard element
include('azure-v2/Item/General/ServiceDashboard')
ServiceDashboardCard('service_dashboard', 'Service Dashboard', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceDashboard element
include('azure-v2/Item/General/ServiceDashboard')
ServiceDashboardCard('service_dashboard', 'Service Dashboard', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceDashboard element
include('azure-v2/Item/General/ServiceDashboard')
ServiceDashboard('service_dashboard', 'Service Dashboard', 'an optional tech field')
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
' loads the ServiceDashboard element
include('azure-v2/Item/General/ServiceDashboard')
ServiceDashboard('service_dashboard', 'Service Dashboard', 'an optional tech field')
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
' loads the ServiceDashboard element
include('azure-v2/Item/General/ServiceDashboard')
ServiceDashboardGroup('service_dashboard', 'Service Dashboard', 'an optional tech field'){
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
' loads the ServiceDashboard element
include('azure-v2/Item/General/ServiceDashboard')
ServiceDashboardGroup('service_dashboard', 'Service Dashboard', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

