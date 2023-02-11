# AmazonEc2M5NInstance


```text
aws-q1-2023/Resource/Compute/AmazonEc2M5NInstance
```

```text
include('aws-q1-2023/Resource/Compute/AmazonEc2M5NInstance')
```



| Illustration | AmazonEc2M5NInstance | AmazonEc2M5NInstanceCard | AmazonEc2M5NInstanceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2023/Resource/Compute/AmazonEc2M5NInstance.png) | ![illustration for AmazonEc2M5NInstance](../../../aws-q1-2023/Resource/Compute/AmazonEc2M5NInstance.Local.png) | ![illustration for AmazonEc2M5NInstanceCard](../../../aws-q1-2023/Resource/Compute/AmazonEc2M5NInstanceCard.Local.png) | ![illustration for AmazonEc2M5NInstanceGroup](../../../aws-q1-2023/Resource/Compute/AmazonEc2M5NInstanceGroup.Local.png) |




## AmazonEc2M5NInstance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonEc2M5NInstance
include('aws-q1-2023/Resource/Compute/AmazonEc2M5NInstance')

' renders the element
AmazonEc2M5NInstance('AmazonEc2M5nInstance', 'Amazon Ec2 M5n Instance', 'an optional tech label', 'an optional description')
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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonEc2M5NInstance
include('aws-q1-2023/Resource/Compute/AmazonEc2M5NInstance')

' renders the element
AmazonEc2M5NInstance('AmazonEc2M5nInstance', 'Amazon Ec2 M5n Instance', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonEc2M5NInstanceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonEc2M5NInstanceCard
include('aws-q1-2023/Resource/Compute/AmazonEc2M5NInstance')

' renders the element
AmazonEc2M5NInstanceCard('AmazonEc2M5nInstanceCard', 'Amazon Ec2 M5n Instance Card', 'an optional description')
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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonEc2M5NInstanceCard
include('aws-q1-2023/Resource/Compute/AmazonEc2M5NInstance')

' renders the element
AmazonEc2M5NInstanceCard('AmazonEc2M5nInstanceCard', 'Amazon Ec2 M5n Instance Card', 'an optional description')
@enduml
```

## AmazonEc2M5NInstanceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonEc2M5NInstanceGroup
include('aws-q1-2023/Resource/Compute/AmazonEc2M5NInstance')

' renders the element
AmazonEc2M5NInstanceGroup('AmazonEc2M5nInstanceGroup', 'Amazon Ec2 M5n Instance Group', 'an optional tech label') {
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
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonEc2M5NInstanceGroup
include('aws-q1-2023/Resource/Compute/AmazonEc2M5NInstance')

' renders the element
AmazonEc2M5NInstanceGroup('AmazonEc2M5nInstanceGroup', 'Amazon Ec2 M5n Instance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

