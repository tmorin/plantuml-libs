# AmazonEc2T2Instance


```text
aws-q1-2023/Resource/Compute/AmazonEc2T2Instance
```

```text
include('aws-q1-2023/Resource/Compute/AmazonEc2T2Instance')
```



| Illustration | AmazonEc2T2Instance | AmazonEc2T2InstanceCard | AmazonEc2T2InstanceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2023/Resource/Compute/AmazonEc2T2Instance.png) | ![illustration for AmazonEc2T2Instance](../../../aws-q1-2023/Resource/Compute/AmazonEc2T2Instance.Local.png) | ![illustration for AmazonEc2T2InstanceCard](../../../aws-q1-2023/Resource/Compute/AmazonEc2T2InstanceCard.Local.png) | ![illustration for AmazonEc2T2InstanceGroup](../../../aws-q1-2023/Resource/Compute/AmazonEc2T2InstanceGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonEc2T2InstanceXs>`
- `<$AmazonEc2T2InstanceSm>`
- `<$AmazonEc2T2InstanceMd>`
- `<$AmazonEc2T2InstanceLg>`





## AmazonEc2T2Instance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonEc2T2Instance
include('aws-q1-2023/Resource/Compute/AmazonEc2T2Instance')

' renders the element
AmazonEc2T2Instance('AmazonEc2T2Instance', 'Amazon Ec2 T2 Instance', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AmazonEc2T2Instance
include('aws-q1-2023/Resource/Compute/AmazonEc2T2Instance')

' renders the element
AmazonEc2T2Instance('AmazonEc2T2Instance', 'Amazon Ec2 T2 Instance', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonEc2T2InstanceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonEc2T2InstanceCard
include('aws-q1-2023/Resource/Compute/AmazonEc2T2Instance')

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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonEc2T2InstanceCard
include('aws-q1-2023/Resource/Compute/AmazonEc2T2Instance')

' renders the element
AmazonEc2T2InstanceCard('AmazonEc2T2InstanceCard', 'Amazon Ec2 T2 Instance Card', 'an optional description')
@enduml
```

## AmazonEc2T2InstanceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonEc2T2InstanceGroup
include('aws-q1-2023/Resource/Compute/AmazonEc2T2Instance')

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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonEc2T2InstanceGroup
include('aws-q1-2023/Resource/Compute/AmazonEc2T2Instance')

' renders the element
AmazonEc2T2InstanceGroup('AmazonEc2T2InstanceGroup', 'Amazon Ec2 T2 Instance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

