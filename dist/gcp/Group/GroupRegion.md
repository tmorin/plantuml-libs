# Group Region

```text
gcp/Group/GroupRegion
```

```text
include('gcp/Group/GroupRegion')
```

|group|
|---|
|![](GroupRegion.group.local.png)|



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
' loads the GroupRegion element
include('gcp/Group/GroupRegion')
GroupRegion('group_region', 'Group Region', 'an optional tech field')
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
' loads the GroupRegion element
include('gcp/Group/GroupRegion')
GroupRegion('group_region', 'Group Region', 'an optional tech field')
@enduml
```

