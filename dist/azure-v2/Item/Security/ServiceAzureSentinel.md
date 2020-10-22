# Service Azure Sentinel

```text
azure-v2/Item/Security/ServiceAzureSentinel
```

```text
include('azure-v2/Item/Security/ServiceAzureSentinel')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceAzureSentinel.png)|![](ServiceAzureSentinel.card.png)|![](ServiceAzureSentinel.element.png)|![](ServiceAzureSentinel.group.png)|



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
' loads the ServiceAzureSentinel element
include('azure-v2/Item/Security/ServiceAzureSentinel')
ServiceAzureSentinelCard('service_azure_sentinel', 'Service Azure Sentinel', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAzureSentinel element
include('azure-v2/Item/Security/ServiceAzureSentinel')
ServiceAzureSentinelCard('service_azure_sentinel', 'Service Azure Sentinel', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAzureSentinel element
include('azure-v2/Item/Security/ServiceAzureSentinel')
ServiceAzureSentinel('service_azure_sentinel', 'Service Azure Sentinel', 'an optional tech field')
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
' loads the ServiceAzureSentinel element
include('azure-v2/Item/Security/ServiceAzureSentinel')
ServiceAzureSentinel('service_azure_sentinel', 'Service Azure Sentinel', 'an optional tech field')
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
' loads the ServiceAzureSentinel element
include('azure-v2/Item/Security/ServiceAzureSentinel')
ServiceAzureSentinelGroup('service_azure_sentinel', 'Service Azure Sentinel', 'an optional tech field'){
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
' loads the ServiceAzureSentinel element
include('azure-v2/Item/Security/ServiceAzureSentinel')
ServiceAzureSentinelGroup('service_azure_sentinel', 'Service Azure Sentinel', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

