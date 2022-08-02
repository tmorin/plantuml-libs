# AmazonEc2I3EnInstance


```text
aws-q1-2022/Resource/Compute/AmazonEc2I3EnInstance
```

```text
include('aws-q1-2022/Resource/Compute/AmazonEc2I3EnInstance')
```



| Illustration | AmazonEc2I3EnInstance | AmazonEc2I3EnInstanceCard | AmazonEc2I3EnInstanceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2022/Resource/Compute/AmazonEc2I3EnInstance.png) | ![illustration for AmazonEc2I3EnInstance](../../../aws-q1-2022/Resource/Compute/AmazonEc2I3EnInstance.Local.png) | ![illustration for AmazonEc2I3EnInstanceCard](../../../aws-q1-2022/Resource/Compute/AmazonEc2I3EnInstanceCard.Local.png) | ![illustration for AmazonEc2I3EnInstanceGroup](../../../aws-q1-2022/Resource/Compute/AmazonEc2I3EnInstanceGroup.Local.png) |




## AmazonEc2I3EnInstance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonEc2I3EnInstance
include('aws-q1-2022/Resource/Compute/AmazonEc2I3EnInstance')

' renders the element
AmazonEc2I3EnInstance('AmazonEc2I3EnInstance', 'Amazon Ec2 I3 En Instance', 'an optional tech label', 'an optional description')
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
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonEc2I3EnInstance
include('aws-q1-2022/Resource/Compute/AmazonEc2I3EnInstance')

' renders the element
AmazonEc2I3EnInstance('AmazonEc2I3EnInstance', 'Amazon Ec2 I3 En Instance', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonEc2I3EnInstanceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonEc2I3EnInstanceCard
include('aws-q1-2022/Resource/Compute/AmazonEc2I3EnInstance')

' renders the element
AmazonEc2I3EnInstanceCard('AmazonEc2I3EnInstanceCard', 'Amazon Ec2 I3 En Instance Card', 'an optional description')
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
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonEc2I3EnInstanceCard
include('aws-q1-2022/Resource/Compute/AmazonEc2I3EnInstance')

' renders the element
AmazonEc2I3EnInstanceCard('AmazonEc2I3EnInstanceCard', 'Amazon Ec2 I3 En Instance Card', 'an optional description')
@enduml
```

## AmazonEc2I3EnInstanceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonEc2I3EnInstanceGroup
include('aws-q1-2022/Resource/Compute/AmazonEc2I3EnInstance')

' renders the element
AmazonEc2I3EnInstanceGroup('AmazonEc2I3EnInstanceGroup', 'Amazon Ec2 I3 En Instance Group', 'an optional tech label') {
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
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonEc2I3EnInstanceGroup
include('aws-q1-2022/Resource/Compute/AmazonEc2I3EnInstance')

' renders the element
AmazonEc2I3EnInstanceGroup('AmazonEc2I3EnInstanceGroup', 'Amazon Ec2 I3 En Instance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

