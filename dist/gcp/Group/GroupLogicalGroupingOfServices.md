# Group Logical Grouping Of Services

```text
gcp/Group/GroupLogicalGroupingOfServices
```

```text
include('gcp/Group/GroupLogicalGroupingOfServices')
```

|group|
|---|
|![](GroupLogicalGroupingOfServices.group.local.png)|



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
' loads the GroupLogicalGroupingOfServices element
include('gcp/Group/GroupLogicalGroupingOfServices')
GroupLogicalGroupingOfServices('group_logical_grouping_of_services', 'Group Logical Grouping Of Services', 'an optional tech field')
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
' loads the GroupLogicalGroupingOfServices element
include('gcp/Group/GroupLogicalGroupingOfServices')
GroupLogicalGroupingOfServices('group_logical_grouping_of_services', 'Group Logical Grouping Of Services', 'an optional tech field')
@enduml
```

