# AmazonEc2Inf1Instance


```text
aws-q1-2022/Resource/Compute/AmazonEc2Inf1Instance
```

```text
include('aws-q1-2022/Resource/Compute/AmazonEc2Inf1Instance')
```



| Illustration | AmazonEc2Inf1Instance | AmazonEc2Inf1InstanceCard | AmazonEc2Inf1InstanceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2022/Resource/Compute/AmazonEc2Inf1Instance.png) | ![illustration for AmazonEc2Inf1Instance](../../../aws-q1-2022/Resource/Compute/AmazonEc2Inf1Instance.Local.png) | ![illustration for AmazonEc2Inf1InstanceCard](../../../aws-q1-2022/Resource/Compute/AmazonEc2Inf1InstanceCard.Local.png) | ![illustration for AmazonEc2Inf1InstanceGroup](../../../aws-q1-2022/Resource/Compute/AmazonEc2Inf1InstanceGroup.Local.png) |




## AmazonEc2Inf1Instance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonEc2Inf1Instance
include('aws-q1-2022/Resource/Compute/AmazonEc2Inf1Instance')

' renders the element
AmazonEc2Inf1Instance('AmazonEc2Inf1Instance', 'Amazon Ec2 Inf1 Instance', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AmazonEc2Inf1Instance
include('aws-q1-2022/Resource/Compute/AmazonEc2Inf1Instance')

' renders the element
AmazonEc2Inf1Instance('AmazonEc2Inf1Instance', 'Amazon Ec2 Inf1 Instance', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonEc2Inf1InstanceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonEc2Inf1InstanceCard
include('aws-q1-2022/Resource/Compute/AmazonEc2Inf1Instance')

' renders the element
AmazonEc2Inf1InstanceCard('AmazonEc2Inf1InstanceCard', 'Amazon Ec2 Inf1 Instance Card', 'an optional description')
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

' loads the Item which embeds the element AmazonEc2Inf1InstanceCard
include('aws-q1-2022/Resource/Compute/AmazonEc2Inf1Instance')

' renders the element
AmazonEc2Inf1InstanceCard('AmazonEc2Inf1InstanceCard', 'Amazon Ec2 Inf1 Instance Card', 'an optional description')
@enduml
```

## AmazonEc2Inf1InstanceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonEc2Inf1InstanceGroup
include('aws-q1-2022/Resource/Compute/AmazonEc2Inf1Instance')

' renders the element
AmazonEc2Inf1InstanceGroup('AmazonEc2Inf1InstanceGroup', 'Amazon Ec2 Inf1 Instance Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonEc2Inf1InstanceGroup
include('aws-q1-2022/Resource/Compute/AmazonEc2Inf1Instance')

' renders the element
AmazonEc2Inf1InstanceGroup('AmazonEc2Inf1InstanceGroup', 'Amazon Ec2 Inf1 Instance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

