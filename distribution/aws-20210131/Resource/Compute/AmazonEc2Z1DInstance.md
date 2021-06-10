# AmazonEc2Z1DInstance


```text
aws-20210131/Resource/Compute/AmazonEc2Z1DInstance
```

```text
include('aws-20210131/Resource/Compute/AmazonEc2Z1DInstance')
```



| Illustration | AmazonEc2Z1DInstance | AmazonEc2Z1DInstanceCard | AmazonEc2Z1DInstanceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Resource/Compute/AmazonEc2Z1DInstance.png) | ![illustration for AmazonEc2Z1DInstance](../../../aws-20210131/Resource/Compute/AmazonEc2Z1DInstance.Local.png) | ![illustration for AmazonEc2Z1DInstanceCard](../../../aws-20210131/Resource/Compute/AmazonEc2Z1DInstanceCard.Local.png) | ![illustration for AmazonEc2Z1DInstanceGroup](../../../aws-20210131/Resource/Compute/AmazonEc2Z1DInstanceGroup.Local.png) |




## AmazonEc2Z1DInstance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonEc2Z1DInstance
include('aws-20210131/Resource/Compute/AmazonEc2Z1DInstance')

' renders the element
AmazonEc2Z1DInstance('AmazonEc2Z1dInstance', 'Amazon Ec2 Z1d Instance', 'an optional tech label')
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

' loads the Item which embeds the element AmazonEc2Z1DInstance
include('aws-20210131/Resource/Compute/AmazonEc2Z1DInstance')

' renders the element
AmazonEc2Z1DInstance('AmazonEc2Z1dInstance', 'Amazon Ec2 Z1d Instance', 'an optional tech label')
@enduml
```

## AmazonEc2Z1DInstanceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonEc2Z1DInstanceCard
include('aws-20210131/Resource/Compute/AmazonEc2Z1DInstance')

' renders the element
AmazonEc2Z1DInstanceCard('AmazonEc2Z1dInstanceCard', 'Amazon Ec2 Z1d Instance Card', 'an optional description')
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

' loads the Item which embeds the element AmazonEc2Z1DInstanceCard
include('aws-20210131/Resource/Compute/AmazonEc2Z1DInstance')

' renders the element
AmazonEc2Z1DInstanceCard('AmazonEc2Z1dInstanceCard', 'Amazon Ec2 Z1d Instance Card', 'an optional description')
@enduml
```

## AmazonEc2Z1DInstanceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonEc2Z1DInstanceGroup
include('aws-20210131/Resource/Compute/AmazonEc2Z1DInstance')

' renders the element
AmazonEc2Z1DInstanceGroup('AmazonEc2Z1dInstanceGroup', 'Amazon Ec2 Z1d Instance Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonEc2Z1DInstanceGroup
include('aws-20210131/Resource/Compute/AmazonEc2Z1DInstance')

' renders the element
AmazonEc2Z1DInstanceGroup('AmazonEc2Z1dInstanceGroup', 'Amazon Ec2 Z1d Instance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

