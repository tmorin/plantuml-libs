# AmazonEc2M6InInstance


```text
aws-q1-2023/Resource/Compute/AmazonEc2M6InInstance
```

```text
include('aws-q1-2023/Resource/Compute/AmazonEc2M6InInstance')
```



| Illustration | AmazonEc2M6InInstance | AmazonEc2M6InInstanceCard | AmazonEc2M6InInstanceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2023/Resource/Compute/AmazonEc2M6InInstance.png) | ![illustration for AmazonEc2M6InInstance](../../../aws-q1-2023/Resource/Compute/AmazonEc2M6InInstance.Local.png) | ![illustration for AmazonEc2M6InInstanceCard](../../../aws-q1-2023/Resource/Compute/AmazonEc2M6InInstanceCard.Local.png) | ![illustration for AmazonEc2M6InInstanceGroup](../../../aws-q1-2023/Resource/Compute/AmazonEc2M6InInstanceGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonEc2M6InInstanceXs>`
- `<$AmazonEc2M6InInstanceSm>`
- `<$AmazonEc2M6InInstanceMd>`
- `<$AmazonEc2M6InInstanceLg>`





## AmazonEc2M6InInstance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonEc2M6InInstance
include('aws-q1-2023/Resource/Compute/AmazonEc2M6InInstance')

' renders the element
AmazonEc2M6InInstance('AmazonEc2M6InInstance', 'Amazon Ec2 M6 In Instance', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AmazonEc2M6InInstance
include('aws-q1-2023/Resource/Compute/AmazonEc2M6InInstance')

' renders the element
AmazonEc2M6InInstance('AmazonEc2M6InInstance', 'Amazon Ec2 M6 In Instance', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonEc2M6InInstanceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonEc2M6InInstanceCard
include('aws-q1-2023/Resource/Compute/AmazonEc2M6InInstance')

' renders the element
AmazonEc2M6InInstanceCard('AmazonEc2M6InInstanceCard', 'Amazon Ec2 M6 In Instance Card', 'an optional description')
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

' loads the Item which embeds the element AmazonEc2M6InInstanceCard
include('aws-q1-2023/Resource/Compute/AmazonEc2M6InInstance')

' renders the element
AmazonEc2M6InInstanceCard('AmazonEc2M6InInstanceCard', 'Amazon Ec2 M6 In Instance Card', 'an optional description')
@enduml
```

## AmazonEc2M6InInstanceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonEc2M6InInstanceGroup
include('aws-q1-2023/Resource/Compute/AmazonEc2M6InInstance')

' renders the element
AmazonEc2M6InInstanceGroup('AmazonEc2M6InInstanceGroup', 'Amazon Ec2 M6 In Instance Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonEc2M6InInstanceGroup
include('aws-q1-2023/Resource/Compute/AmazonEc2M6InInstance')

' renders the element
AmazonEc2M6InInstanceGroup('AmazonEc2M6InInstanceGroup', 'Amazon Ec2 M6 In Instance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

