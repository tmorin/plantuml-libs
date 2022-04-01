# AmazonEc2C6GInstance


```text
aws-q1-2022/Resource/Compute/AmazonEc2C6GInstance
```

```text
include('aws-q1-2022/Resource/Compute/AmazonEc2C6GInstance')
```



| Illustration | AmazonEc2C6GInstance | AmazonEc2C6GInstanceCard | AmazonEc2C6GInstanceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2022/Resource/Compute/AmazonEc2C6GInstance.png) | ![illustration for AmazonEc2C6GInstance](../../../aws-q1-2022/Resource/Compute/AmazonEc2C6GInstance.Local.png) | ![illustration for AmazonEc2C6GInstanceCard](../../../aws-q1-2022/Resource/Compute/AmazonEc2C6GInstanceCard.Local.png) | ![illustration for AmazonEc2C6GInstanceGroup](../../../aws-q1-2022/Resource/Compute/AmazonEc2C6GInstanceGroup.Local.png) |




## AmazonEc2C6GInstance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonEc2C6GInstance
include('aws-q1-2022/Resource/Compute/AmazonEc2C6GInstance')

' renders the element
AmazonEc2C6GInstance('AmazonEc2C6gInstance', 'Amazon Ec2 C6g Instance', 'an optional tech label')
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
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonEc2C6GInstance
include('aws-q1-2022/Resource/Compute/AmazonEc2C6GInstance')

' renders the element
AmazonEc2C6GInstance('AmazonEc2C6gInstance', 'Amazon Ec2 C6g Instance', 'an optional tech label')
@enduml
```

## AmazonEc2C6GInstanceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonEc2C6GInstanceCard
include('aws-q1-2022/Resource/Compute/AmazonEc2C6GInstance')

' renders the element
AmazonEc2C6GInstanceCard('AmazonEc2C6gInstanceCard', 'Amazon Ec2 C6g Instance Card', 'an optional description')
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
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonEc2C6GInstanceCard
include('aws-q1-2022/Resource/Compute/AmazonEc2C6GInstance')

' renders the element
AmazonEc2C6GInstanceCard('AmazonEc2C6gInstanceCard', 'Amazon Ec2 C6g Instance Card', 'an optional description')
@enduml
```

## AmazonEc2C6GInstanceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonEc2C6GInstanceGroup
include('aws-q1-2022/Resource/Compute/AmazonEc2C6GInstance')

' renders the element
AmazonEc2C6GInstanceGroup('AmazonEc2C6gInstanceGroup', 'Amazon Ec2 C6g Instance Group', 'an optional tech label') {
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
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonEc2C6GInstanceGroup
include('aws-q1-2022/Resource/Compute/AmazonEc2C6GInstance')

' renders the element
AmazonEc2C6GInstanceGroup('AmazonEc2C6gInstanceGroup', 'Amazon Ec2 C6g Instance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

