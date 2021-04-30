# Management Governance

```text
aws-20210131/Category/ManagementGovernance
```

```text
include('aws-20210131/Category/ManagementGovernance')
```

|icon|card|element|group|
|---|---|---|---|
|![](ManagementGovernance.png)|![](ManagementGovernance.card.png)|![](ManagementGovernance.element.png)|![](ManagementGovernance.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the ManagementGovernance element
include('aws-20210131/Category/ManagementGovernance')
ManagementGovernanceCard('management_governance', 'Management Governance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the ManagementGovernance element
include('aws-20210131/Category/ManagementGovernance')
ManagementGovernanceCard('management_governance', 'Management Governance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the ManagementGovernance element
include('aws-20210131/Category/ManagementGovernance')
ManagementGovernance('management_governance', 'Management Governance', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the ManagementGovernance element
include('aws-20210131/Category/ManagementGovernance')
ManagementGovernance('management_governance', 'Management Governance', 'an optional tech field')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the ManagementGovernance element
include('aws-20210131/Category/ManagementGovernance')
ManagementGovernanceGroup('management_governance', 'Management Governance', 'an optional tech field'){
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
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the ManagementGovernance element
include('aws-20210131/Category/ManagementGovernance')
ManagementGovernanceGroup('management_governance', 'Management Governance', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

