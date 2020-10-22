# Service Azure Cloud Shell

```text
azure-v2/Item/Preview/ServiceAzureCloudShell
```

```text
include('azure-v2/Item/Preview/ServiceAzureCloudShell')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceAzureCloudShell.png)|![](ServiceAzureCloudShell.card.png)|![](ServiceAzureCloudShell.element.png)|![](ServiceAzureCloudShell.group.png)|



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
' loads the ServiceAzureCloudShell element
include('azure-v2/Item/Preview/ServiceAzureCloudShell')
ServiceAzureCloudShellCard('service_azure_cloud_shell', 'Service Azure Cloud Shell', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAzureCloudShell element
include('azure-v2/Item/Preview/ServiceAzureCloudShell')
ServiceAzureCloudShellCard('service_azure_cloud_shell', 'Service Azure Cloud Shell', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAzureCloudShell element
include('azure-v2/Item/Preview/ServiceAzureCloudShell')
ServiceAzureCloudShell('service_azure_cloud_shell', 'Service Azure Cloud Shell', 'an optional tech field')
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
' loads the ServiceAzureCloudShell element
include('azure-v2/Item/Preview/ServiceAzureCloudShell')
ServiceAzureCloudShell('service_azure_cloud_shell', 'Service Azure Cloud Shell', 'an optional tech field')
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
' loads the ServiceAzureCloudShell element
include('azure-v2/Item/Preview/ServiceAzureCloudShell')
ServiceAzureCloudShellGroup('service_azure_cloud_shell', 'Service Azure Cloud Shell', 'an optional tech field'){
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
' loads the ServiceAzureCloudShell element
include('azure-v2/Item/Preview/ServiceAzureCloudShell')
ServiceAzureCloudShellGroup('service_azure_cloud_shell', 'Service Azure Cloud Shell', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

