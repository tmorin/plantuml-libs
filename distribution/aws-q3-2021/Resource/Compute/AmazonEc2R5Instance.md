# AmazonEc2R5Instance


```text
aws-q3-2021/Resource/Compute/AmazonEc2R5Instance
```

```text
include('aws-q3-2021/Resource/Compute/AmazonEc2R5Instance')
```



| Illustration | AmazonEc2R5Instance | AmazonEc2R5InstanceCard | AmazonEc2R5InstanceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2021/Resource/Compute/AmazonEc2R5Instance.png) | ![illustration for AmazonEc2R5Instance](../../../aws-q3-2021/Resource/Compute/AmazonEc2R5Instance.Local.png) | ![illustration for AmazonEc2R5InstanceCard](../../../aws-q3-2021/Resource/Compute/AmazonEc2R5InstanceCard.Local.png) | ![illustration for AmazonEc2R5InstanceGroup](../../../aws-q3-2021/Resource/Compute/AmazonEc2R5InstanceGroup.Local.png) |




## AmazonEc2R5Instance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonEc2R5Instance
include('aws-q3-2021/Resource/Compute/AmazonEc2R5Instance')

' renders the element
AmazonEc2R5Instance('AmazonEc2R5Instance', 'Amazon Ec2 R5 Instance', 'an optional tech label')
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonEc2R5Instance
include('aws-q3-2021/Resource/Compute/AmazonEc2R5Instance')

' renders the element
AmazonEc2R5Instance('AmazonEc2R5Instance', 'Amazon Ec2 R5 Instance', 'an optional tech label')
@enduml
```

## AmazonEc2R5InstanceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonEc2R5InstanceCard
include('aws-q3-2021/Resource/Compute/AmazonEc2R5Instance')

' renders the element
AmazonEc2R5InstanceCard('AmazonEc2R5InstanceCard', 'Amazon Ec2 R5 Instance Card', 'an optional description')
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonEc2R5InstanceCard
include('aws-q3-2021/Resource/Compute/AmazonEc2R5Instance')

' renders the element
AmazonEc2R5InstanceCard('AmazonEc2R5InstanceCard', 'Amazon Ec2 R5 Instance Card', 'an optional description')
@enduml
```

## AmazonEc2R5InstanceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonEc2R5InstanceGroup
include('aws-q3-2021/Resource/Compute/AmazonEc2R5Instance')

' renders the element
AmazonEc2R5InstanceGroup('AmazonEc2R5InstanceGroup', 'Amazon Ec2 R5 Instance Group', 'an optional tech label') {
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonEc2R5InstanceGroup
include('aws-q3-2021/Resource/Compute/AmazonEc2R5Instance')

' renders the element
AmazonEc2R5InstanceGroup('AmazonEc2R5InstanceGroup', 'Amazon Ec2 R5 Instance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

