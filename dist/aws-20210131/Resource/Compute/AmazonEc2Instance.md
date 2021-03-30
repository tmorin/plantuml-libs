# Amazon Ec2 Instance

```text
aws-20210131/Resource/Compute/AmazonEc2Instance
```

```text
include('aws-20210131/Resource/Compute/AmazonEc2Instance')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonEc2Instance.png)|![](AmazonEc2Instance.card.png)|![](AmazonEc2Instance.element.png)|![](AmazonEc2Instance.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AmazonEc2Instance element
include('aws-20210131/Resource/Compute/AmazonEc2Instance')
AmazonEc2InstanceCard('amazon_ec_2_instance', 'Amazon Ec2 Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AmazonEc2Instance element
include('aws-20210131/Resource/Compute/AmazonEc2Instance')
AmazonEc2InstanceCard('amazon_ec_2_instance', 'Amazon Ec2 Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AmazonEc2Instance element
include('aws-20210131/Resource/Compute/AmazonEc2Instance')
AmazonEc2Instance('amazon_ec_2_instance', 'Amazon Ec2 Instance', 'an optional tech field')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AmazonEc2Instance element
include('aws-20210131/Resource/Compute/AmazonEc2Instance')
AmazonEc2Instance('amazon_ec_2_instance', 'Amazon Ec2 Instance', 'an optional tech field')
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AmazonEc2Instance element
include('aws-20210131/Resource/Compute/AmazonEc2Instance')
AmazonEc2InstanceGroup('amazon_ec_2_instance', 'Amazon Ec2 Instance', 'an optional tech field'){
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
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AmazonEc2Instance element
include('aws-20210131/Resource/Compute/AmazonEc2Instance')
AmazonEc2InstanceGroup('amazon_ec_2_instance', 'Amazon Ec2 Instance', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

