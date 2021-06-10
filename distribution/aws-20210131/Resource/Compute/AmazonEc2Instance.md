# AmazonEc2Instance


```text
aws-20210131/Resource/Compute/AmazonEc2Instance
```

```text
include('aws-20210131/Resource/Compute/AmazonEc2Instance')
```



| Illustration | AmazonEc2Instance | AmazonEc2InstanceCard | AmazonEc2InstanceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Resource/Compute/AmazonEc2Instance.png) | ![illustration for AmazonEc2Instance](../../../aws-20210131/Resource/Compute/AmazonEc2Instance.Local.png) | ![illustration for AmazonEc2InstanceCard](../../../aws-20210131/Resource/Compute/AmazonEc2InstanceCard.Local.png) | ![illustration for AmazonEc2InstanceGroup](../../../aws-20210131/Resource/Compute/AmazonEc2InstanceGroup.Local.png) |




## AmazonEc2Instance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonEc2Instance
include('aws-20210131/Resource/Compute/AmazonEc2Instance')

' renders the element
AmazonEc2Instance('AmazonEc2Instance', 'Amazon Ec2 Instance', 'an optional tech label')
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonEc2Instance
include('aws-20210131/Resource/Compute/AmazonEc2Instance')

' renders the element
AmazonEc2Instance('AmazonEc2Instance', 'Amazon Ec2 Instance', 'an optional tech label')
@enduml
```

## AmazonEc2InstanceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonEc2InstanceCard
include('aws-20210131/Resource/Compute/AmazonEc2Instance')

' renders the element
AmazonEc2InstanceCard('AmazonEc2InstanceCard', 'Amazon Ec2 Instance Card', 'an optional description')
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonEc2InstanceCard
include('aws-20210131/Resource/Compute/AmazonEc2Instance')

' renders the element
AmazonEc2InstanceCard('AmazonEc2InstanceCard', 'Amazon Ec2 Instance Card', 'an optional description')
@enduml
```

## AmazonEc2InstanceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonEc2InstanceGroup
include('aws-20210131/Resource/Compute/AmazonEc2Instance')

' renders the element
AmazonEc2InstanceGroup('AmazonEc2InstanceGroup', 'Amazon Ec2 Instance Group', 'an optional tech label') {
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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonEc2InstanceGroup
include('aws-20210131/Resource/Compute/AmazonEc2Instance')

' renders the element
AmazonEc2InstanceGroup('AmazonEc2InstanceGroup', 'Amazon Ec2 Instance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

