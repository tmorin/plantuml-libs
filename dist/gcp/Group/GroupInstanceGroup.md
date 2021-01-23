# Group Instance Group

```text
gcp/Group/GroupInstanceGroup
```

```text
include('gcp/Group/GroupInstanceGroup')
```

|group|
|---|
|![](GroupInstanceGroup.group.local.png)|



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
' loads the GroupInstanceGroup element
include('gcp/Group/GroupInstanceGroup')
GroupInstanceGroup('group_instance_group', 'Group Instance Group', 'an optional tech field')
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
' loads the GroupInstanceGroup element
include('gcp/Group/GroupInstanceGroup')
GroupInstanceGroup('group_instance_group', 'Group Instance Group', 'an optional tech field')
@enduml
```

