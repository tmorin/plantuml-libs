# Aws Ec2 Auto Scaling

```text
aws-20200430/Item/Compute/AwsEc2AutoScaling
```

```text
include('aws-20200430/Item/Compute/AwsEc2AutoScaling')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsEc2AutoScaling.png)|![](AwsEc2AutoScaling.card.png)|![](AwsEc2AutoScaling.element.png)|![](AwsEc2AutoScaling.group.png)|



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
' loads the AwsEc2AutoScaling element
include('aws-20200430/Item/Compute/AwsEc2AutoScaling')
AwsEc2AutoScalingCard('aws_ec_2_auto_scaling', 'Aws Ec2 Auto Scaling', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsEc2AutoScaling element
include('aws-20200430/Item/Compute/AwsEc2AutoScaling')
AwsEc2AutoScalingCard('aws_ec_2_auto_scaling', 'Aws Ec2 Auto Scaling', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsEc2AutoScaling element
include('aws-20200430/Item/Compute/AwsEc2AutoScaling')
AwsEc2AutoScaling('aws_ec_2_auto_scaling', 'Aws Ec2 Auto Scaling', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsEc2AutoScaling element
include('aws-20200430/Item/Compute/AwsEc2AutoScaling')
AwsEc2AutoScaling('aws_ec_2_auto_scaling', 'Aws Ec2 Auto Scaling', 'an optional tech field')
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
' loads the AwsEc2AutoScaling element
include('aws-20200430/Item/Compute/AwsEc2AutoScaling')
AwsEc2AutoScalingGroup('aws_ec_2_auto_scaling', 'Aws Ec2 Auto Scaling', 'an optional tech field'){
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
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsEc2AutoScaling element
include('aws-20200430/Item/Compute/AwsEc2AutoScaling')
AwsEc2AutoScalingGroup('aws_ec_2_auto_scaling', 'Aws Ec2 Auto Scaling', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

