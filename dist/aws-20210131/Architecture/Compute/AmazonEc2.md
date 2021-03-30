# Amazon Ec2

```text
aws-20210131/Architecture/Compute/AmazonEc2
```

```text
include('aws-20210131/Architecture/Compute/AmazonEc2')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonEc2.png)|![](AmazonEc2.card.png)|![](AmazonEc2.element.png)|![](AmazonEc2.group.png)|



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
' loads the AmazonEc2 element
include('aws-20210131/Architecture/Compute/AmazonEc2')
AmazonEc2Card('amazon_ec_2', 'Amazon Ec2', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonEc2 element
include('aws-20210131/Architecture/Compute/AmazonEc2')
AmazonEc2Card('amazon_ec_2', 'Amazon Ec2', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonEc2 element
include('aws-20210131/Architecture/Compute/AmazonEc2')
AmazonEc2('amazon_ec_2', 'Amazon Ec2', 'an optional tech field')
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
' loads the AmazonEc2 element
include('aws-20210131/Architecture/Compute/AmazonEc2')
AmazonEc2('amazon_ec_2', 'Amazon Ec2', 'an optional tech field')
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
' loads the AmazonEc2 element
include('aws-20210131/Architecture/Compute/AmazonEc2')
AmazonEc2Group('amazon_ec_2', 'Amazon Ec2', 'an optional tech field'){
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
' loads the AmazonEc2 element
include('aws-20210131/Architecture/Compute/AmazonEc2')
AmazonEc2Group('amazon_ec_2', 'Amazon Ec2', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

