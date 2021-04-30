# Amazon Ec2 Db Instance

```text
aws-20210131/Resource/Compute/AmazonEc2DbInstance
```

```text
include('aws-20210131/Resource/Compute/AmazonEc2DbInstance')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonEc2DbInstance.png)|![](AmazonEc2DbInstance.card.png)|![](AmazonEc2DbInstance.element.png)|![](AmazonEc2DbInstance.group.png)|



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
' loads the AmazonEc2DbInstance element
include('aws-20210131/Resource/Compute/AmazonEc2DbInstance')
AmazonEc2DbInstanceCard('amazon_ec_2_db_instance', 'Amazon Ec2 Db Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonEc2DbInstance element
include('aws-20210131/Resource/Compute/AmazonEc2DbInstance')
AmazonEc2DbInstanceCard('amazon_ec_2_db_instance', 'Amazon Ec2 Db Instance', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonEc2DbInstance element
include('aws-20210131/Resource/Compute/AmazonEc2DbInstance')
AmazonEc2DbInstance('amazon_ec_2_db_instance', 'Amazon Ec2 Db Instance', 'an optional tech field')
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
' loads the AmazonEc2DbInstance element
include('aws-20210131/Resource/Compute/AmazonEc2DbInstance')
AmazonEc2DbInstance('amazon_ec_2_db_instance', 'Amazon Ec2 Db Instance', 'an optional tech field')
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
' loads the AmazonEc2DbInstance element
include('aws-20210131/Resource/Compute/AmazonEc2DbInstance')
AmazonEc2DbInstanceGroup('amazon_ec_2_db_instance', 'Amazon Ec2 Db Instance', 'an optional tech field'){
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
' loads the AmazonEc2DbInstance element
include('aws-20210131/Resource/Compute/AmazonEc2DbInstance')
AmazonEc2DbInstanceGroup('amazon_ec_2_db_instance', 'Amazon Ec2 Db Instance', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

