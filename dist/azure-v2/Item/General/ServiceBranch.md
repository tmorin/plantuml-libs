# Service Branch

```text
azure-v2/Item/General/ServiceBranch
```

```text
include('azure-v2/Item/General/ServiceBranch')
```

|icon|card|element|group|
|---|---|---|---|
|![](ServiceBranch.png)|![](ServiceBranch.card.png)|![](ServiceBranch.element.png)|![](ServiceBranch.group.png)|



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
' loads the ServiceBranch element
include('azure-v2/Item/General/ServiceBranch')
ServiceBranchCard('service_branch', 'Service Branch', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceBranch element
include('azure-v2/Item/General/ServiceBranch')
ServiceBranchCard('service_branch', 'Service Branch', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the ServiceBranch element
include('azure-v2/Item/General/ServiceBranch')
ServiceBranch('service_branch', 'Service Branch', 'an optional tech field')
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
' loads the ServiceBranch element
include('azure-v2/Item/General/ServiceBranch')
ServiceBranch('service_branch', 'Service Branch', 'an optional tech field')
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
' loads the ServiceBranch element
include('azure-v2/Item/General/ServiceBranch')
ServiceBranchGroup('service_branch', 'Service Branch', 'an optional tech field'){
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
' loads the ServiceBranch element
include('azure-v2/Item/General/ServiceBranch')
ServiceBranchGroup('service_branch', 'Service Branch', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

