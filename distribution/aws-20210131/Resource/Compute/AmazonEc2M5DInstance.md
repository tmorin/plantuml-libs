# AmazonEc2M5DInstance


```text
aws-20210131/Resource/Compute/AmazonEc2M5DInstance
```

```text
include('aws-20210131/Resource/Compute/AmazonEc2M5DInstance')
```



| Illustration | AmazonEc2M5DInstance | AmazonEc2M5DInstanceCard | AmazonEc2M5DInstanceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Resource/Compute/AmazonEc2M5DInstance.png) | ![illustration for AmazonEc2M5DInstance](../../../aws-20210131/Resource/Compute/AmazonEc2M5DInstance.Local.png) | ![illustration for AmazonEc2M5DInstanceCard](../../../aws-20210131/Resource/Compute/AmazonEc2M5DInstanceCard.Local.png) | ![illustration for AmazonEc2M5DInstanceGroup](../../../aws-20210131/Resource/Compute/AmazonEc2M5DInstanceGroup.Local.png) |




## AmazonEc2M5DInstance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonEc2M5DInstance
include('aws-20210131/Resource/Compute/AmazonEc2M5DInstance')

' renders the element
AmazonEc2M5DInstance('AmazonEc2M5dInstance', 'Amazon Ec2 M5d Instance', 'an optional tech label')
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

' loads the Item which embeds the element AmazonEc2M5DInstance
include('aws-20210131/Resource/Compute/AmazonEc2M5DInstance')

' renders the element
AmazonEc2M5DInstance('AmazonEc2M5dInstance', 'Amazon Ec2 M5d Instance', 'an optional tech label')
@enduml
```

## AmazonEc2M5DInstanceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonEc2M5DInstanceCard
include('aws-20210131/Resource/Compute/AmazonEc2M5DInstance')

' renders the element
AmazonEc2M5DInstanceCard('AmazonEc2M5dInstanceCard', 'Amazon Ec2 M5d Instance Card', 'an optional description')
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

' loads the Item which embeds the element AmazonEc2M5DInstanceCard
include('aws-20210131/Resource/Compute/AmazonEc2M5DInstance')

' renders the element
AmazonEc2M5DInstanceCard('AmazonEc2M5dInstanceCard', 'Amazon Ec2 M5d Instance Card', 'an optional description')
@enduml
```

## AmazonEc2M5DInstanceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonEc2M5DInstanceGroup
include('aws-20210131/Resource/Compute/AmazonEc2M5DInstance')

' renders the element
AmazonEc2M5DInstanceGroup('AmazonEc2M5dInstanceGroup', 'Amazon Ec2 M5d Instance Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonEc2M5DInstanceGroup
include('aws-20210131/Resource/Compute/AmazonEc2M5DInstance')

' renders the element
AmazonEc2M5DInstanceGroup('AmazonEc2M5dInstanceGroup', 'Amazon Ec2 M5d Instance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

