# AmazonEc2ElasticIpAddress


```text
aws-20210131/Resource/Compute/AmazonEc2ElasticIpAddress
```

```text
include('aws-20210131/Resource/Compute/AmazonEc2ElasticIpAddress')
```



| Illustration | AmazonEc2ElasticIpAddress | AmazonEc2ElasticIpAddressCard | AmazonEc2ElasticIpAddressGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Resource/Compute/AmazonEc2ElasticIpAddress.png) | ![illustration for AmazonEc2ElasticIpAddress](../../../aws-20210131/Resource/Compute/AmazonEc2ElasticIpAddress.Local.png) | ![illustration for AmazonEc2ElasticIpAddressCard](../../../aws-20210131/Resource/Compute/AmazonEc2ElasticIpAddressCard.Local.png) | ![illustration for AmazonEc2ElasticIpAddressGroup](../../../aws-20210131/Resource/Compute/AmazonEc2ElasticIpAddressGroup.Local.png) |




## AmazonEc2ElasticIpAddress

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonEc2ElasticIpAddress
include('aws-20210131/Resource/Compute/AmazonEc2ElasticIpAddress')

' renders the element
AmazonEc2ElasticIpAddress('AmazonEc2ElasticIpAddress', 'Amazon Ec2 Elastic Ip Address', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonEc2ElasticIpAddress
include('aws-20210131/Resource/Compute/AmazonEc2ElasticIpAddress')

' renders the element
AmazonEc2ElasticIpAddress('AmazonEc2ElasticIpAddress', 'Amazon Ec2 Elastic Ip Address', 'an optional tech label')
@enduml
```

## AmazonEc2ElasticIpAddressCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonEc2ElasticIpAddressCard
include('aws-20210131/Resource/Compute/AmazonEc2ElasticIpAddress')

' renders the element
AmazonEc2ElasticIpAddressCard('AmazonEc2ElasticIpAddressCard', 'Amazon Ec2 Elastic Ip Address Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonEc2ElasticIpAddressCard
include('aws-20210131/Resource/Compute/AmazonEc2ElasticIpAddress')

' renders the element
AmazonEc2ElasticIpAddressCard('AmazonEc2ElasticIpAddressCard', 'Amazon Ec2 Elastic Ip Address Card', 'an optional description')
@enduml
```

## AmazonEc2ElasticIpAddressGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonEc2ElasticIpAddressGroup
include('aws-20210131/Resource/Compute/AmazonEc2ElasticIpAddress')

' renders the element
AmazonEc2ElasticIpAddressGroup('AmazonEc2ElasticIpAddressGroup', 'Amazon Ec2 Elastic Ip Address Group', 'an optional tech label') {
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

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonEc2ElasticIpAddressGroup
include('aws-20210131/Resource/Compute/AmazonEc2ElasticIpAddress')

' renders the element
AmazonEc2ElasticIpAddressGroup('AmazonEc2ElasticIpAddressGroup', 'Amazon Ec2 Elastic Ip Address Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

