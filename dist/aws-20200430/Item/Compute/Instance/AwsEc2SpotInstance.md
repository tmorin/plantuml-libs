# Aws Ec2 Spot Instance

```text
aws-20200430/Item/Compute/Instance/AwsEc2SpotInstance
```

```text
include('aws-20200430/Item/Compute/Instance/AwsEc2SpotInstance')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsEc2SpotInstance.png)|![](AwsEc2SpotInstance.card.png)|![](AwsEc2SpotInstance.element.png)|![](AwsEc2SpotInstance.group.png)|



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
' loads the AwsEc2SpotInstance element
include('aws-20200430/Item/Compute/Instance/AwsEc2SpotInstance')
AwsEc2SpotInstanceCard('aws_ec_2_spot_instance', 'Aws Ec2 Spot Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsEc2SpotInstance element
include('aws-20200430/Item/Compute/Instance/AwsEc2SpotInstance')
AwsEc2SpotInstanceCard('aws_ec_2_spot_instance', 'Aws Ec2 Spot Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsEc2SpotInstance element
include('aws-20200430/Item/Compute/Instance/AwsEc2SpotInstance')
AwsEc2SpotInstance('aws_ec_2_spot_instance', 'Aws Ec2 Spot Instance', 'an optional tech field')
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
' loads the AwsEc2SpotInstance element
include('aws-20200430/Item/Compute/Instance/AwsEc2SpotInstance')
AwsEc2SpotInstance('aws_ec_2_spot_instance', 'Aws Ec2 Spot Instance', 'an optional tech field')
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
' loads the AwsEc2SpotInstance element
include('aws-20200430/Item/Compute/Instance/AwsEc2SpotInstance')
AwsEc2SpotInstanceGroup('aws_ec_2_spot_instance', 'Aws Ec2 Spot Instance', 'an optional tech field'){
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
' loads the AwsEc2SpotInstance element
include('aws-20200430/Item/Compute/Instance/AwsEc2SpotInstance')
AwsEc2SpotInstanceGroup('aws_ec_2_spot_instance', 'Aws Ec2 Spot Instance', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

