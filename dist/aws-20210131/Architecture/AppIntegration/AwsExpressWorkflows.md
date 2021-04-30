# Aws Express Workflows

```text
aws-20210131/Architecture/AppIntegration/AwsExpressWorkflows
```

```text
include('aws-20210131/Architecture/AppIntegration/AwsExpressWorkflows')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsExpressWorkflows.png)|![](AwsExpressWorkflows.card.png)|![](AwsExpressWorkflows.element.png)|![](AwsExpressWorkflows.group.png)|



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
' loads the AwsExpressWorkflows element
include('aws-20210131/Architecture/AppIntegration/AwsExpressWorkflows')
AwsExpressWorkflowsCard('aws_express_workflows', 'Aws Express Workflows', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsExpressWorkflows element
include('aws-20210131/Architecture/AppIntegration/AwsExpressWorkflows')
AwsExpressWorkflowsCard('aws_express_workflows', 'Aws Express Workflows', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsExpressWorkflows element
include('aws-20210131/Architecture/AppIntegration/AwsExpressWorkflows')
AwsExpressWorkflows('aws_express_workflows', 'Aws Express Workflows', 'an optional tech field')
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
' loads the AwsExpressWorkflows element
include('aws-20210131/Architecture/AppIntegration/AwsExpressWorkflows')
AwsExpressWorkflows('aws_express_workflows', 'Aws Express Workflows', 'an optional tech field')
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
' loads the AwsExpressWorkflows element
include('aws-20210131/Architecture/AppIntegration/AwsExpressWorkflows')
AwsExpressWorkflowsGroup('aws_express_workflows', 'Aws Express Workflows', 'an optional tech field'){
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
' loads the AwsExpressWorkflows element
include('aws-20210131/Architecture/AppIntegration/AwsExpressWorkflows')
AwsExpressWorkflowsGroup('aws_express_workflows', 'Aws Express Workflows', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

