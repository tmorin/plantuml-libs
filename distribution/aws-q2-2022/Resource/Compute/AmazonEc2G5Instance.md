# AmazonEc2G5Instance


```text
aws-q2-2022/Resource/Compute/AmazonEc2G5Instance
```

```text
include('aws-q2-2022/Resource/Compute/AmazonEc2G5Instance')
```



| Illustration | AmazonEc2G5Instance | AmazonEc2G5InstanceCard | AmazonEc2G5InstanceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2022/Resource/Compute/AmazonEc2G5Instance.png) | ![illustration for AmazonEc2G5Instance](../../../aws-q2-2022/Resource/Compute/AmazonEc2G5Instance.Local.png) | ![illustration for AmazonEc2G5InstanceCard](../../../aws-q2-2022/Resource/Compute/AmazonEc2G5InstanceCard.Local.png) | ![illustration for AmazonEc2G5InstanceGroup](../../../aws-q2-2022/Resource/Compute/AmazonEc2G5InstanceGroup.Local.png) |




## AmazonEc2G5Instance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonEc2G5Instance
include('aws-q2-2022/Resource/Compute/AmazonEc2G5Instance')

' renders the element
AmazonEc2G5Instance('AmazonEc2G5Instance', 'Amazon Ec2 G5 Instance', 'an optional tech label')
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonEc2G5Instance
include('aws-q2-2022/Resource/Compute/AmazonEc2G5Instance')

' renders the element
AmazonEc2G5Instance('AmazonEc2G5Instance', 'Amazon Ec2 G5 Instance', 'an optional tech label')
@enduml
```

## AmazonEc2G5InstanceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonEc2G5InstanceCard
include('aws-q2-2022/Resource/Compute/AmazonEc2G5Instance')

' renders the element
AmazonEc2G5InstanceCard('AmazonEc2G5InstanceCard', 'Amazon Ec2 G5 Instance Card', 'an optional description')
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonEc2G5InstanceCard
include('aws-q2-2022/Resource/Compute/AmazonEc2G5Instance')

' renders the element
AmazonEc2G5InstanceCard('AmazonEc2G5InstanceCard', 'Amazon Ec2 G5 Instance Card', 'an optional description')
@enduml
```

## AmazonEc2G5InstanceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonEc2G5InstanceGroup
include('aws-q2-2022/Resource/Compute/AmazonEc2G5Instance')

' renders the element
AmazonEc2G5InstanceGroup('AmazonEc2G5InstanceGroup', 'Amazon Ec2 G5 Instance Group', 'an optional tech label') {
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonEc2G5InstanceGroup
include('aws-q2-2022/Resource/Compute/AmazonEc2G5Instance')

' renders the element
AmazonEc2G5InstanceGroup('AmazonEc2G5InstanceGroup', 'Amazon Ec2 G5 Instance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

