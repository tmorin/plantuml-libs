# AmazonEc2C4Instance


```text
aws-20210730/Resource/Compute/AmazonEc2C4Instance
```

```text
include('aws-20210730/Resource/Compute/AmazonEc2C4Instance')
```



| Illustration | AmazonEc2C4Instance | AmazonEc2C4InstanceCard | AmazonEc2C4InstanceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Resource/Compute/AmazonEc2C4Instance.png) | ![illustration for AmazonEc2C4Instance](../../../aws-20210730/Resource/Compute/AmazonEc2C4Instance.Local.png) | ![illustration for AmazonEc2C4InstanceCard](../../../aws-20210730/Resource/Compute/AmazonEc2C4InstanceCard.Local.png) | ![illustration for AmazonEc2C4InstanceGroup](../../../aws-20210730/Resource/Compute/AmazonEc2C4InstanceGroup.Local.png) |




## AmazonEc2C4Instance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonEc2C4Instance
include('aws-20210730/Resource/Compute/AmazonEc2C4Instance')

' renders the element
AmazonEc2C4Instance('AmazonEc2C4Instance', 'Amazon Ec2 C4 Instance', 'an optional tech label')
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonEc2C4Instance
include('aws-20210730/Resource/Compute/AmazonEc2C4Instance')

' renders the element
AmazonEc2C4Instance('AmazonEc2C4Instance', 'Amazon Ec2 C4 Instance', 'an optional tech label')
@enduml
```

## AmazonEc2C4InstanceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonEc2C4InstanceCard
include('aws-20210730/Resource/Compute/AmazonEc2C4Instance')

' renders the element
AmazonEc2C4InstanceCard('AmazonEc2C4InstanceCard', 'Amazon Ec2 C4 Instance Card', 'an optional description')
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonEc2C4InstanceCard
include('aws-20210730/Resource/Compute/AmazonEc2C4Instance')

' renders the element
AmazonEc2C4InstanceCard('AmazonEc2C4InstanceCard', 'Amazon Ec2 C4 Instance Card', 'an optional description')
@enduml
```

## AmazonEc2C4InstanceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonEc2C4InstanceGroup
include('aws-20210730/Resource/Compute/AmazonEc2C4Instance')

' renders the element
AmazonEc2C4InstanceGroup('AmazonEc2C4InstanceGroup', 'Amazon Ec2 C4 Instance Group', 'an optional tech label') {
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonEc2C4InstanceGroup
include('aws-20210730/Resource/Compute/AmazonEc2C4Instance')

' renders the element
AmazonEc2C4InstanceGroup('AmazonEc2C4InstanceGroup', 'Amazon Ec2 C4 Instance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

