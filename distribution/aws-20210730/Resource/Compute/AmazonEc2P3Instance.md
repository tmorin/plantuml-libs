# AmazonEc2P3Instance


```text
aws-20210730/Resource/Compute/AmazonEc2P3Instance
```

```text
include('aws-20210730/Resource/Compute/AmazonEc2P3Instance')
```



| Illustration | AmazonEc2P3Instance | AmazonEc2P3InstanceCard | AmazonEc2P3InstanceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Resource/Compute/AmazonEc2P3Instance.png) | ![illustration for AmazonEc2P3Instance](../../../aws-20210730/Resource/Compute/AmazonEc2P3Instance.Local.png) | ![illustration for AmazonEc2P3InstanceCard](../../../aws-20210730/Resource/Compute/AmazonEc2P3InstanceCard.Local.png) | ![illustration for AmazonEc2P3InstanceGroup](../../../aws-20210730/Resource/Compute/AmazonEc2P3InstanceGroup.Local.png) |




## AmazonEc2P3Instance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonEc2P3Instance
include('aws-20210730/Resource/Compute/AmazonEc2P3Instance')

' renders the element
AmazonEc2P3Instance('AmazonEc2P3Instance', 'Amazon Ec2 P3 Instance', 'an optional tech label')
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

' loads the Item which embeds the element AmazonEc2P3Instance
include('aws-20210730/Resource/Compute/AmazonEc2P3Instance')

' renders the element
AmazonEc2P3Instance('AmazonEc2P3Instance', 'Amazon Ec2 P3 Instance', 'an optional tech label')
@enduml
```

## AmazonEc2P3InstanceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonEc2P3InstanceCard
include('aws-20210730/Resource/Compute/AmazonEc2P3Instance')

' renders the element
AmazonEc2P3InstanceCard('AmazonEc2P3InstanceCard', 'Amazon Ec2 P3 Instance Card', 'an optional description')
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

' loads the Item which embeds the element AmazonEc2P3InstanceCard
include('aws-20210730/Resource/Compute/AmazonEc2P3Instance')

' renders the element
AmazonEc2P3InstanceCard('AmazonEc2P3InstanceCard', 'Amazon Ec2 P3 Instance Card', 'an optional description')
@enduml
```

## AmazonEc2P3InstanceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonEc2P3InstanceGroup
include('aws-20210730/Resource/Compute/AmazonEc2P3Instance')

' renders the element
AmazonEc2P3InstanceGroup('AmazonEc2P3InstanceGroup', 'Amazon Ec2 P3 Instance Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonEc2P3InstanceGroup
include('aws-20210730/Resource/Compute/AmazonEc2P3Instance')

' renders the element
AmazonEc2P3InstanceGroup('AmazonEc2P3InstanceGroup', 'Amazon Ec2 P3 Instance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

