# Aws Ec2 Ami

```text
aws-20200430/Item/Compute/AwsEc2Ami
```

```text
include('aws-20200430/Item/Compute/AwsEc2Ami')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsEc2Ami.png)|![](AwsEc2Ami.card.png)|![](AwsEc2Ami.element.png)|![](AwsEc2Ami.group.png)|



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
' loads the AwsEc2Ami element
include('aws-20200430/Item/Compute/AwsEc2Ami')
AwsEc2AmiCard('aws_ec_2_ami', 'Aws Ec2 Ami', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsEc2Ami element
include('aws-20200430/Item/Compute/AwsEc2Ami')
AwsEc2AmiCard('aws_ec_2_ami', 'Aws Ec2 Ami', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsEc2Ami element
include('aws-20200430/Item/Compute/AwsEc2Ami')
AwsEc2Ami('aws_ec_2_ami', 'Aws Ec2 Ami', 'an optional tech field')
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
' loads the AwsEc2Ami element
include('aws-20200430/Item/Compute/AwsEc2Ami')
AwsEc2Ami('aws_ec_2_ami', 'Aws Ec2 Ami', 'an optional tech field')
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
' loads the AwsEc2Ami element
include('aws-20200430/Item/Compute/AwsEc2Ami')
AwsEc2AmiGroup('aws_ec_2_ami', 'Aws Ec2 Ami', 'an optional tech field'){
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
' loads the AwsEc2Ami element
include('aws-20200430/Item/Compute/AwsEc2Ami')
AwsEc2AmiGroup('aws_ec_2_ami', 'Aws Ec2 Ami', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

