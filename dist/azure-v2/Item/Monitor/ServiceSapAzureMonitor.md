# Service Sap Azure Monitor

```text
azure-v2/Item/Monitor/ServiceSapAzureMonitor
```

```text
include('azure-v2/Item/Monitor/ServiceSapAzureMonitor')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceSapAzureMonitor.png)|![](ServiceSapAzureMonitor.card.png)|![](ServiceSapAzureMonitor.element.png)|![](ServiceSapAzureMonitor.group.png)|



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
' loads the ServiceSapAzureMonitor element
include('azure-v2/Item/Monitor/ServiceSapAzureMonitor')
ServiceSapAzureMonitorCard('service_sap_azure_monitor', 'Service Sap Azure Monitor', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceSapAzureMonitor element
include('azure-v2/Item/Monitor/ServiceSapAzureMonitor')
ServiceSapAzureMonitorCard('service_sap_azure_monitor', 'Service Sap Azure Monitor', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceSapAzureMonitor element
include('azure-v2/Item/Monitor/ServiceSapAzureMonitor')
ServiceSapAzureMonitor('service_sap_azure_monitor', 'Service Sap Azure Monitor', 'an optional tech field')
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
' loads the ServiceSapAzureMonitor element
include('azure-v2/Item/Monitor/ServiceSapAzureMonitor')
ServiceSapAzureMonitor('service_sap_azure_monitor', 'Service Sap Azure Monitor', 'an optional tech field')
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
' loads the ServiceSapAzureMonitor element
include('azure-v2/Item/Monitor/ServiceSapAzureMonitor')
ServiceSapAzureMonitorGroup('service_sap_azure_monitor', 'Service Sap Azure Monitor', 'an optional tech field'){
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
' loads the ServiceSapAzureMonitor element
include('azure-v2/Item/Monitor/ServiceSapAzureMonitor')
ServiceSapAzureMonitorGroup('service_sap_azure_monitor', 'Service Sap Azure Monitor', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

