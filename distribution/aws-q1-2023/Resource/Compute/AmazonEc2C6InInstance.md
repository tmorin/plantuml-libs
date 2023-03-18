# AmazonEc2C6InInstance


```text
aws-q1-2023/Resource/Compute/AmazonEc2C6InInstance
```

```text
include('aws-q1-2023/Resource/Compute/AmazonEc2C6InInstance')
```



| Illustration | AmazonEc2C6InInstance | AmazonEc2C6InInstanceCard | AmazonEc2C6InInstanceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2023/Resource/Compute/AmazonEc2C6InInstance.png) | ![illustration for AmazonEc2C6InInstance](../../../aws-q1-2023/Resource/Compute/AmazonEc2C6InInstance.Local.png) | ![illustration for AmazonEc2C6InInstanceCard](../../../aws-q1-2023/Resource/Compute/AmazonEc2C6InInstanceCard.Local.png) | ![illustration for AmazonEc2C6InInstanceGroup](../../../aws-q1-2023/Resource/Compute/AmazonEc2C6InInstanceGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonEc2C6InInstanceXs>`
- `<$AmazonEc2C6InInstanceSm>`
- `<$AmazonEc2C6InInstanceMd>`
- `<$AmazonEc2C6InInstanceLg>`





## AmazonEc2C6InInstance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonEc2C6InInstance
include('aws-q1-2023/Resource/Compute/AmazonEc2C6InInstance')

' renders the element
AmazonEc2C6InInstance('AmazonEc2C6InInstance', 'Amazon Ec2 C6 In Instance', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AmazonEc2C6InInstance
include('aws-q1-2023/Resource/Compute/AmazonEc2C6InInstance')

' renders the element
AmazonEc2C6InInstance('AmazonEc2C6InInstance', 'Amazon Ec2 C6 In Instance', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonEc2C6InInstanceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonEc2C6InInstanceCard
include('aws-q1-2023/Resource/Compute/AmazonEc2C6InInstance')

' renders the element
AmazonEc2C6InInstanceCard('AmazonEc2C6InInstanceCard', 'Amazon Ec2 C6 In Instance Card', 'an optional description')
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

' loads the Item which embeds the element AmazonEc2C6InInstanceCard
include('aws-q1-2023/Resource/Compute/AmazonEc2C6InInstance')

' renders the element
AmazonEc2C6InInstanceCard('AmazonEc2C6InInstanceCard', 'Amazon Ec2 C6 In Instance Card', 'an optional description')
@enduml
```

## AmazonEc2C6InInstanceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonEc2C6InInstanceGroup
include('aws-q1-2023/Resource/Compute/AmazonEc2C6InInstance')

' renders the element
AmazonEc2C6InInstanceGroup('AmazonEc2C6InInstanceGroup', 'Amazon Ec2 C6 In Instance Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonEc2C6InInstanceGroup
include('aws-q1-2023/Resource/Compute/AmazonEc2C6InInstance')

' renders the element
AmazonEc2C6InInstanceGroup('AmazonEc2C6InInstanceGroup', 'Amazon Ec2 C6 In Instance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

