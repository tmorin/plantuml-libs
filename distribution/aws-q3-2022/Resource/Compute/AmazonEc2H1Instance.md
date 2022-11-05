# AmazonEc2H1Instance


```text
aws-q3-2022/Resource/Compute/AmazonEc2H1Instance
```

```text
include('aws-q3-2022/Resource/Compute/AmazonEc2H1Instance')
```



| Illustration | AmazonEc2H1Instance | AmazonEc2H1InstanceCard | AmazonEc2H1InstanceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2022/Resource/Compute/AmazonEc2H1Instance.png) | ![illustration for AmazonEc2H1Instance](../../../aws-q3-2022/Resource/Compute/AmazonEc2H1Instance.Local.png) | ![illustration for AmazonEc2H1InstanceCard](../../../aws-q3-2022/Resource/Compute/AmazonEc2H1InstanceCard.Local.png) | ![illustration for AmazonEc2H1InstanceGroup](../../../aws-q3-2022/Resource/Compute/AmazonEc2H1InstanceGroup.Local.png) |




## AmazonEc2H1Instance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonEc2H1Instance
include('aws-q3-2022/Resource/Compute/AmazonEc2H1Instance')

' renders the element
AmazonEc2H1Instance('AmazonEc2H1Instance', 'Amazon Ec2 H1 Instance', 'an optional tech label', 'an optional description')
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
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonEc2H1Instance
include('aws-q3-2022/Resource/Compute/AmazonEc2H1Instance')

' renders the element
AmazonEc2H1Instance('AmazonEc2H1Instance', 'Amazon Ec2 H1 Instance', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonEc2H1InstanceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonEc2H1InstanceCard
include('aws-q3-2022/Resource/Compute/AmazonEc2H1Instance')

' renders the element
AmazonEc2H1InstanceCard('AmazonEc2H1InstanceCard', 'Amazon Ec2 H1 Instance Card', 'an optional description')
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
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonEc2H1InstanceCard
include('aws-q3-2022/Resource/Compute/AmazonEc2H1Instance')

' renders the element
AmazonEc2H1InstanceCard('AmazonEc2H1InstanceCard', 'Amazon Ec2 H1 Instance Card', 'an optional description')
@enduml
```

## AmazonEc2H1InstanceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonEc2H1InstanceGroup
include('aws-q3-2022/Resource/Compute/AmazonEc2H1Instance')

' renders the element
AmazonEc2H1InstanceGroup('AmazonEc2H1InstanceGroup', 'Amazon Ec2 H1 Instance Group', 'an optional tech label') {
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
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonEc2H1InstanceGroup
include('aws-q3-2022/Resource/Compute/AmazonEc2H1Instance')

' renders the element
AmazonEc2H1InstanceGroup('AmazonEc2H1InstanceGroup', 'Amazon Ec2 H1 Instance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

