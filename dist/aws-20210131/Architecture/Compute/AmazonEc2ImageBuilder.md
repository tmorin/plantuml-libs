# Amazon Ec2 Image Builder

```text
aws-20210131/Architecture/Compute/AmazonEc2ImageBuilder
```

```text
include('aws-20210131/Architecture/Compute/AmazonEc2ImageBuilder')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonEc2ImageBuilder.png)|![](AmazonEc2ImageBuilder.card.png)|![](AmazonEc2ImageBuilder.element.png)|![](AmazonEc2ImageBuilder.group.png)|



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
' loads the AmazonEc2ImageBuilder element
include('aws-20210131/Architecture/Compute/AmazonEc2ImageBuilder')
AmazonEc2ImageBuilderCard('amazon_ec_2_image_builder', 'Amazon Ec2 Image Builder', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonEc2ImageBuilder element
include('aws-20210131/Architecture/Compute/AmazonEc2ImageBuilder')
AmazonEc2ImageBuilderCard('amazon_ec_2_image_builder', 'Amazon Ec2 Image Builder', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonEc2ImageBuilder element
include('aws-20210131/Architecture/Compute/AmazonEc2ImageBuilder')
AmazonEc2ImageBuilder('amazon_ec_2_image_builder', 'Amazon Ec2 Image Builder', 'an optional tech field')
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
' loads the AmazonEc2ImageBuilder element
include('aws-20210131/Architecture/Compute/AmazonEc2ImageBuilder')
AmazonEc2ImageBuilder('amazon_ec_2_image_builder', 'Amazon Ec2 Image Builder', 'an optional tech field')
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
' loads the AmazonEc2ImageBuilder element
include('aws-20210131/Architecture/Compute/AmazonEc2ImageBuilder')
AmazonEc2ImageBuilderGroup('amazon_ec_2_image_builder', 'Amazon Ec2 Image Builder', 'an optional tech field'){
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
' loads the AmazonEc2ImageBuilder element
include('aws-20210131/Architecture/Compute/AmazonEc2ImageBuilder')
AmazonEc2ImageBuilderGroup('amazon_ec_2_image_builder', 'Amazon Ec2 Image Builder', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```
