# Service Advisor

```text
azure-v2/Item/ManagementGovernance/ServiceAdvisor
```

```text
include('azure-v2/Item/ManagementGovernance/ServiceAdvisor')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceAdvisor.png)|![](ServiceAdvisor.card.png)|![](ServiceAdvisor.element.png)|![](ServiceAdvisor.group.png)|



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
' loads the ServiceAdvisor element
include('azure-v2/Item/ManagementGovernance/ServiceAdvisor')
ServiceAdvisorCard('service_advisor', 'Service Advisor', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAdvisor element
include('azure-v2/Item/ManagementGovernance/ServiceAdvisor')
ServiceAdvisorCard('service_advisor', 'Service Advisor', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAdvisor element
include('azure-v2/Item/ManagementGovernance/ServiceAdvisor')
ServiceAdvisor('service_advisor', 'Service Advisor', 'an optional tech field')
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
' loads the ServiceAdvisor element
include('azure-v2/Item/ManagementGovernance/ServiceAdvisor')
ServiceAdvisor('service_advisor', 'Service Advisor', 'an optional tech field')
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
' loads the ServiceAdvisor element
include('azure-v2/Item/ManagementGovernance/ServiceAdvisor')
ServiceAdvisorGroup('service_advisor', 'Service Advisor', 'an optional tech field'){
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
' loads the ServiceAdvisor element
include('azure-v2/Item/ManagementGovernance/ServiceAdvisor')
ServiceAdvisorGroup('service_advisor', 'Service Advisor', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

