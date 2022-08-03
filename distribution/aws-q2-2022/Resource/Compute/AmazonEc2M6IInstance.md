# AmazonEc2M6IInstance


```text
aws-q2-2022/Resource/Compute/AmazonEc2M6IInstance
```

```text
include('aws-q2-2022/Resource/Compute/AmazonEc2M6IInstance')
```



| Illustration | AmazonEc2M6IInstance | AmazonEc2M6IInstanceCard | AmazonEc2M6IInstanceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2022/Resource/Compute/AmazonEc2M6IInstance.png) | ![illustration for AmazonEc2M6IInstance](../../../aws-q2-2022/Resource/Compute/AmazonEc2M6IInstance.Local.png) | ![illustration for AmazonEc2M6IInstanceCard](../../../aws-q2-2022/Resource/Compute/AmazonEc2M6IInstanceCard.Local.png) | ![illustration for AmazonEc2M6IInstanceGroup](../../../aws-q2-2022/Resource/Compute/AmazonEc2M6IInstanceGroup.Local.png) |




## AmazonEc2M6IInstance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonEc2M6IInstance
include('aws-q2-2022/Resource/Compute/AmazonEc2M6IInstance')

' renders the element
AmazonEc2M6IInstance('AmazonEc2M6iInstance', 'Amazon Ec2 M6i Instance', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AmazonEc2M6IInstance
include('aws-q2-2022/Resource/Compute/AmazonEc2M6IInstance')

' renders the element
AmazonEc2M6IInstance('AmazonEc2M6iInstance', 'Amazon Ec2 M6i Instance', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonEc2M6IInstanceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonEc2M6IInstanceCard
include('aws-q2-2022/Resource/Compute/AmazonEc2M6IInstance')

' renders the element
AmazonEc2M6IInstanceCard('AmazonEc2M6iInstanceCard', 'Amazon Ec2 M6i Instance Card', 'an optional description')
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

' loads the Item which embeds the element AmazonEc2M6IInstanceCard
include('aws-q2-2022/Resource/Compute/AmazonEc2M6IInstance')

' renders the element
AmazonEc2M6IInstanceCard('AmazonEc2M6iInstanceCard', 'Amazon Ec2 M6i Instance Card', 'an optional description')
@enduml
```

## AmazonEc2M6IInstanceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonEc2M6IInstanceGroup
include('aws-q2-2022/Resource/Compute/AmazonEc2M6IInstance')

' renders the element
AmazonEc2M6IInstanceGroup('AmazonEc2M6iInstanceGroup', 'Amazon Ec2 M6i Instance Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonEc2M6IInstanceGroup
include('aws-q2-2022/Resource/Compute/AmazonEc2M6IInstance')

' renders the element
AmazonEc2M6IInstanceGroup('AmazonEc2M6iInstanceGroup', 'Amazon Ec2 M6i Instance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

