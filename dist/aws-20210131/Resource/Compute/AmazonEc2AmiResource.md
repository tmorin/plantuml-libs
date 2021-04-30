# Amazon Ec2 Ami Resource

```text
aws-20210131/Resource/Compute/AmazonEc2AmiResource
```

```text
include('aws-20210131/Resource/Compute/AmazonEc2AmiResource')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonEc2AmiResource.png)|![](AmazonEc2AmiResource.card.png)|![](AmazonEc2AmiResource.element.png)|![](AmazonEc2AmiResource.group.png)|



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
' loads the AmazonEc2AmiResource element
include('aws-20210131/Resource/Compute/AmazonEc2AmiResource')
AmazonEc2AmiResourceCard('amazon_ec_2_ami_resource', 'Amazon Ec2 Ami Resource', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonEc2AmiResource element
include('aws-20210131/Resource/Compute/AmazonEc2AmiResource')
AmazonEc2AmiResourceCard('amazon_ec_2_ami_resource', 'Amazon Ec2 Ami Resource', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonEc2AmiResource element
include('aws-20210131/Resource/Compute/AmazonEc2AmiResource')
AmazonEc2AmiResource('amazon_ec_2_ami_resource', 'Amazon Ec2 Ami Resource', 'an optional tech field')
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
' loads the AmazonEc2AmiResource element
include('aws-20210131/Resource/Compute/AmazonEc2AmiResource')
AmazonEc2AmiResource('amazon_ec_2_ami_resource', 'Amazon Ec2 Ami Resource', 'an optional tech field')
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
' loads the AmazonEc2AmiResource element
include('aws-20210131/Resource/Compute/AmazonEc2AmiResource')
AmazonEc2AmiResourceGroup('amazon_ec_2_ami_resource', 'Amazon Ec2 Ami Resource', 'an optional tech field'){
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
' loads the AmazonEc2AmiResource element
include('aws-20210131/Resource/Compute/AmazonEc2AmiResource')
AmazonEc2AmiResourceGroup('amazon_ec_2_ami_resource', 'Amazon Ec2 Ami Resource', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

