# Management And Governance

```text
aws-20200430/Item/ManagementGovernance/ManagementAndGovernance
```

```text
include('aws-20200430/Item/ManagementGovernance/ManagementAndGovernance')
```

|icon|card|element|group|
|---|---|---|---|
|![](ManagementAndGovernance.png)|![](ManagementAndGovernance.card.png)|![](ManagementAndGovernance.element.png)|![](ManagementAndGovernance.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the ManagementAndGovernance element
include('aws-20200430/Item/ManagementGovernance/ManagementAndGovernance')
ManagementAndGovernanceCard('management_and_governance', 'Management And Governance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the ManagementAndGovernance element
include('aws-20200430/Item/ManagementGovernance/ManagementAndGovernance')
ManagementAndGovernanceCard('management_and_governance', 'Management And Governance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the ManagementAndGovernance element
include('aws-20200430/Item/ManagementGovernance/ManagementAndGovernance')
ManagementAndGovernance('management_and_governance', 'Management And Governance', 'an optional tech field')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the ManagementAndGovernance element
include('aws-20200430/Item/ManagementGovernance/ManagementAndGovernance')
ManagementAndGovernance('management_and_governance', 'Management And Governance', 'an optional tech field')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the ManagementAndGovernance element
include('aws-20200430/Item/ManagementGovernance/ManagementAndGovernance')
ManagementAndGovernanceGroup('management_and_governance', 'Management And Governance', 'an optional tech field'){
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the ManagementAndGovernance element
include('aws-20200430/Item/ManagementGovernance/ManagementAndGovernance')
ManagementAndGovernanceGroup('management_and_governance', 'Management And Governance', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

