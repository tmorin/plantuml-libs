# Amazon Ec2 Spot Instance

```text
aws-20210131/Resource/Compute/AmazonEc2SpotInstance
```

```text
include('aws-20210131/Resource/Compute/AmazonEc2SpotInstance')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonEc2SpotInstance.png)|![](AmazonEc2SpotInstance.card.png)|![](AmazonEc2SpotInstance.element.png)|![](AmazonEc2SpotInstance.group.png)|



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
' loads the AmazonEc2SpotInstance element
include('aws-20210131/Resource/Compute/AmazonEc2SpotInstance')
AmazonEc2SpotInstanceCard('amazon_ec_2_spot_instance', 'Amazon Ec2 Spot Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonEc2SpotInstance element
include('aws-20210131/Resource/Compute/AmazonEc2SpotInstance')
AmazonEc2SpotInstanceCard('amazon_ec_2_spot_instance', 'Amazon Ec2 Spot Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonEc2SpotInstance element
include('aws-20210131/Resource/Compute/AmazonEc2SpotInstance')
AmazonEc2SpotInstance('amazon_ec_2_spot_instance', 'Amazon Ec2 Spot Instance', 'an optional tech field')
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
' loads the AmazonEc2SpotInstance element
include('aws-20210131/Resource/Compute/AmazonEc2SpotInstance')
AmazonEc2SpotInstance('amazon_ec_2_spot_instance', 'Amazon Ec2 Spot Instance', 'an optional tech field')
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
' loads the AmazonEc2SpotInstance element
include('aws-20210131/Resource/Compute/AmazonEc2SpotInstance')
AmazonEc2SpotInstanceGroup('amazon_ec_2_spot_instance', 'Amazon Ec2 Spot Instance', 'an optional tech field'){
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
' loads the AmazonEc2SpotInstance element
include('aws-20210131/Resource/Compute/AmazonEc2SpotInstance')
AmazonEc2SpotInstanceGroup('amazon_ec_2_spot_instance', 'Amazon Ec2 Spot Instance', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

