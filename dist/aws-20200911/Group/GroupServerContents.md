# Group Server Contents

```text
aws-20200911/Group/GroupServerContents
```

```text
include('aws-20200911/Group/GroupServerContents')
```

|group|
|---|
|![](GroupServerContents.group.local.png)|



## group
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the GroupServerContents element
include('aws-20200911/Group/GroupServerContents')
GroupServerContents('group_server_contents', 'Group Server Contents', 'an optional tech field')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the GroupServerContents element
include('aws-20200911/Group/GroupServerContents')
GroupServerContents('group_server_contents', 'Group Server Contents', 'an optional tech field')
@enduml
```

