# Group Security

```text
aws-20210131/Group/GroupSecurity
```

```text
include('aws-20210131/Group/GroupSecurity')
```

|group|
|---|
|![](GroupSecurity.group.local.png)|



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
' loads the GroupSecurity element
include('aws-20210131/Group/GroupSecurity')
GroupSecurity('group_security', 'Group Security', 'an optional tech field')
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
' loads the GroupSecurity element
include('aws-20210131/Group/GroupSecurity')
GroupSecurity('group_security', 'Group Security', 'an optional tech field')
@enduml
```

