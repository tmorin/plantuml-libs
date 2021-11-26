# AmazonEc2Instances


```text
aws-20210730/Resource/Compute/AmazonEc2Instances
```

```text
include('aws-20210730/Resource/Compute/AmazonEc2Instances')
```



| Illustration | AmazonEc2Instances | AmazonEc2InstancesCard | AmazonEc2InstancesGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Resource/Compute/AmazonEc2Instances.png) | ![illustration for AmazonEc2Instances](../../../aws-20210730/Resource/Compute/AmazonEc2Instances.Local.png) | ![illustration for AmazonEc2InstancesCard](../../../aws-20210730/Resource/Compute/AmazonEc2InstancesCard.Local.png) | ![illustration for AmazonEc2InstancesGroup](../../../aws-20210730/Resource/Compute/AmazonEc2InstancesGroup.Local.png) |




## AmazonEc2Instances

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonEc2Instances
include('aws-20210730/Resource/Compute/AmazonEc2Instances')

' renders the element
AmazonEc2Instances('AmazonEc2Instances', 'Amazon Ec2 Instances', 'an optional tech label')
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonEc2Instances
include('aws-20210730/Resource/Compute/AmazonEc2Instances')

' renders the element
AmazonEc2Instances('AmazonEc2Instances', 'Amazon Ec2 Instances', 'an optional tech label')
@enduml
```

## AmazonEc2InstancesCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonEc2InstancesCard
include('aws-20210730/Resource/Compute/AmazonEc2Instances')

' renders the element
AmazonEc2InstancesCard('AmazonEc2InstancesCard', 'Amazon Ec2 Instances Card', 'an optional description')
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonEc2InstancesCard
include('aws-20210730/Resource/Compute/AmazonEc2Instances')

' renders the element
AmazonEc2InstancesCard('AmazonEc2InstancesCard', 'Amazon Ec2 Instances Card', 'an optional description')
@enduml
```

## AmazonEc2InstancesGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonEc2InstancesGroup
include('aws-20210730/Resource/Compute/AmazonEc2Instances')

' renders the element
AmazonEc2InstancesGroup('AmazonEc2InstancesGroup', 'Amazon Ec2 Instances Group', 'an optional tech label') {
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonEc2InstancesGroup
include('aws-20210730/Resource/Compute/AmazonEc2Instances')

' renders the element
AmazonEc2InstancesGroup('AmazonEc2InstancesGroup', 'Amazon Ec2 Instances Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

