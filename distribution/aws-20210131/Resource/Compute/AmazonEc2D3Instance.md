# AmazonEc2D3Instance


```text
aws-20210131/Resource/Compute/AmazonEc2D3Instance
```

```text
include('aws-20210131/Resource/Compute/AmazonEc2D3Instance')
```



| Illustration | AmazonEc2D3Instance | AmazonEc2D3InstanceCard | AmazonEc2D3InstanceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Resource/Compute/AmazonEc2D3Instance.png) | ![illustration for AmazonEc2D3Instance](../../../aws-20210131/Resource/Compute/AmazonEc2D3Instance.Local.png) | ![illustration for AmazonEc2D3InstanceCard](../../../aws-20210131/Resource/Compute/AmazonEc2D3InstanceCard.Local.png) | ![illustration for AmazonEc2D3InstanceGroup](../../../aws-20210131/Resource/Compute/AmazonEc2D3InstanceGroup.Local.png) |




## AmazonEc2D3Instance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonEc2D3Instance
include('aws-20210131/Resource/Compute/AmazonEc2D3Instance')

' renders the element
AmazonEc2D3Instance('AmazonEc2D3Instance', 'Amazon Ec2 D3 Instance', 'an optional tech label')
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

' loads the Item which embeds the element AmazonEc2D3Instance
include('aws-20210131/Resource/Compute/AmazonEc2D3Instance')

' renders the element
AmazonEc2D3Instance('AmazonEc2D3Instance', 'Amazon Ec2 D3 Instance', 'an optional tech label')
@enduml
```

## AmazonEc2D3InstanceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonEc2D3InstanceCard
include('aws-20210131/Resource/Compute/AmazonEc2D3Instance')

' renders the element
AmazonEc2D3InstanceCard('AmazonEc2D3InstanceCard', 'Amazon Ec2 D3 Instance Card', 'an optional description')
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

' loads the Item which embeds the element AmazonEc2D3InstanceCard
include('aws-20210131/Resource/Compute/AmazonEc2D3Instance')

' renders the element
AmazonEc2D3InstanceCard('AmazonEc2D3InstanceCard', 'Amazon Ec2 D3 Instance Card', 'an optional description')
@enduml
```

## AmazonEc2D3InstanceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonEc2D3InstanceGroup
include('aws-20210131/Resource/Compute/AmazonEc2D3Instance')

' renders the element
AmazonEc2D3InstanceGroup('AmazonEc2D3InstanceGroup', 'Amazon Ec2 D3 Instance Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonEc2D3InstanceGroup
include('aws-20210131/Resource/Compute/AmazonEc2D3Instance')

' renders the element
AmazonEc2D3InstanceGroup('AmazonEc2D3InstanceGroup', 'Amazon Ec2 D3 Instance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

