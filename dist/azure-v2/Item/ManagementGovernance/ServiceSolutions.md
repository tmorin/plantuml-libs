# Service Solutions

```text
azure-v2/Item/ManagementGovernance/ServiceSolutions
```

```text
include('azure-v2/Item/ManagementGovernance/ServiceSolutions')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceSolutions.png)|![](ServiceSolutions.card.png)|![](ServiceSolutions.element.png)|![](ServiceSolutions.group.png)|



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
' loads the ServiceSolutions element
include('azure-v2/Item/ManagementGovernance/ServiceSolutions')
ServiceSolutionsCard('service_solutions', 'Service Solutions', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceSolutions element
include('azure-v2/Item/ManagementGovernance/ServiceSolutions')
ServiceSolutionsCard('service_solutions', 'Service Solutions', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceSolutions element
include('azure-v2/Item/ManagementGovernance/ServiceSolutions')
ServiceSolutions('service_solutions', 'Service Solutions', 'an optional tech field')
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
' loads the ServiceSolutions element
include('azure-v2/Item/ManagementGovernance/ServiceSolutions')
ServiceSolutions('service_solutions', 'Service Solutions', 'an optional tech field')
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
' loads the ServiceSolutions element
include('azure-v2/Item/ManagementGovernance/ServiceSolutions')
ServiceSolutionsGroup('service_solutions', 'Service Solutions', 'an optional tech field'){
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
' loads the ServiceSolutions element
include('azure-v2/Item/ManagementGovernance/ServiceSolutions')
ServiceSolutionsGroup('service_solutions', 'Service Solutions', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

