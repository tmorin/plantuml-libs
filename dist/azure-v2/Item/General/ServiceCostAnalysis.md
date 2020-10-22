# Service Cost Analysis

```text
azure-v2/Item/General/ServiceCostAnalysis
```

```text
include('azure-v2/Item/General/ServiceCostAnalysis')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceCostAnalysis.png)|![](ServiceCostAnalysis.card.png)|![](ServiceCostAnalysis.element.png)|![](ServiceCostAnalysis.group.png)|



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
' loads the ServiceCostAnalysis element
include('azure-v2/Item/General/ServiceCostAnalysis')
ServiceCostAnalysisCard('service_cost_analysis', 'Service Cost Analysis', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceCostAnalysis element
include('azure-v2/Item/General/ServiceCostAnalysis')
ServiceCostAnalysisCard('service_cost_analysis', 'Service Cost Analysis', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceCostAnalysis element
include('azure-v2/Item/General/ServiceCostAnalysis')
ServiceCostAnalysis('service_cost_analysis', 'Service Cost Analysis', 'an optional tech field')
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
' loads the ServiceCostAnalysis element
include('azure-v2/Item/General/ServiceCostAnalysis')
ServiceCostAnalysis('service_cost_analysis', 'Service Cost Analysis', 'an optional tech field')
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
' loads the ServiceCostAnalysis element
include('azure-v2/Item/General/ServiceCostAnalysis')
ServiceCostAnalysisGroup('service_cost_analysis', 'Service Cost Analysis', 'an optional tech field'){
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
' loads the ServiceCostAnalysis element
include('azure-v2/Item/General/ServiceCostAnalysis')
ServiceCostAnalysisGroup('service_cost_analysis', 'Service Cost Analysis', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

