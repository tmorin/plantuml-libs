# Group Ec2 Instance Contents

```text
aws-20200430/Group/GroupEc2InstanceContents
```

```text
include('aws-20200430/Group/GroupEc2InstanceContents')
```

|group|
|---|
|![](GroupEc2InstanceContents.group.local.png)|



## group
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the GroupEc2InstanceContents element
include('aws-20200430/Group/GroupEc2InstanceContents')
GroupEc2InstanceContents('group_ec_2_instance_contents', 'Group Ec2 Instance Contents', 'an optional tech field')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the GroupEc2InstanceContents element
include('aws-20200430/Group/GroupEc2InstanceContents')
GroupEc2InstanceContents('group_ec_2_instance_contents', 'Group Ec2 Instance Contents', 'an optional tech field')
@enduml
```

