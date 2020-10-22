# Aws Ec2 I3 Instance

```text
aws-20200430/Item/Compute/Instance/AwsEc2I3Instance
```

```text
include('aws-20200430/Item/Compute/Instance/AwsEc2I3Instance')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsEc2I3Instance.png)|![](AwsEc2I3Instance.card.png)|![](AwsEc2I3Instance.element.png)|![](AwsEc2I3Instance.group.png)|



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
' loads the AwsEc2I3Instance element
include('aws-20200430/Item/Compute/Instance/AwsEc2I3Instance')
AwsEc2I3InstanceCard('aws_ec_2_i_3_instance', 'Aws Ec2 I3 Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsEc2I3Instance element
include('aws-20200430/Item/Compute/Instance/AwsEc2I3Instance')
AwsEc2I3InstanceCard('aws_ec_2_i_3_instance', 'Aws Ec2 I3 Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsEc2I3Instance element
include('aws-20200430/Item/Compute/Instance/AwsEc2I3Instance')
AwsEc2I3Instance('aws_ec_2_i_3_instance', 'Aws Ec2 I3 Instance', 'an optional tech field')
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
' loads the AwsEc2I3Instance element
include('aws-20200430/Item/Compute/Instance/AwsEc2I3Instance')
AwsEc2I3Instance('aws_ec_2_i_3_instance', 'Aws Ec2 I3 Instance', 'an optional tech field')
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
' loads the AwsEc2I3Instance element
include('aws-20200430/Item/Compute/Instance/AwsEc2I3Instance')
AwsEc2I3InstanceGroup('aws_ec_2_i_3_instance', 'Aws Ec2 I3 Instance', 'an optional tech field'){
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
' loads the AwsEc2I3Instance element
include('aws-20200430/Item/Compute/Instance/AwsEc2I3Instance')
AwsEc2I3InstanceGroup('aws_ec_2_i_3_instance', 'Aws Ec2 I3 Instance', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

