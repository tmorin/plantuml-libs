# AmazonEc2R6IInstance


```text
aws-q3-2022/Resource/Compute/AmazonEc2R6IInstance
```

```text
include('aws-q3-2022/Resource/Compute/AmazonEc2R6IInstance')
```



| Illustration | AmazonEc2R6IInstance | AmazonEc2R6IInstanceCard | AmazonEc2R6IInstanceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2022/Resource/Compute/AmazonEc2R6IInstance.png) | ![illustration for AmazonEc2R6IInstance](../../../aws-q3-2022/Resource/Compute/AmazonEc2R6IInstance.Local.png) | ![illustration for AmazonEc2R6IInstanceCard](../../../aws-q3-2022/Resource/Compute/AmazonEc2R6IInstanceCard.Local.png) | ![illustration for AmazonEc2R6IInstanceGroup](../../../aws-q3-2022/Resource/Compute/AmazonEc2R6IInstanceGroup.Local.png) |




## AmazonEc2R6IInstance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonEc2R6IInstance
include('aws-q3-2022/Resource/Compute/AmazonEc2R6IInstance')

' renders the element
AmazonEc2R6IInstance('AmazonEc2R6iInstance', 'Amazon Ec2 R6i Instance', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AmazonEc2R6IInstance
include('aws-q3-2022/Resource/Compute/AmazonEc2R6IInstance')

' renders the element
AmazonEc2R6IInstance('AmazonEc2R6iInstance', 'Amazon Ec2 R6i Instance', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonEc2R6IInstanceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonEc2R6IInstanceCard
include('aws-q3-2022/Resource/Compute/AmazonEc2R6IInstance')

' renders the element
AmazonEc2R6IInstanceCard('AmazonEc2R6iInstanceCard', 'Amazon Ec2 R6i Instance Card', 'an optional description')
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

' loads the Item which embeds the element AmazonEc2R6IInstanceCard
include('aws-q3-2022/Resource/Compute/AmazonEc2R6IInstance')

' renders the element
AmazonEc2R6IInstanceCard('AmazonEc2R6iInstanceCard', 'Amazon Ec2 R6i Instance Card', 'an optional description')
@enduml
```

## AmazonEc2R6IInstanceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonEc2R6IInstanceGroup
include('aws-q3-2022/Resource/Compute/AmazonEc2R6IInstance')

' renders the element
AmazonEc2R6IInstanceGroup('AmazonEc2R6iInstanceGroup', 'Amazon Ec2 R6i Instance Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonEc2R6IInstanceGroup
include('aws-q3-2022/Resource/Compute/AmazonEc2R6IInstance')

' renders the element
AmazonEc2R6IInstanceGroup('AmazonEc2R6iInstanceGroup', 'Amazon Ec2 R6i Instance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

