# Service Activity Log

```text
azure-v2/Item/ManagementGovernance/ServiceActivityLog
```

```text
include('azure-v2/Item/ManagementGovernance/ServiceActivityLog')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceActivityLog.png)|![](ServiceActivityLog.card.png)|![](ServiceActivityLog.element.png)|![](ServiceActivityLog.group.png)|



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
' loads the ServiceActivityLog element
include('azure-v2/Item/ManagementGovernance/ServiceActivityLog')
ServiceActivityLogCard('service_activity_log', 'Service Activity Log', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceActivityLog element
include('azure-v2/Item/ManagementGovernance/ServiceActivityLog')
ServiceActivityLogCard('service_activity_log', 'Service Activity Log', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceActivityLog element
include('azure-v2/Item/ManagementGovernance/ServiceActivityLog')
ServiceActivityLog('service_activity_log', 'Service Activity Log', 'an optional tech field')
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
' loads the ServiceActivityLog element
include('azure-v2/Item/ManagementGovernance/ServiceActivityLog')
ServiceActivityLog('service_activity_log', 'Service Activity Log', 'an optional tech field')
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
' loads the ServiceActivityLog element
include('azure-v2/Item/ManagementGovernance/ServiceActivityLog')
ServiceActivityLogGroup('service_activity_log', 'Service Activity Log', 'an optional tech field'){
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
' loads the ServiceActivityLog element
include('azure-v2/Item/ManagementGovernance/ServiceActivityLog')
ServiceActivityLogGroup('service_activity_log', 'Service Activity Log', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

