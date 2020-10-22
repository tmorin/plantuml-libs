# Aws Ec2

```text
aws-20200430/Item/Compute/AwsEc2
```

```text
include('aws-20200430/Item/Compute/AwsEc2')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsEc2.png)|![](AwsEc2.card.png)|![](AwsEc2.element.png)|![](AwsEc2.group.png)|



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
' loads the AwsEc2 element
include('aws-20200430/Item/Compute/AwsEc2')
AwsEc2Card('aws_ec_2', 'Aws Ec2', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsEc2 element
include('aws-20200430/Item/Compute/AwsEc2')
AwsEc2Card('aws_ec_2', 'Aws Ec2', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsEc2 element
include('aws-20200430/Item/Compute/AwsEc2')
AwsEc2('aws_ec_2', 'Aws Ec2', 'an optional tech field')
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
' loads the AwsEc2 element
include('aws-20200430/Item/Compute/AwsEc2')
AwsEc2('aws_ec_2', 'Aws Ec2', 'an optional tech field')
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
' loads the AwsEc2 element
include('aws-20200430/Item/Compute/AwsEc2')
AwsEc2Group('aws_ec_2', 'Aws Ec2', 'an optional tech field'){
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
' loads the AwsEc2 element
include('aws-20200430/Item/Compute/AwsEc2')
AwsEc2Group('aws_ec_2', 'Aws Ec2', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

