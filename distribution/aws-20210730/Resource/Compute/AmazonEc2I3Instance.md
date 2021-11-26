# AmazonEc2I3Instance


```text
aws-20210730/Resource/Compute/AmazonEc2I3Instance
```

```text
include('aws-20210730/Resource/Compute/AmazonEc2I3Instance')
```



| Illustration | AmazonEc2I3Instance | AmazonEc2I3InstanceCard | AmazonEc2I3InstanceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Resource/Compute/AmazonEc2I3Instance.png) | ![illustration for AmazonEc2I3Instance](../../../aws-20210730/Resource/Compute/AmazonEc2I3Instance.Local.png) | ![illustration for AmazonEc2I3InstanceCard](../../../aws-20210730/Resource/Compute/AmazonEc2I3InstanceCard.Local.png) | ![illustration for AmazonEc2I3InstanceGroup](../../../aws-20210730/Resource/Compute/AmazonEc2I3InstanceGroup.Local.png) |




## AmazonEc2I3Instance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonEc2I3Instance
include('aws-20210730/Resource/Compute/AmazonEc2I3Instance')

' renders the element
AmazonEc2I3Instance('AmazonEc2I3Instance', 'Amazon Ec2 I3 Instance', 'an optional tech label')
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

' loads the Item which embeds the element AmazonEc2I3Instance
include('aws-20210730/Resource/Compute/AmazonEc2I3Instance')

' renders the element
AmazonEc2I3Instance('AmazonEc2I3Instance', 'Amazon Ec2 I3 Instance', 'an optional tech label')
@enduml
```

## AmazonEc2I3InstanceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonEc2I3InstanceCard
include('aws-20210730/Resource/Compute/AmazonEc2I3Instance')

' renders the element
AmazonEc2I3InstanceCard('AmazonEc2I3InstanceCard', 'Amazon Ec2 I3 Instance Card', 'an optional description')
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

' loads the Item which embeds the element AmazonEc2I3InstanceCard
include('aws-20210730/Resource/Compute/AmazonEc2I3Instance')

' renders the element
AmazonEc2I3InstanceCard('AmazonEc2I3InstanceCard', 'Amazon Ec2 I3 Instance Card', 'an optional description')
@enduml
```

## AmazonEc2I3InstanceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonEc2I3InstanceGroup
include('aws-20210730/Resource/Compute/AmazonEc2I3Instance')

' renders the element
AmazonEc2I3InstanceGroup('AmazonEc2I3InstanceGroup', 'Amazon Ec2 I3 Instance Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonEc2I3InstanceGroup
include('aws-20210730/Resource/Compute/AmazonEc2I3Instance')

' renders the element
AmazonEc2I3InstanceGroup('AmazonEc2I3InstanceGroup', 'Amazon Ec2 I3 Instance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

