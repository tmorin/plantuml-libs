# AmazonEc2Inf2Instance


```text
aws-q1-2023/Resource/Compute/AmazonEc2Inf2Instance
```

```text
include('aws-q1-2023/Resource/Compute/AmazonEc2Inf2Instance')
```



| Illustration | AmazonEc2Inf2Instance | AmazonEc2Inf2InstanceCard | AmazonEc2Inf2InstanceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2023/Resource/Compute/AmazonEc2Inf2Instance.png) | ![illustration for AmazonEc2Inf2Instance](../../../aws-q1-2023/Resource/Compute/AmazonEc2Inf2Instance.Local.png) | ![illustration for AmazonEc2Inf2InstanceCard](../../../aws-q1-2023/Resource/Compute/AmazonEc2Inf2InstanceCard.Local.png) | ![illustration for AmazonEc2Inf2InstanceGroup](../../../aws-q1-2023/Resource/Compute/AmazonEc2Inf2InstanceGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonEc2Inf2InstanceXs>`
- `<$AmazonEc2Inf2InstanceSm>`
- `<$AmazonEc2Inf2InstanceMd>`
- `<$AmazonEc2Inf2InstanceLg>`





## AmazonEc2Inf2Instance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonEc2Inf2Instance
include('aws-q1-2023/Resource/Compute/AmazonEc2Inf2Instance')

' renders the element
AmazonEc2Inf2Instance('AmazonEc2Inf2Instance', 'Amazon Ec2 Inf2 Instance', 'an optional tech label', 'an optional description')
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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonEc2Inf2Instance
include('aws-q1-2023/Resource/Compute/AmazonEc2Inf2Instance')

' renders the element
AmazonEc2Inf2Instance('AmazonEc2Inf2Instance', 'Amazon Ec2 Inf2 Instance', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonEc2Inf2InstanceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonEc2Inf2InstanceCard
include('aws-q1-2023/Resource/Compute/AmazonEc2Inf2Instance')

' renders the element
AmazonEc2Inf2InstanceCard('AmazonEc2Inf2InstanceCard', 'Amazon Ec2 Inf2 Instance Card', 'an optional description')
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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonEc2Inf2InstanceCard
include('aws-q1-2023/Resource/Compute/AmazonEc2Inf2Instance')

' renders the element
AmazonEc2Inf2InstanceCard('AmazonEc2Inf2InstanceCard', 'Amazon Ec2 Inf2 Instance Card', 'an optional description')
@enduml
```

## AmazonEc2Inf2InstanceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonEc2Inf2InstanceGroup
include('aws-q1-2023/Resource/Compute/AmazonEc2Inf2Instance')

' renders the element
AmazonEc2Inf2InstanceGroup('AmazonEc2Inf2InstanceGroup', 'Amazon Ec2 Inf2 Instance Group', 'an optional tech label') {
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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonEc2Inf2InstanceGroup
include('aws-q1-2023/Resource/Compute/AmazonEc2Inf2Instance')

' renders the element
AmazonEc2Inf2InstanceGroup('AmazonEc2Inf2InstanceGroup', 'Amazon Ec2 Inf2 Instance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

