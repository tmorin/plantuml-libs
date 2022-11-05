# AmazonEc2M1MacInstance


```text
aws-q3-2022/Resource/Compute/AmazonEc2M1MacInstance
```

```text
include('aws-q3-2022/Resource/Compute/AmazonEc2M1MacInstance')
```



| Illustration | AmazonEc2M1MacInstance | AmazonEc2M1MacInstanceCard | AmazonEc2M1MacInstanceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2022/Resource/Compute/AmazonEc2M1MacInstance.png) | ![illustration for AmazonEc2M1MacInstance](../../../aws-q3-2022/Resource/Compute/AmazonEc2M1MacInstance.Local.png) | ![illustration for AmazonEc2M1MacInstanceCard](../../../aws-q3-2022/Resource/Compute/AmazonEc2M1MacInstanceCard.Local.png) | ![illustration for AmazonEc2M1MacInstanceGroup](../../../aws-q3-2022/Resource/Compute/AmazonEc2M1MacInstanceGroup.Local.png) |




## AmazonEc2M1MacInstance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonEc2M1MacInstance
include('aws-q3-2022/Resource/Compute/AmazonEc2M1MacInstance')

' renders the element
AmazonEc2M1MacInstance('AmazonEc2M1MacInstance', 'Amazon Ec2 M1 Mac Instance', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AmazonEc2M1MacInstance
include('aws-q3-2022/Resource/Compute/AmazonEc2M1MacInstance')

' renders the element
AmazonEc2M1MacInstance('AmazonEc2M1MacInstance', 'Amazon Ec2 M1 Mac Instance', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonEc2M1MacInstanceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonEc2M1MacInstanceCard
include('aws-q3-2022/Resource/Compute/AmazonEc2M1MacInstance')

' renders the element
AmazonEc2M1MacInstanceCard('AmazonEc2M1MacInstanceCard', 'Amazon Ec2 M1 Mac Instance Card', 'an optional description')
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

' loads the Item which embeds the element AmazonEc2M1MacInstanceCard
include('aws-q3-2022/Resource/Compute/AmazonEc2M1MacInstance')

' renders the element
AmazonEc2M1MacInstanceCard('AmazonEc2M1MacInstanceCard', 'Amazon Ec2 M1 Mac Instance Card', 'an optional description')
@enduml
```

## AmazonEc2M1MacInstanceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonEc2M1MacInstanceGroup
include('aws-q3-2022/Resource/Compute/AmazonEc2M1MacInstance')

' renders the element
AmazonEc2M1MacInstanceGroup('AmazonEc2M1MacInstanceGroup', 'Amazon Ec2 M1 Mac Instance Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonEc2M1MacInstanceGroup
include('aws-q3-2022/Resource/Compute/AmazonEc2M1MacInstance')

' renders the element
AmazonEc2M1MacInstanceGroup('AmazonEc2M1MacInstanceGroup', 'Amazon Ec2 M1 Mac Instance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

