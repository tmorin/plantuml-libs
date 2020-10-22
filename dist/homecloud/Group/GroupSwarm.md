# Group Swarm

```text
homecloud/Group/GroupSwarm
```

```text
include('homecloud/Group/GroupSwarm')
```

|group|
|---|
|![](GroupSwarm.group.local.png)|



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
' loads the GroupSwarm element
include('homecloud/Group/GroupSwarm')
GroupSwarm('group_swarm', 'Group Swarm', 'an optional tech field')
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
' loads the GroupSwarm element
include('homecloud/Group/GroupSwarm')
GroupSwarm('group_swarm', 'Group Swarm', 'an optional tech field')
@enduml
```

