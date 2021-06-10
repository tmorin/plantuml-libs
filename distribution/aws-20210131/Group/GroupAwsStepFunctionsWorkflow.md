# GroupAwsStepFunctionsWorkflow


```text
aws-20210131/Group/GroupAwsStepFunctionsWorkflow
```

```text
include('aws-20210131/Group/GroupAwsStepFunctionsWorkflow')
```



| Illustration | GroupAwsStepFunctionsWorkflow |
| :---: | :---: |
| ![illustration for Illustration](../../aws-20210131/Resource/GroupIcons/AwsStepFunction.png) | ![illustration for GroupAwsStepFunctionsWorkflow](../../aws-20210131/Group/GroupAwsStepFunctionsWorkflow.Local.png) |




## GroupAwsStepFunctionsWorkflow

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element GroupAwsStepFunctionsWorkflow
include('aws-20210131/Group/GroupAwsStepFunctionsWorkflow')

GroupAwsStepFunctionsWorkflow('GroupAwsStepFunctionsWorkflow', 'Group Aws Step Functions Workflow', 'an optional tech label') {
  note as note
  the content of the boundary
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

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element GroupAwsStepFunctionsWorkflow
include('aws-20210131/Group/GroupAwsStepFunctionsWorkflow')

GroupAwsStepFunctionsWorkflow('GroupAwsStepFunctionsWorkflow', 'Group Aws Step Functions Workflow', 'an optional tech label') {
  note as note
  the content of the boundary
  end note
}
@enduml
```

