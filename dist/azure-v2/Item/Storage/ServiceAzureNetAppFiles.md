# Service Azure Net App Files

```text
azure-v2/Item/Storage/ServiceAzureNetAppFiles
```

```text
include('azure-v2/Item/Storage/ServiceAzureNetAppFiles')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceAzureNetAppFiles.png)|![](ServiceAzureNetAppFiles.card.png)|![](ServiceAzureNetAppFiles.element.png)|![](ServiceAzureNetAppFiles.group.png)|



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
' loads the ServiceAzureNetAppFiles element
include('azure-v2/Item/Storage/ServiceAzureNetAppFiles')
ServiceAzureNetAppFilesCard('service_azure_net_app_files', 'Service Azure Net App Files', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAzureNetAppFiles element
include('azure-v2/Item/Storage/ServiceAzureNetAppFiles')
ServiceAzureNetAppFilesCard('service_azure_net_app_files', 'Service Azure Net App Files', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAzureNetAppFiles element
include('azure-v2/Item/Storage/ServiceAzureNetAppFiles')
ServiceAzureNetAppFiles('service_azure_net_app_files', 'Service Azure Net App Files', 'an optional tech field')
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
' loads the ServiceAzureNetAppFiles element
include('azure-v2/Item/Storage/ServiceAzureNetAppFiles')
ServiceAzureNetAppFiles('service_azure_net_app_files', 'Service Azure Net App Files', 'an optional tech field')
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
' loads the ServiceAzureNetAppFiles element
include('azure-v2/Item/Storage/ServiceAzureNetAppFiles')
ServiceAzureNetAppFilesGroup('service_azure_net_app_files', 'Service Azure Net App Files', 'an optional tech field'){
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
' loads the ServiceAzureNetAppFiles element
include('azure-v2/Item/Storage/ServiceAzureNetAppFiles')
ServiceAzureNetAppFilesGroup('service_azure_net_app_files', 'Service Azure Net App Files', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

