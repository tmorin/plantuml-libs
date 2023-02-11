# AmazonEc2SpotInstance


```text
aws-q1-2023/Resource/Compute/AmazonEc2SpotInstance
```

```text
include('aws-q1-2023/Resource/Compute/AmazonEc2SpotInstance')
```



| Illustration | AmazonEc2SpotInstance | AmazonEc2SpotInstanceCard | AmazonEc2SpotInstanceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2023/Resource/Compute/AmazonEc2SpotInstance.png) | ![illustration for AmazonEc2SpotInstance](../../../aws-q1-2023/Resource/Compute/AmazonEc2SpotInstance.Local.png) | ![illustration for AmazonEc2SpotInstanceCard](../../../aws-q1-2023/Resource/Compute/AmazonEc2SpotInstanceCard.Local.png) | ![illustration for AmazonEc2SpotInstanceGroup](../../../aws-q1-2023/Resource/Compute/AmazonEc2SpotInstanceGroup.Local.png) |




## AmazonEc2SpotInstance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonEc2SpotInstance
include('aws-q1-2023/Resource/Compute/AmazonEc2SpotInstance')

' renders the element
AmazonEc2SpotInstance('AmazonEc2SpotInstance', 'Amazon Ec2 Spot Instance', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AmazonEc2SpotInstance
include('aws-q1-2023/Resource/Compute/AmazonEc2SpotInstance')

' renders the element
AmazonEc2SpotInstance('AmazonEc2SpotInstance', 'Amazon Ec2 Spot Instance', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonEc2SpotInstanceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonEc2SpotInstanceCard
include('aws-q1-2023/Resource/Compute/AmazonEc2SpotInstance')

' renders the element
AmazonEc2SpotInstanceCard('AmazonEc2SpotInstanceCard', 'Amazon Ec2 Spot Instance Card', 'an optional description')
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

' loads the Item which embeds the element AmazonEc2SpotInstanceCard
include('aws-q1-2023/Resource/Compute/AmazonEc2SpotInstance')

' renders the element
AmazonEc2SpotInstanceCard('AmazonEc2SpotInstanceCard', 'Amazon Ec2 Spot Instance Card', 'an optional description')
@enduml
```

## AmazonEc2SpotInstanceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonEc2SpotInstanceGroup
include('aws-q1-2023/Resource/Compute/AmazonEc2SpotInstance')

' renders the element
AmazonEc2SpotInstanceGroup('AmazonEc2SpotInstanceGroup', 'Amazon Ec2 Spot Instance Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonEc2SpotInstanceGroup
include('aws-q1-2023/Resource/Compute/AmazonEc2SpotInstance')

' renders the element
AmazonEc2SpotInstanceGroup('AmazonEc2SpotInstanceGroup', 'Amazon Ec2 Spot Instance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

