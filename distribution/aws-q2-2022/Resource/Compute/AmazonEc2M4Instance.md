# AmazonEc2M4Instance


```text
aws-q2-2022/Resource/Compute/AmazonEc2M4Instance
```

```text
include('aws-q2-2022/Resource/Compute/AmazonEc2M4Instance')
```



| Illustration | AmazonEc2M4Instance | AmazonEc2M4InstanceCard | AmazonEc2M4InstanceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2022/Resource/Compute/AmazonEc2M4Instance.png) | ![illustration for AmazonEc2M4Instance](../../../aws-q2-2022/Resource/Compute/AmazonEc2M4Instance.Local.png) | ![illustration for AmazonEc2M4InstanceCard](../../../aws-q2-2022/Resource/Compute/AmazonEc2M4InstanceCard.Local.png) | ![illustration for AmazonEc2M4InstanceGroup](../../../aws-q2-2022/Resource/Compute/AmazonEc2M4InstanceGroup.Local.png) |




## AmazonEc2M4Instance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonEc2M4Instance
include('aws-q2-2022/Resource/Compute/AmazonEc2M4Instance')

' renders the element
AmazonEc2M4Instance('AmazonEc2M4Instance', 'Amazon Ec2 M4 Instance', 'an optional tech label')
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonEc2M4Instance
include('aws-q2-2022/Resource/Compute/AmazonEc2M4Instance')

' renders the element
AmazonEc2M4Instance('AmazonEc2M4Instance', 'Amazon Ec2 M4 Instance', 'an optional tech label')
@enduml
```

## AmazonEc2M4InstanceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonEc2M4InstanceCard
include('aws-q2-2022/Resource/Compute/AmazonEc2M4Instance')

' renders the element
AmazonEc2M4InstanceCard('AmazonEc2M4InstanceCard', 'Amazon Ec2 M4 Instance Card', 'an optional description')
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonEc2M4InstanceCard
include('aws-q2-2022/Resource/Compute/AmazonEc2M4Instance')

' renders the element
AmazonEc2M4InstanceCard('AmazonEc2M4InstanceCard', 'Amazon Ec2 M4 Instance Card', 'an optional description')
@enduml
```

## AmazonEc2M4InstanceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonEc2M4InstanceGroup
include('aws-q2-2022/Resource/Compute/AmazonEc2M4Instance')

' renders the element
AmazonEc2M4InstanceGroup('AmazonEc2M4InstanceGroup', 'Amazon Ec2 M4 Instance Group', 'an optional tech label') {
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonEc2M4InstanceGroup
include('aws-q2-2022/Resource/Compute/AmazonEc2M4Instance')

' renders the element
AmazonEc2M4InstanceGroup('AmazonEc2M4InstanceGroup', 'Amazon Ec2 M4 Instance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

