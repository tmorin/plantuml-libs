# Service Azure Workbooks

```text
azure-v2/Item/Preview/ServiceAzureWorkbooks
```

```text
include('azure-v2/Item/Preview/ServiceAzureWorkbooks')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceAzureWorkbooks.png)|![](ServiceAzureWorkbooks.card.png)|![](ServiceAzureWorkbooks.element.png)|![](ServiceAzureWorkbooks.group.png)|



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
' loads the ServiceAzureWorkbooks element
include('azure-v2/Item/Preview/ServiceAzureWorkbooks')
ServiceAzureWorkbooksCard('service_azure_workbooks', 'Service Azure Workbooks', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAzureWorkbooks element
include('azure-v2/Item/Preview/ServiceAzureWorkbooks')
ServiceAzureWorkbooksCard('service_azure_workbooks', 'Service Azure Workbooks', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAzureWorkbooks element
include('azure-v2/Item/Preview/ServiceAzureWorkbooks')
ServiceAzureWorkbooks('service_azure_workbooks', 'Service Azure Workbooks', 'an optional tech field')
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
' loads the ServiceAzureWorkbooks element
include('azure-v2/Item/Preview/ServiceAzureWorkbooks')
ServiceAzureWorkbooks('service_azure_workbooks', 'Service Azure Workbooks', 'an optional tech field')
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
' loads the ServiceAzureWorkbooks element
include('azure-v2/Item/Preview/ServiceAzureWorkbooks')
ServiceAzureWorkbooksGroup('service_azure_workbooks', 'Service Azure Workbooks', 'an optional tech field'){
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
' loads the ServiceAzureWorkbooks element
include('azure-v2/Item/Preview/ServiceAzureWorkbooks')
ServiceAzureWorkbooksGroup('service_azure_workbooks', 'Service Azure Workbooks', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

