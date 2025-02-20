# AmazonEc2Instance


```text
aws-q1-2025/Resource/Compute/AmazonEc2Instance
```

```text
include('aws-q1-2025/Resource/Compute/AmazonEc2Instance')
```



| Illustration | AmazonEc2Instance | AmazonEc2InstanceCard | AmazonEc2InstanceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2025/Resource/Compute/AmazonEc2Instance.png) | ![illustration for AmazonEc2Instance](../../../aws-q1-2025/Resource/Compute/AmazonEc2Instance.Local.png) | ![illustration for AmazonEc2InstanceCard](../../../aws-q1-2025/Resource/Compute/AmazonEc2InstanceCard.Local.png) | ![illustration for AmazonEc2InstanceGroup](../../../aws-q1-2025/Resource/Compute/AmazonEc2InstanceGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonEc2InstanceXs>`
- `<$AmazonEc2InstanceSm>`
- `<$AmazonEc2InstanceMd>`
- `<$AmazonEc2InstanceLg>`





## AmazonEc2Instance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AmazonEc2Instance
include('aws-q1-2025/Resource/Compute/AmazonEc2Instance')

' renders the element
AmazonEc2Instance('AmazonEc2Instance', 'Amazon Ec2 Instance', 'an optional tech label', 'an optional description')
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AmazonEc2Instance
include('aws-q1-2025/Resource/Compute/AmazonEc2Instance')

' renders the element
AmazonEc2Instance('AmazonEc2Instance', 'Amazon Ec2 Instance', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonEc2InstanceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AmazonEc2InstanceCard
include('aws-q1-2025/Resource/Compute/AmazonEc2Instance')

' renders the element
AmazonEc2InstanceCard('AmazonEc2InstanceCard', 'Amazon Ec2 Instance Card', 'an optional description')
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AmazonEc2InstanceCard
include('aws-q1-2025/Resource/Compute/AmazonEc2Instance')

' renders the element
AmazonEc2InstanceCard('AmazonEc2InstanceCard', 'Amazon Ec2 Instance Card', 'an optional description')
@enduml
```

## AmazonEc2InstanceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AmazonEc2InstanceGroup
include('aws-q1-2025/Resource/Compute/AmazonEc2Instance')

' renders the element
AmazonEc2InstanceGroup('AmazonEc2InstanceGroup', 'Amazon Ec2 Instance Group', 'an optional tech label') {
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
include('aws-q1-2025/bootstrap')

' loads the Item which embeds the element AmazonEc2InstanceGroup
include('aws-q1-2025/Resource/Compute/AmazonEc2Instance')

' renders the element
AmazonEc2InstanceGroup('AmazonEc2InstanceGroup', 'Amazon Ec2 Instance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

