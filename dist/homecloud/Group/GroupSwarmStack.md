# Group Swarm Stack

```text
homecloud/Group/GroupSwarmStack
```

```text
include('homecloud/Group/GroupSwarmStack')
```

|group|
|---|
|![](GroupSwarmStack.group.local.png)|



## group
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the homecloud bootstrap
include('homecloud/bootstrap')
' loads the GroupSwarmStack element
include('homecloud/Group/GroupSwarmStack')
GroupSwarmStack('group_swarm_stack', 'Group Swarm Stack', 'an optional tech field')
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
' loads the homecloud bootstrap
include('homecloud/bootstrap')
' loads the GroupSwarmStack element
include('homecloud/Group/GroupSwarmStack')
GroupSwarmStack('group_swarm_stack', 'Group Swarm Stack', 'an optional tech field')
@enduml
```

