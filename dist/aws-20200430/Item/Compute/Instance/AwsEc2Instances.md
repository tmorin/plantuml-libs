# Aws Ec2 Instances

```text
aws-20200430/Item/Compute/Instance/AwsEc2Instances
```

```text
include('aws-20200430/Item/Compute/Instance/AwsEc2Instances')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsEc2Instances.png)|![](AwsEc2Instances.card.png)|![](AwsEc2Instances.element.png)|![](AwsEc2Instances.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsEc2Instances element
include('aws-20200430/Item/Compute/Instance/AwsEc2Instances')
AwsEc2InstancesCard('aws_ec_2_instances', 'Aws Ec2 Instances', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsEc2Instances element
include('aws-20200430/Item/Compute/Instance/AwsEc2Instances')
AwsEc2InstancesCard('aws_ec_2_instances', 'Aws Ec2 Instances', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```


## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsEc2Instances element
include('aws-20200430/Item/Compute/Instance/AwsEc2Instances')
AwsEc2Instances('aws_ec_2_instances', 'Aws Ec2 Instances', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsEc2Instances element
include('aws-20200430/Item/Compute/Instance/AwsEc2Instances')
AwsEc2Instances('aws_ec_2_instances', 'Aws Ec2 Instances', 'an optional tech field')
@enduml
```


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
' loads the AwsEc2Instances element
include('aws-20200430/Item/Compute/Instance/AwsEc2Instances')
AwsEc2InstancesGroup('aws_ec_2_instances', 'Aws Ec2 Instances', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsEc2Instances element
include('aws-20200430/Item/Compute/Instance/AwsEc2Instances')
AwsEc2InstancesGroup('aws_ec_2_instances', 'Aws Ec2 Instances', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

