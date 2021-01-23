# Group Optional Component

```text
gcp/Group/GroupOptionalComponent
```

```text
include('gcp/Group/GroupOptionalComponent')
```

|group|
|---|
|![](GroupOptionalComponent.group.local.png)|



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
' loads the GroupOptionalComponent element
include('gcp/Group/GroupOptionalComponent')
GroupOptionalComponent('group_optional_component', 'Group Optional Component', 'an optional tech field')
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
' loads the GroupOptionalComponent element
include('gcp/Group/GroupOptionalComponent')
GroupOptionalComponent('group_optional_component', 'Group Optional Component', 'an optional tech field')
@enduml
```

