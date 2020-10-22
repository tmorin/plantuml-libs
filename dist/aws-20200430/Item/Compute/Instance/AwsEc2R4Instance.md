# Aws Ec2 R4 Instance

```text
aws-20200430/Item/Compute/Instance/AwsEc2R4Instance
```

```text
include('aws-20200430/Item/Compute/Instance/AwsEc2R4Instance')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsEc2R4Instance.png)|![](AwsEc2R4Instance.card.png)|![](AwsEc2R4Instance.element.png)|![](AwsEc2R4Instance.group.png)|



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
' loads the AwsEc2R4Instance element
include('aws-20200430/Item/Compute/Instance/AwsEc2R4Instance')
AwsEc2R4InstanceCard('aws_ec_2_r_4_instance', 'Aws Ec2 R4 Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsEc2R4Instance element
include('aws-20200430/Item/Compute/Instance/AwsEc2R4Instance')
AwsEc2R4InstanceCard('aws_ec_2_r_4_instance', 'Aws Ec2 R4 Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsEc2R4Instance element
include('aws-20200430/Item/Compute/Instance/AwsEc2R4Instance')
AwsEc2R4Instance('aws_ec_2_r_4_instance', 'Aws Ec2 R4 Instance', 'an optional tech field')
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
' loads the AwsEc2R4Instance element
include('aws-20200430/Item/Compute/Instance/AwsEc2R4Instance')
AwsEc2R4Instance('aws_ec_2_r_4_instance', 'Aws Ec2 R4 Instance', 'an optional tech field')
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
' loads the AwsEc2R4Instance element
include('aws-20200430/Item/Compute/Instance/AwsEc2R4Instance')
AwsEc2R4InstanceGroup('aws_ec_2_r_4_instance', 'Aws Ec2 R4 Instance', 'an optional tech field'){
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
' loads the AwsEc2R4Instance element
include('aws-20200430/Item/Compute/Instance/AwsEc2R4Instance')
AwsEc2R4InstanceGroup('aws_ec_2_r_4_instance', 'Aws Ec2 R4 Instance', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

