# AmazonEc2M5Instance


```text
aws-q1-2023/Resource/Compute/AmazonEc2M5Instance
```

```text
include('aws-q1-2023/Resource/Compute/AmazonEc2M5Instance')
```



| Illustration | AmazonEc2M5Instance | AmazonEc2M5InstanceCard | AmazonEc2M5InstanceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2023/Resource/Compute/AmazonEc2M5Instance.png) | ![illustration for AmazonEc2M5Instance](../../../aws-q1-2023/Resource/Compute/AmazonEc2M5Instance.Local.png) | ![illustration for AmazonEc2M5InstanceCard](../../../aws-q1-2023/Resource/Compute/AmazonEc2M5InstanceCard.Local.png) | ![illustration for AmazonEc2M5InstanceGroup](../../../aws-q1-2023/Resource/Compute/AmazonEc2M5InstanceGroup.Local.png) |




## AmazonEc2M5Instance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonEc2M5Instance
include('aws-q1-2023/Resource/Compute/AmazonEc2M5Instance')

' renders the element
AmazonEc2M5Instance('AmazonEc2M5Instance', 'Amazon Ec2 M5 Instance', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AmazonEc2M5Instance
include('aws-q1-2023/Resource/Compute/AmazonEc2M5Instance')

' renders the element
AmazonEc2M5Instance('AmazonEc2M5Instance', 'Amazon Ec2 M5 Instance', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonEc2M5InstanceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonEc2M5InstanceCard
include('aws-q1-2023/Resource/Compute/AmazonEc2M5Instance')

' renders the element
AmazonEc2M5InstanceCard('AmazonEc2M5InstanceCard', 'Amazon Ec2 M5 Instance Card', 'an optional description')
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

' loads the Item which embeds the element AmazonEc2M5InstanceCard
include('aws-q1-2023/Resource/Compute/AmazonEc2M5Instance')

' renders the element
AmazonEc2M5InstanceCard('AmazonEc2M5InstanceCard', 'Amazon Ec2 M5 Instance Card', 'an optional description')
@enduml
```

## AmazonEc2M5InstanceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonEc2M5InstanceGroup
include('aws-q1-2023/Resource/Compute/AmazonEc2M5Instance')

' renders the element
AmazonEc2M5InstanceGroup('AmazonEc2M5InstanceGroup', 'Amazon Ec2 M5 Instance Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonEc2M5InstanceGroup
include('aws-q1-2023/Resource/Compute/AmazonEc2M5Instance')

' renders the element
AmazonEc2M5InstanceGroup('AmazonEc2M5InstanceGroup', 'Amazon Ec2 M5 Instance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

