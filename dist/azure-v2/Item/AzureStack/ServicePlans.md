# Service Plans

```text
azure-v2/Item/AzureStack/ServicePlans
```

```text
include('azure-v2/Item/AzureStack/ServicePlans')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServicePlans.png)|![](ServicePlans.card.png)|![](ServicePlans.element.png)|![](ServicePlans.group.png)|



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
' loads the ServicePlans element
include('azure-v2/Item/AzureStack/ServicePlans')
ServicePlansCard('service_plans', 'Service Plans', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServicePlans element
include('azure-v2/Item/AzureStack/ServicePlans')
ServicePlansCard('service_plans', 'Service Plans', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServicePlans element
include('azure-v2/Item/AzureStack/ServicePlans')
ServicePlans('service_plans', 'Service Plans', 'an optional tech field')
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
' loads the ServicePlans element
include('azure-v2/Item/AzureStack/ServicePlans')
ServicePlans('service_plans', 'Service Plans', 'an optional tech field')
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
' loads the ServicePlans element
include('azure-v2/Item/AzureStack/ServicePlans')
ServicePlansGroup('service_plans', 'Service Plans', 'an optional tech field'){
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
' loads the ServicePlans element
include('azure-v2/Item/AzureStack/ServicePlans')
ServicePlansGroup('service_plans', 'Service Plans', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

