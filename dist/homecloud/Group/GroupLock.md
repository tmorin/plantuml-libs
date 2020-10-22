# Group Lock

```text
homecloud/Group/GroupLock
```

```text
include('homecloud/Group/GroupLock')
```

|group|
|---|
|![](GroupLock.group.local.png)|



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
' loads the GroupLock element
include('homecloud/Group/GroupLock')
GroupLock('group_lock', 'Group Lock', 'an optional tech field')
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
' loads the GroupLock element
include('homecloud/Group/GroupLock')
GroupLock('group_lock', 'Group Lock', 'an optional tech field')
@enduml
```

