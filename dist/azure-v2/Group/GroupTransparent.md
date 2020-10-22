# Group Transparent

```text
azure-v2/Group/GroupTransparent
```

```text
include('azure-v2/Group/GroupTransparent')
```

|group|
|---|
|![](GroupTransparent.group.local.png)|



## group
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the GroupTransparent element
include('azure-v2/Group/GroupTransparent')
GroupTransparent('group_transparent', 'Group Transparent', 'an optional tech field')
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
' loads the azure-v2 bootstrap
include('azure-v2/bootstrap')
' loads the GroupTransparent element
include('azure-v2/Group/GroupTransparent')
GroupTransparent('group_transparent', 'Group Transparent', 'an optional tech field')
@enduml
```

