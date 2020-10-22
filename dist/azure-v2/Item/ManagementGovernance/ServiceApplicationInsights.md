# Service Application Insights

```text
azure-v2/Item/ManagementGovernance/ServiceApplicationInsights
```

```text
include('azure-v2/Item/ManagementGovernance/ServiceApplicationInsights')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceApplicationInsights.png)|![](ServiceApplicationInsights.card.png)|![](ServiceApplicationInsights.element.png)|![](ServiceApplicationInsights.group.png)|



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
' loads the ServiceApplicationInsights element
include('azure-v2/Item/ManagementGovernance/ServiceApplicationInsights')
ServiceApplicationInsightsCard('service_application_insights', 'Service Application Insights', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceApplicationInsights element
include('azure-v2/Item/ManagementGovernance/ServiceApplicationInsights')
ServiceApplicationInsightsCard('service_application_insights', 'Service Application Insights', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceApplicationInsights element
include('azure-v2/Item/ManagementGovernance/ServiceApplicationInsights')
ServiceApplicationInsights('service_application_insights', 'Service Application Insights', 'an optional tech field')
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
' loads the ServiceApplicationInsights element
include('azure-v2/Item/ManagementGovernance/ServiceApplicationInsights')
ServiceApplicationInsights('service_application_insights', 'Service Application Insights', 'an optional tech field')
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
' loads the ServiceApplicationInsights element
include('azure-v2/Item/ManagementGovernance/ServiceApplicationInsights')
ServiceApplicationInsightsGroup('service_application_insights', 'Service Application Insights', 'an optional tech field'){
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
' loads the ServiceApplicationInsights element
include('azure-v2/Item/ManagementGovernance/ServiceApplicationInsights')
ServiceApplicationInsightsGroup('service_application_insights', 'Service Application Insights', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

