# AmazonEc2P2Instance


```text
aws-20210730/Resource/Compute/AmazonEc2P2Instance
```

```text
include('aws-20210730/Resource/Compute/AmazonEc2P2Instance')
```



| Illustration | AmazonEc2P2Instance | AmazonEc2P2InstanceCard | AmazonEc2P2InstanceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Resource/Compute/AmazonEc2P2Instance.png) | ![illustration for AmazonEc2P2Instance](../../../aws-20210730/Resource/Compute/AmazonEc2P2Instance.Local.png) | ![illustration for AmazonEc2P2InstanceCard](../../../aws-20210730/Resource/Compute/AmazonEc2P2InstanceCard.Local.png) | ![illustration for AmazonEc2P2InstanceGroup](../../../aws-20210730/Resource/Compute/AmazonEc2P2InstanceGroup.Local.png) |




## AmazonEc2P2Instance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonEc2P2Instance
include('aws-20210730/Resource/Compute/AmazonEc2P2Instance')

' renders the element
AmazonEc2P2Instance('AmazonEc2P2Instance', 'Amazon Ec2 P2 Instance', 'an optional tech label')
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

' loads the Item which embeds the element AmazonEc2P2Instance
include('aws-20210730/Resource/Compute/AmazonEc2P2Instance')

' renders the element
AmazonEc2P2Instance('AmazonEc2P2Instance', 'Amazon Ec2 P2 Instance', 'an optional tech label')
@enduml
```

## AmazonEc2P2InstanceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonEc2P2InstanceCard
include('aws-20210730/Resource/Compute/AmazonEc2P2Instance')

' renders the element
AmazonEc2P2InstanceCard('AmazonEc2P2InstanceCard', 'Amazon Ec2 P2 Instance Card', 'an optional description')
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

' loads the Item which embeds the element AmazonEc2P2InstanceCard
include('aws-20210730/Resource/Compute/AmazonEc2P2Instance')

' renders the element
AmazonEc2P2InstanceCard('AmazonEc2P2InstanceCard', 'Amazon Ec2 P2 Instance Card', 'an optional description')
@enduml
```

## AmazonEc2P2InstanceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonEc2P2InstanceGroup
include('aws-20210730/Resource/Compute/AmazonEc2P2Instance')

' renders the element
AmazonEc2P2InstanceGroup('AmazonEc2P2InstanceGroup', 'Amazon Ec2 P2 Instance Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonEc2P2InstanceGroup
include('aws-20210730/Resource/Compute/AmazonEc2P2Instance')

' renders the element
AmazonEc2P2InstanceGroup('AmazonEc2P2InstanceGroup', 'Amazon Ec2 P2 Instance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

