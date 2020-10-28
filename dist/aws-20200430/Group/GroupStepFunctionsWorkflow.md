# Group Step Functions Workflow

```text
aws-20200430/Group/GroupStepFunctionsWorkflow
```

```text
include('aws-20200430/Group/GroupStepFunctionsWorkflow')
```

|group|
|---|
|![](GroupStepFunctionsWorkflow.group.local.png)|



## group
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/master/generate-all-libraries/public"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200430 style
include('aws-20200430/style')
' loads the GroupStepFunctionsWorkflow element
include('aws-20200430/Group/GroupStepFunctionsWorkflow')
GroupStepFunctionsWorkflow('group_step_functions_workflow', 'Group Step Functions Workflow', 'an optional tech field')
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
' loads the aws-20200430 style
include('aws-20200430/style')
' loads the GroupStepFunctionsWorkflow element
include('aws-20200430/Group/GroupStepFunctionsWorkflow')
GroupStepFunctionsWorkflow('group_step_functions_workflow', 'Group Step Functions Workflow', 'an optional tech field')
@enduml
```

