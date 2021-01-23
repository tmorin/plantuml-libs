# Group System

```text
gcp/Group/GroupSystem
```

```text
include('gcp/Group/GroupSystem')
```

|group|
|---|
|![](GroupSystem.group.local.png)|



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
' loads the GroupSystem element
include('gcp/Group/GroupSystem')
GroupSystem('group_system', 'Group System', 'an optional tech field')
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
' loads the GroupSystem element
include('gcp/Group/GroupSystem')
GroupSystem('group_system', 'Group System', 'an optional tech field')
@enduml
```

