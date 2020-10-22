# Ec2 Elastic Ip Address

```text
aws-20200911/Resource/Compute/Ec2ElasticIpAddress
```

```text
include('aws-20200911/Resource/Compute/Ec2ElasticIpAddress')
```

|icon|card|element|group|
|---|---|---|---|
|![](Ec2ElasticIpAddress.png)|![](Ec2ElasticIpAddress.card.png)|![](Ec2ElasticIpAddress.element.png)|![](Ec2ElasticIpAddress.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the Ec2ElasticIpAddress element
include('aws-20200911/Resource/Compute/Ec2ElasticIpAddress')
Ec2ElasticIpAddressCard('ec_2_elastic_ip_address', 'Ec2 Elastic Ip Address', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the Ec2ElasticIpAddress element
include('aws-20200911/Resource/Compute/Ec2ElasticIpAddress')
Ec2ElasticIpAddressCard('ec_2_elastic_ip_address', 'Ec2 Elastic Ip Address', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the Ec2ElasticIpAddress element
include('aws-20200911/Resource/Compute/Ec2ElasticIpAddress')
Ec2ElasticIpAddress('ec_2_elastic_ip_address', 'Ec2 Elastic Ip Address', 'an optional tech field')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the Ec2ElasticIpAddress element
include('aws-20200911/Resource/Compute/Ec2ElasticIpAddress')
Ec2ElasticIpAddress('ec_2_elastic_ip_address', 'Ec2 Elastic Ip Address', 'an optional tech field')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the Ec2ElasticIpAddress element
include('aws-20200911/Resource/Compute/Ec2ElasticIpAddress')
Ec2ElasticIpAddressGroup('ec_2_elastic_ip_address', 'Ec2 Elastic Ip Address', 'an optional tech field'){
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the Ec2ElasticIpAddress element
include('aws-20200911/Resource/Compute/Ec2ElasticIpAddress')
Ec2ElasticIpAddressGroup('ec_2_elastic_ip_address', 'Ec2 Elastic Ip Address', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

