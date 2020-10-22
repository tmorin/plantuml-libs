# Service Policy

```text
azure-v2/Item/ManagementGovernance/ServicePolicy
```

```text
include('azure-v2/Item/ManagementGovernance/ServicePolicy')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServicePolicy.png)|![](ServicePolicy.card.png)|![](ServicePolicy.element.png)|![](ServicePolicy.group.png)|



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
' loads the ServicePolicy element
include('azure-v2/Item/ManagementGovernance/ServicePolicy')
ServicePolicyCard('service_policy', 'Service Policy', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServicePolicy element
include('azure-v2/Item/ManagementGovernance/ServicePolicy')
ServicePolicyCard('service_policy', 'Service Policy', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServicePolicy element
include('azure-v2/Item/ManagementGovernance/ServicePolicy')
ServicePolicy('service_policy', 'Service Policy', 'an optional tech field')
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
' loads the ServicePolicy element
include('azure-v2/Item/ManagementGovernance/ServicePolicy')
ServicePolicy('service_policy', 'Service Policy', 'an optional tech field')
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
' loads the ServicePolicy element
include('azure-v2/Item/ManagementGovernance/ServicePolicy')
ServicePolicyGroup('service_policy', 'Service Policy', 'an optional tech field'){
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
' loads the ServicePolicy element
include('azure-v2/Item/ManagementGovernance/ServicePolicy')
ServicePolicyGroup('service_policy', 'Service Policy', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

