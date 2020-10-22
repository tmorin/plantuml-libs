# Service Analysis Services

```text
azure-v2/Item/Analytics/ServiceAnalysisServices
```

```text
include('azure-v2/Item/Analytics/ServiceAnalysisServices')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceAnalysisServices.png)|![](ServiceAnalysisServices.card.png)|![](ServiceAnalysisServices.element.png)|![](ServiceAnalysisServices.group.png)|



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
' loads the ServiceAnalysisServices element
include('azure-v2/Item/Analytics/ServiceAnalysisServices')
ServiceAnalysisServicesCard('service_analysis_services', 'Service Analysis Services', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAnalysisServices element
include('azure-v2/Item/Analytics/ServiceAnalysisServices')
ServiceAnalysisServicesCard('service_analysis_services', 'Service Analysis Services', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAnalysisServices element
include('azure-v2/Item/Analytics/ServiceAnalysisServices')
ServiceAnalysisServices('service_analysis_services', 'Service Analysis Services', 'an optional tech field')
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
' loads the ServiceAnalysisServices element
include('azure-v2/Item/Analytics/ServiceAnalysisServices')
ServiceAnalysisServices('service_analysis_services', 'Service Analysis Services', 'an optional tech field')
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
' loads the ServiceAnalysisServices element
include('azure-v2/Item/Analytics/ServiceAnalysisServices')
ServiceAnalysisServicesGroup('service_analysis_services', 'Service Analysis Services', 'an optional tech field'){
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
' loads the ServiceAnalysisServices element
include('azure-v2/Item/Analytics/ServiceAnalysisServices')
ServiceAnalysisServicesGroup('service_analysis_services', 'Service Analysis Services', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

