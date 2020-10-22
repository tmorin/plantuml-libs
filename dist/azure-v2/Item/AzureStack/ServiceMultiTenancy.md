# Service Multi Tenancy

```text
azure-v2/Item/AzureStack/ServiceMultiTenancy
```

```text
include('azure-v2/Item/AzureStack/ServiceMultiTenancy')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceMultiTenancy.png)|![](ServiceMultiTenancy.card.png)|![](ServiceMultiTenancy.element.png)|![](ServiceMultiTenancy.group.png)|



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
' loads the ServiceMultiTenancy element
include('azure-v2/Item/AzureStack/ServiceMultiTenancy')
ServiceMultiTenancyCard('service_multi_tenancy', 'Service Multi Tenancy', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceMultiTenancy element
include('azure-v2/Item/AzureStack/ServiceMultiTenancy')
ServiceMultiTenancyCard('service_multi_tenancy', 'Service Multi Tenancy', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceMultiTenancy element
include('azure-v2/Item/AzureStack/ServiceMultiTenancy')
ServiceMultiTenancy('service_multi_tenancy', 'Service Multi Tenancy', 'an optional tech field')
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
' loads the ServiceMultiTenancy element
include('azure-v2/Item/AzureStack/ServiceMultiTenancy')
ServiceMultiTenancy('service_multi_tenancy', 'Service Multi Tenancy', 'an optional tech field')
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
' loads the ServiceMultiTenancy element
include('azure-v2/Item/AzureStack/ServiceMultiTenancy')
ServiceMultiTenancyGroup('service_multi_tenancy', 'Service Multi Tenancy', 'an optional tech field'){
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
' loads the ServiceMultiTenancy element
include('azure-v2/Item/AzureStack/ServiceMultiTenancy')
ServiceMultiTenancyGroup('service_multi_tenancy', 'Service Multi Tenancy', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

