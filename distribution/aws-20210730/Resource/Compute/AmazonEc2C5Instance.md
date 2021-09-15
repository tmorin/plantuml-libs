# AmazonEc2C5Instance


```text
aws-20210730/Resource/Compute/AmazonEc2C5Instance
```

```text
include('aws-20210730/Resource/Compute/AmazonEc2C5Instance')
```



| Illustration | AmazonEc2C5Instance | AmazonEc2C5InstanceCard | AmazonEc2C5InstanceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Resource/Compute/AmazonEc2C5Instance.png) | ![illustration for AmazonEc2C5Instance](../../../aws-20210730/Resource/Compute/AmazonEc2C5Instance.Local.png) | ![illustration for AmazonEc2C5InstanceCard](../../../aws-20210730/Resource/Compute/AmazonEc2C5InstanceCard.Local.png) | ![illustration for AmazonEc2C5InstanceGroup](../../../aws-20210730/Resource/Compute/AmazonEc2C5InstanceGroup.Local.png) |




## AmazonEc2C5Instance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonEc2C5Instance
include('aws-20210730/Resource/Compute/AmazonEc2C5Instance')

' renders the element
AmazonEc2C5Instance('AmazonEc2C5Instance', 'Amazon Ec2 C5 Instance', 'an optional tech label')
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

' loads the Item which embeds the element AmazonEc2C5Instance
include('aws-20210730/Resource/Compute/AmazonEc2C5Instance')

' renders the element
AmazonEc2C5Instance('AmazonEc2C5Instance', 'Amazon Ec2 C5 Instance', 'an optional tech label')
@enduml
```

## AmazonEc2C5InstanceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonEc2C5InstanceCard
include('aws-20210730/Resource/Compute/AmazonEc2C5Instance')

' renders the element
AmazonEc2C5InstanceCard('AmazonEc2C5InstanceCard', 'Amazon Ec2 C5 Instance Card', 'an optional description')
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

' loads the Item which embeds the element AmazonEc2C5InstanceCard
include('aws-20210730/Resource/Compute/AmazonEc2C5Instance')

' renders the element
AmazonEc2C5InstanceCard('AmazonEc2C5InstanceCard', 'Amazon Ec2 C5 Instance Card', 'an optional description')
@enduml
```

## AmazonEc2C5InstanceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonEc2C5InstanceGroup
include('aws-20210730/Resource/Compute/AmazonEc2C5Instance')

' renders the element
AmazonEc2C5InstanceGroup('AmazonEc2C5InstanceGroup', 'Amazon Ec2 C5 Instance Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonEc2C5InstanceGroup
include('aws-20210730/Resource/Compute/AmazonEc2C5Instance')

' renders the element
AmazonEc2C5InstanceGroup('AmazonEc2C5InstanceGroup', 'Amazon Ec2 C5 Instance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

