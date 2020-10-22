# Group Docker Registry

```text
homecloud/Group/GroupDockerRegistry
```

```text
include('homecloud/Group/GroupDockerRegistry')
```

|group|
|---|
|![](GroupDockerRegistry.group.local.png)|



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
' loads the GroupDockerRegistry element
include('homecloud/Group/GroupDockerRegistry')
GroupDockerRegistry('group_docker_registry', 'Group Docker Registry', 'an optional tech field')
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
' loads the GroupDockerRegistry element
include('homecloud/Group/GroupDockerRegistry')
GroupDockerRegistry('group_docker_registry', 'Group Docker Registry', 'an optional tech field')
@enduml
```

