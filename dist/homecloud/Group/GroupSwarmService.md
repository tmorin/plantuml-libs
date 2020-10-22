# Group Swarm Service

```text
homecloud/Group/GroupSwarmService
```

```text
include('homecloud/Group/GroupSwarmService')
```

|group|
|---|
|![](GroupSwarmService.group.local.png)|



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
' loads the GroupSwarmService element
include('homecloud/Group/GroupSwarmService')
GroupSwarmService('group_swarm_service', 'Group Swarm Service', 'an optional tech field')
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
' loads the GroupSwarmService element
include('homecloud/Group/GroupSwarmService')
GroupSwarmService('group_swarm_service', 'Group Swarm Service', 'an optional tech field')
@enduml
```

