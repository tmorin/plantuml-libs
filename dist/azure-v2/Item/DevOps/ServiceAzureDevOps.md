# Service Azure Dev Ops

```text
azure-v2/Item/DevOps/ServiceAzureDevOps
```

```text
include('azure-v2/Item/DevOps/ServiceAzureDevOps')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceAzureDevOps.png)|![](ServiceAzureDevOps.card.png)|![](ServiceAzureDevOps.element.png)|![](ServiceAzureDevOps.group.png)|



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
' loads the ServiceAzureDevOps element
include('azure-v2/Item/DevOps/ServiceAzureDevOps')
ServiceAzureDevOpsCard('service_azure_dev_ops', 'Service Azure Dev Ops', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAzureDevOps element
include('azure-v2/Item/DevOps/ServiceAzureDevOps')
ServiceAzureDevOpsCard('service_azure_dev_ops', 'Service Azure Dev Ops', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAzureDevOps element
include('azure-v2/Item/DevOps/ServiceAzureDevOps')
ServiceAzureDevOps('service_azure_dev_ops', 'Service Azure Dev Ops', 'an optional tech field')
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
' loads the ServiceAzureDevOps element
include('azure-v2/Item/DevOps/ServiceAzureDevOps')
ServiceAzureDevOps('service_azure_dev_ops', 'Service Azure Dev Ops', 'an optional tech field')
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
' loads the ServiceAzureDevOps element
include('azure-v2/Item/DevOps/ServiceAzureDevOps')
ServiceAzureDevOpsGroup('service_azure_dev_ops', 'Service Azure Dev Ops', 'an optional tech field'){
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
' loads the ServiceAzureDevOps element
include('azure-v2/Item/DevOps/ServiceAzureDevOps')
ServiceAzureDevOpsGroup('service_azure_dev_ops', 'Service Azure Dev Ops', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

