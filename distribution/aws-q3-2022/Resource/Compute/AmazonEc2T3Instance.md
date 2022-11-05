# AmazonEc2T3Instance


```text
aws-q3-2022/Resource/Compute/AmazonEc2T3Instance
```

```text
include('aws-q3-2022/Resource/Compute/AmazonEc2T3Instance')
```



| Illustration | AmazonEc2T3Instance | AmazonEc2T3InstanceCard | AmazonEc2T3InstanceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2022/Resource/Compute/AmazonEc2T3Instance.png) | ![illustration for AmazonEc2T3Instance](../../../aws-q3-2022/Resource/Compute/AmazonEc2T3Instance.Local.png) | ![illustration for AmazonEc2T3InstanceCard](../../../aws-q3-2022/Resource/Compute/AmazonEc2T3InstanceCard.Local.png) | ![illustration for AmazonEc2T3InstanceGroup](../../../aws-q3-2022/Resource/Compute/AmazonEc2T3InstanceGroup.Local.png) |




## AmazonEc2T3Instance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonEc2T3Instance
include('aws-q3-2022/Resource/Compute/AmazonEc2T3Instance')

' renders the element
AmazonEc2T3Instance('AmazonEc2T3Instance', 'Amazon Ec2 T3 Instance', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AmazonEc2T3Instance
include('aws-q3-2022/Resource/Compute/AmazonEc2T3Instance')

' renders the element
AmazonEc2T3Instance('AmazonEc2T3Instance', 'Amazon Ec2 T3 Instance', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonEc2T3InstanceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonEc2T3InstanceCard
include('aws-q3-2022/Resource/Compute/AmazonEc2T3Instance')

' renders the element
AmazonEc2T3InstanceCard('AmazonEc2T3InstanceCard', 'Amazon Ec2 T3 Instance Card', 'an optional description')
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

' loads the Item which embeds the element AmazonEc2T3InstanceCard
include('aws-q3-2022/Resource/Compute/AmazonEc2T3Instance')

' renders the element
AmazonEc2T3InstanceCard('AmazonEc2T3InstanceCard', 'Amazon Ec2 T3 Instance Card', 'an optional description')
@enduml
```

## AmazonEc2T3InstanceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonEc2T3InstanceGroup
include('aws-q3-2022/Resource/Compute/AmazonEc2T3Instance')

' renders the element
AmazonEc2T3InstanceGroup('AmazonEc2T3InstanceGroup', 'Amazon Ec2 T3 Instance Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonEc2T3InstanceGroup
include('aws-q3-2022/Resource/Compute/AmazonEc2T3Instance')

' renders the element
AmazonEc2T3InstanceGroup('AmazonEc2T3InstanceGroup', 'Amazon Ec2 T3 Instance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

