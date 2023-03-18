# AmazonEc2R6InInstance


```text
aws-q1-2023/Resource/Compute/AmazonEc2R6InInstance
```

```text
include('aws-q1-2023/Resource/Compute/AmazonEc2R6InInstance')
```



| Illustration | AmazonEc2R6InInstance | AmazonEc2R6InInstanceCard | AmazonEc2R6InInstanceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2023/Resource/Compute/AmazonEc2R6InInstance.png) | ![illustration for AmazonEc2R6InInstance](../../../aws-q1-2023/Resource/Compute/AmazonEc2R6InInstance.Local.png) | ![illustration for AmazonEc2R6InInstanceCard](../../../aws-q1-2023/Resource/Compute/AmazonEc2R6InInstanceCard.Local.png) | ![illustration for AmazonEc2R6InInstanceGroup](../../../aws-q1-2023/Resource/Compute/AmazonEc2R6InInstanceGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonEc2R6InInstanceXs>`
- `<$AmazonEc2R6InInstanceSm>`
- `<$AmazonEc2R6InInstanceMd>`
- `<$AmazonEc2R6InInstanceLg>`





## AmazonEc2R6InInstance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonEc2R6InInstance
include('aws-q1-2023/Resource/Compute/AmazonEc2R6InInstance')

' renders the element
AmazonEc2R6InInstance('AmazonEc2R6InInstance', 'Amazon Ec2 R6 In Instance', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AmazonEc2R6InInstance
include('aws-q1-2023/Resource/Compute/AmazonEc2R6InInstance')

' renders the element
AmazonEc2R6InInstance('AmazonEc2R6InInstance', 'Amazon Ec2 R6 In Instance', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonEc2R6InInstanceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonEc2R6InInstanceCard
include('aws-q1-2023/Resource/Compute/AmazonEc2R6InInstance')

' renders the element
AmazonEc2R6InInstanceCard('AmazonEc2R6InInstanceCard', 'Amazon Ec2 R6 In Instance Card', 'an optional description')
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

' loads the Item which embeds the element AmazonEc2R6InInstanceCard
include('aws-q1-2023/Resource/Compute/AmazonEc2R6InInstance')

' renders the element
AmazonEc2R6InInstanceCard('AmazonEc2R6InInstanceCard', 'Amazon Ec2 R6 In Instance Card', 'an optional description')
@enduml
```

## AmazonEc2R6InInstanceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonEc2R6InInstanceGroup
include('aws-q1-2023/Resource/Compute/AmazonEc2R6InInstance')

' renders the element
AmazonEc2R6InInstanceGroup('AmazonEc2R6InInstanceGroup', 'Amazon Ec2 R6 In Instance Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonEc2R6InInstanceGroup
include('aws-q1-2023/Resource/Compute/AmazonEc2R6InInstance')

' renders the element
AmazonEc2R6InInstanceGroup('AmazonEc2R6InInstanceGroup', 'Amazon Ec2 R6 In Instance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

