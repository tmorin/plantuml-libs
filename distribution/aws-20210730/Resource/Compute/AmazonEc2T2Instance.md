# AmazonEc2T2Instance


```text
aws-20210730/Resource/Compute/AmazonEc2T2Instance
```

```text
include('aws-20210730/Resource/Compute/AmazonEc2T2Instance')
```



| Illustration | AmazonEc2T2Instance | AmazonEc2T2InstanceCard | AmazonEc2T2InstanceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Resource/Compute/AmazonEc2T2Instance.png) | ![illustration for AmazonEc2T2Instance](../../../aws-20210730/Resource/Compute/AmazonEc2T2Instance.Local.png) | ![illustration for AmazonEc2T2InstanceCard](../../../aws-20210730/Resource/Compute/AmazonEc2T2InstanceCard.Local.png) | ![illustration for AmazonEc2T2InstanceGroup](../../../aws-20210730/Resource/Compute/AmazonEc2T2InstanceGroup.Local.png) |




## AmazonEc2T2Instance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonEc2T2Instance
include('aws-20210730/Resource/Compute/AmazonEc2T2Instance')

' renders the element
AmazonEc2T2Instance('AmazonEc2T2Instance', 'Amazon Ec2 T2 Instance', 'an optional tech label')
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

' loads the Item which embeds the element AmazonEc2T2Instance
include('aws-20210730/Resource/Compute/AmazonEc2T2Instance')

' renders the element
AmazonEc2T2Instance('AmazonEc2T2Instance', 'Amazon Ec2 T2 Instance', 'an optional tech label')
@enduml
```

## AmazonEc2T2InstanceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonEc2T2InstanceCard
include('aws-20210730/Resource/Compute/AmazonEc2T2Instance')

' renders the element
AmazonEc2T2InstanceCard('AmazonEc2T2InstanceCard', 'Amazon Ec2 T2 Instance Card', 'an optional description')
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

' loads the Item which embeds the element AmazonEc2T2InstanceCard
include('aws-20210730/Resource/Compute/AmazonEc2T2Instance')

' renders the element
AmazonEc2T2InstanceCard('AmazonEc2T2InstanceCard', 'Amazon Ec2 T2 Instance Card', 'an optional description')
@enduml
```

## AmazonEc2T2InstanceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonEc2T2InstanceGroup
include('aws-20210730/Resource/Compute/AmazonEc2T2Instance')

' renders the element
AmazonEc2T2InstanceGroup('AmazonEc2T2InstanceGroup', 'Amazon Ec2 T2 Instance Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonEc2T2InstanceGroup
include('aws-20210730/Resource/Compute/AmazonEc2T2Instance')

' renders the element
AmazonEc2T2InstanceGroup('AmazonEc2T2InstanceGroup', 'Amazon Ec2 T2 Instance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

