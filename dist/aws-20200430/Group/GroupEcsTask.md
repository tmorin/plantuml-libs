# Group Ecs Task

```text
aws-20200430/Group/GroupEcsTask
```

```text
include('aws-20200430/Group/GroupEcsTask')
```

|group|
|---|
|![](GroupEcsTask.group.local.png)|



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
' loads the GroupEcsTask element
include('aws-20200430/Group/GroupEcsTask')
GroupEcsTask('group_ecs_task', 'Group Ecs Task', 'an optional tech field')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the GroupEcsTask element
include('aws-20200430/Group/GroupEcsTask')
GroupEcsTask('group_ecs_task', 'Group Ecs Task', 'an optional tech field')
@enduml
```

