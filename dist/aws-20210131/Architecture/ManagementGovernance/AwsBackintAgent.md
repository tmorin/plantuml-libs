# Aws Backint Agent

```text
aws-20210131/Architecture/ManagementGovernance/AwsBackintAgent
```

```text
include('aws-20210131/Architecture/ManagementGovernance/AwsBackintAgent')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsBackintAgent.png)|![](AwsBackintAgent.card.png)|![](AwsBackintAgent.element.png)|![](AwsBackintAgent.group.png)|



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
' loads the AwsBackintAgent element
include('aws-20210131/Architecture/ManagementGovernance/AwsBackintAgent')
AwsBackintAgentCard('aws_backint_agent', 'Aws Backint Agent', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsBackintAgent element
include('aws-20210131/Architecture/ManagementGovernance/AwsBackintAgent')
AwsBackintAgentCard('aws_backint_agent', 'Aws Backint Agent', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsBackintAgent element
include('aws-20210131/Architecture/ManagementGovernance/AwsBackintAgent')
AwsBackintAgent('aws_backint_agent', 'Aws Backint Agent', 'an optional tech field')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsBackintAgent element
include('aws-20210131/Architecture/ManagementGovernance/AwsBackintAgent')
AwsBackintAgent('aws_backint_agent', 'Aws Backint Agent', 'an optional tech field')
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
' loads the AwsBackintAgent element
include('aws-20210131/Architecture/ManagementGovernance/AwsBackintAgent')
AwsBackintAgentGroup('aws_backint_agent', 'Aws Backint Agent', 'an optional tech field'){
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AwsBackintAgent element
include('aws-20210131/Architecture/ManagementGovernance/AwsBackintAgent')
AwsBackintAgentGroup('aws_backint_agent', 'Aws Backint Agent', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

