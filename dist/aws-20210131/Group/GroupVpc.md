# Group Vpc

```text
aws-20210131/Group/GroupVpc
```

```text
include('aws-20210131/Group/GroupVpc')
```

|group|
|---|
|![](GroupVpc.group.local.png)|



## group
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the GroupVpc element
include('aws-20210131/Group/GroupVpc')
GroupVpc('group_vpc', 'Group Vpc', 'an optional tech field')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the GroupVpc element
include('aws-20210131/Group/GroupVpc')
GroupVpc('group_vpc', 'Group Vpc', 'an optional tech field')
@enduml
```

