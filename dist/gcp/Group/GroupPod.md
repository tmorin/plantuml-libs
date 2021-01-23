# Group Pod

```text
gcp/Group/GroupPod
```

```text
include('gcp/Group/GroupPod')
```

|group|
|---|
|![](GroupPod.group.local.png)|



## group
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the GroupPod element
include('gcp/Group/GroupPod')
GroupPod('group_pod', 'Group Pod', 'an optional tech field')
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
' loads the gcp bootstrap
include('gcp/bootstrap')
' loads the GroupPod element
include('gcp/Group/GroupPod')
GroupPod('group_pod', 'Group Pod', 'an optional tech field')
@enduml
```

