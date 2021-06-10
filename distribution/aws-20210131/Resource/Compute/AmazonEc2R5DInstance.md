# AmazonEc2R5DInstance


```text
aws-20210131/Resource/Compute/AmazonEc2R5DInstance
```

```text
include('aws-20210131/Resource/Compute/AmazonEc2R5DInstance')
```



| Illustration | AmazonEc2R5DInstance | AmazonEc2R5DInstanceCard | AmazonEc2R5DInstanceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Resource/Compute/AmazonEc2R5DInstance.png) | ![illustration for AmazonEc2R5DInstance](../../../aws-20210131/Resource/Compute/AmazonEc2R5DInstance.Local.png) | ![illustration for AmazonEc2R5DInstanceCard](../../../aws-20210131/Resource/Compute/AmazonEc2R5DInstanceCard.Local.png) | ![illustration for AmazonEc2R5DInstanceGroup](../../../aws-20210131/Resource/Compute/AmazonEc2R5DInstanceGroup.Local.png) |




## AmazonEc2R5DInstance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonEc2R5DInstance
include('aws-20210131/Resource/Compute/AmazonEc2R5DInstance')

' renders the element
AmazonEc2R5DInstance('AmazonEc2R5dInstance', 'Amazon Ec2 R5d Instance', 'an optional tech label')
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

' loads the Item which embeds the element AmazonEc2R5DInstance
include('aws-20210131/Resource/Compute/AmazonEc2R5DInstance')

' renders the element
AmazonEc2R5DInstance('AmazonEc2R5dInstance', 'Amazon Ec2 R5d Instance', 'an optional tech label')
@enduml
```

## AmazonEc2R5DInstanceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonEc2R5DInstanceCard
include('aws-20210131/Resource/Compute/AmazonEc2R5DInstance')

' renders the element
AmazonEc2R5DInstanceCard('AmazonEc2R5dInstanceCard', 'Amazon Ec2 R5d Instance Card', 'an optional description')
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

' loads the Item which embeds the element AmazonEc2R5DInstanceCard
include('aws-20210131/Resource/Compute/AmazonEc2R5DInstance')

' renders the element
AmazonEc2R5DInstanceCard('AmazonEc2R5dInstanceCard', 'Amazon Ec2 R5d Instance Card', 'an optional description')
@enduml
```

## AmazonEc2R5DInstanceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonEc2R5DInstanceGroup
include('aws-20210131/Resource/Compute/AmazonEc2R5DInstance')

' renders the element
AmazonEc2R5DInstanceGroup('AmazonEc2R5dInstanceGroup', 'Amazon Ec2 R5d Instance Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonEc2R5DInstanceGroup
include('aws-20210131/Resource/Compute/AmazonEc2R5DInstance')

' renders the element
AmazonEc2R5DInstanceGroup('AmazonEc2R5dInstanceGroup', 'Amazon Ec2 R5d Instance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

