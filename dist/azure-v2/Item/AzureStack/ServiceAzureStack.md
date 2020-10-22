# Service Azure Stack

```text
azure-v2/Item/AzureStack/ServiceAzureStack
```

```text
include('azure-v2/Item/AzureStack/ServiceAzureStack')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceAzureStack.png)|![](ServiceAzureStack.card.png)|![](ServiceAzureStack.element.png)|![](ServiceAzureStack.group.png)|



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
' loads the ServiceAzureStack element
include('azure-v2/Item/AzureStack/ServiceAzureStack')
ServiceAzureStackCard('service_azure_stack', 'Service Azure Stack', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAzureStack element
include('azure-v2/Item/AzureStack/ServiceAzureStack')
ServiceAzureStackCard('service_azure_stack', 'Service Azure Stack', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAzureStack element
include('azure-v2/Item/AzureStack/ServiceAzureStack')
ServiceAzureStack('service_azure_stack', 'Service Azure Stack', 'an optional tech field')
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
' loads the ServiceAzureStack element
include('azure-v2/Item/AzureStack/ServiceAzureStack')
ServiceAzureStack('service_azure_stack', 'Service Azure Stack', 'an optional tech field')
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
' loads the ServiceAzureStack element
include('azure-v2/Item/AzureStack/ServiceAzureStack')
ServiceAzureStackGroup('service_azure_stack', 'Service Azure Stack', 'an optional tech field'){
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
' loads the ServiceAzureStack element
include('azure-v2/Item/AzureStack/ServiceAzureStack')
ServiceAzureStackGroup('service_azure_stack', 'Service Azure Stack', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

