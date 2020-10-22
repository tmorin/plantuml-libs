# Service Avs

```text
azure-v2/Item/AzureVMwareSolution/ServiceAvs
```

```text
include('azure-v2/Item/AzureVMwareSolution/ServiceAvs')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceAvs.png)|![](ServiceAvs.card.png)|![](ServiceAvs.element.png)|![](ServiceAvs.group.png)|



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
' loads the ServiceAvs element
include('azure-v2/Item/AzureVMwareSolution/ServiceAvs')
ServiceAvsCard('service_avs', 'Service Avs', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAvs element
include('azure-v2/Item/AzureVMwareSolution/ServiceAvs')
ServiceAvsCard('service_avs', 'Service Avs', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceAvs element
include('azure-v2/Item/AzureVMwareSolution/ServiceAvs')
ServiceAvs('service_avs', 'Service Avs', 'an optional tech field')
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
' loads the ServiceAvs element
include('azure-v2/Item/AzureVMwareSolution/ServiceAvs')
ServiceAvs('service_avs', 'Service Avs', 'an optional tech field')
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
' loads the ServiceAvs element
include('azure-v2/Item/AzureVMwareSolution/ServiceAvs')
ServiceAvsGroup('service_avs', 'Service Avs', 'an optional tech field'){
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
' loads the ServiceAvs element
include('azure-v2/Item/AzureVMwareSolution/ServiceAvs')
ServiceAvsGroup('service_avs', 'Service Avs', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

