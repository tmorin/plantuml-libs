# Group Zone

```text
gcp/Group/GroupZone
```

```text
include('gcp/Group/GroupZone')
```

|group|
|---|
|![](GroupZone.group.local.png)|



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
' loads the GroupZone element
include('gcp/Group/GroupZone')
GroupZone('group_zone', 'Group Zone', 'an optional tech field')
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
' loads the GroupZone element
include('gcp/Group/GroupZone')
GroupZone('group_zone', 'Group Zone', 'an optional tech field')
@enduml
```

