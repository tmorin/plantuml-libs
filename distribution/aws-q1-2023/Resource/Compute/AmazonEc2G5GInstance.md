# AmazonEc2G5GInstance


```text
aws-q1-2023/Resource/Compute/AmazonEc2G5GInstance
```

```text
include('aws-q1-2023/Resource/Compute/AmazonEc2G5GInstance')
```



| Illustration | AmazonEc2G5GInstance | AmazonEc2G5GInstanceCard | AmazonEc2G5GInstanceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2023/Resource/Compute/AmazonEc2G5GInstance.png) | ![illustration for AmazonEc2G5GInstance](../../../aws-q1-2023/Resource/Compute/AmazonEc2G5GInstance.Local.png) | ![illustration for AmazonEc2G5GInstanceCard](../../../aws-q1-2023/Resource/Compute/AmazonEc2G5GInstanceCard.Local.png) | ![illustration for AmazonEc2G5GInstanceGroup](../../../aws-q1-2023/Resource/Compute/AmazonEc2G5GInstanceGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonEc2G5GInstanceXs>`
- `<$AmazonEc2G5GInstanceSm>`
- `<$AmazonEc2G5GInstanceMd>`
- `<$AmazonEc2G5GInstanceLg>`





## AmazonEc2G5GInstance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonEc2G5GInstance
include('aws-q1-2023/Resource/Compute/AmazonEc2G5GInstance')

' renders the element
AmazonEc2G5GInstance('AmazonEc2G5gInstance', 'Amazon Ec2 G5g Instance', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AmazonEc2G5GInstance
include('aws-q1-2023/Resource/Compute/AmazonEc2G5GInstance')

' renders the element
AmazonEc2G5GInstance('AmazonEc2G5gInstance', 'Amazon Ec2 G5g Instance', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonEc2G5GInstanceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonEc2G5GInstanceCard
include('aws-q1-2023/Resource/Compute/AmazonEc2G5GInstance')

' renders the element
AmazonEc2G5GInstanceCard('AmazonEc2G5gInstanceCard', 'Amazon Ec2 G5g Instance Card', 'an optional description')
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

' loads the Item which embeds the element AmazonEc2G5GInstanceCard
include('aws-q1-2023/Resource/Compute/AmazonEc2G5GInstance')

' renders the element
AmazonEc2G5GInstanceCard('AmazonEc2G5gInstanceCard', 'Amazon Ec2 G5g Instance Card', 'an optional description')
@enduml
```

## AmazonEc2G5GInstanceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonEc2G5GInstanceGroup
include('aws-q1-2023/Resource/Compute/AmazonEc2G5GInstance')

' renders the element
AmazonEc2G5GInstanceGroup('AmazonEc2G5gInstanceGroup', 'Amazon Ec2 G5g Instance Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonEc2G5GInstanceGroup
include('aws-q1-2023/Resource/Compute/AmazonEc2G5GInstance')

' renders the element
AmazonEc2G5GInstanceGroup('AmazonEc2G5gInstanceGroup', 'Amazon Ec2 G5g Instance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

