# Aws Ec2 Rescue

```text
aws-20200430/Item/Compute/AwsEc2Rescue
```

```text
include('aws-20200430/Item/Compute/AwsEc2Rescue')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsEc2Rescue.png)|![](AwsEc2Rescue.card.png)|![](AwsEc2Rescue.element.png)|![](AwsEc2Rescue.group.png)|



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
' loads the AwsEc2Rescue element
include('aws-20200430/Item/Compute/AwsEc2Rescue')
AwsEc2RescueCard('aws_ec_2_rescue', 'Aws Ec2 Rescue', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsEc2Rescue element
include('aws-20200430/Item/Compute/AwsEc2Rescue')
AwsEc2RescueCard('aws_ec_2_rescue', 'Aws Ec2 Rescue', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsEc2Rescue element
include('aws-20200430/Item/Compute/AwsEc2Rescue')
AwsEc2Rescue('aws_ec_2_rescue', 'Aws Ec2 Rescue', 'an optional tech field')
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
' loads the AwsEc2Rescue element
include('aws-20200430/Item/Compute/AwsEc2Rescue')
AwsEc2Rescue('aws_ec_2_rescue', 'Aws Ec2 Rescue', 'an optional tech field')
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
' loads the AwsEc2Rescue element
include('aws-20200430/Item/Compute/AwsEc2Rescue')
AwsEc2RescueGroup('aws_ec_2_rescue', 'Aws Ec2 Rescue', 'an optional tech field'){
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
' loads the AwsEc2Rescue element
include('aws-20200430/Item/Compute/AwsEc2Rescue')
AwsEc2RescueGroup('aws_ec_2_rescue', 'Aws Ec2 Rescue', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

