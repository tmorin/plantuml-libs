# Group Project Zone

```text
gcp/Group/GroupProjectZone
```

```text
include('gcp/Group/GroupProjectZone')
```

|group|
|---|
|![](GroupProjectZone.group.local.png)|



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
' loads the GroupProjectZone element
include('gcp/Group/GroupProjectZone')
GroupProjectZone('group_project_zone', 'Group Project Zone', 'an optional tech field')
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
' loads the GroupProjectZone element
include('gcp/Group/GroupProjectZone')
GroupProjectZone('group_project_zone', 'Group Project Zone', 'an optional tech field')
@enduml
```

