# AmazonEc2C5NInstance


```text
aws-20210131/Resource/Compute/AmazonEc2C5NInstance
```

```text
include('aws-20210131/Resource/Compute/AmazonEc2C5NInstance')
```



| Illustration | AmazonEc2C5NInstance | AmazonEc2C5NInstanceCard | AmazonEc2C5NInstanceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Resource/Compute/AmazonEc2C5NInstance.png) | ![illustration for AmazonEc2C5NInstance](../../../aws-20210131/Resource/Compute/AmazonEc2C5NInstance.Local.png) | ![illustration for AmazonEc2C5NInstanceCard](../../../aws-20210131/Resource/Compute/AmazonEc2C5NInstanceCard.Local.png) | ![illustration for AmazonEc2C5NInstanceGroup](../../../aws-20210131/Resource/Compute/AmazonEc2C5NInstanceGroup.Local.png) |




## AmazonEc2C5NInstance

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonEc2C5NInstance
include('aws-20210131/Resource/Compute/AmazonEc2C5NInstance')

' renders the element
AmazonEc2C5NInstance('AmazonEc2C5nInstance', 'Amazon Ec2 C5n Instance', 'an optional tech label')
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

' loads the Item which embeds the element AmazonEc2C5NInstance
include('aws-20210131/Resource/Compute/AmazonEc2C5NInstance')

' renders the element
AmazonEc2C5NInstance('AmazonEc2C5nInstance', 'Amazon Ec2 C5n Instance', 'an optional tech label')
@enduml
```

## AmazonEc2C5NInstanceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonEc2C5NInstanceCard
include('aws-20210131/Resource/Compute/AmazonEc2C5NInstance')

' renders the element
AmazonEc2C5NInstanceCard('AmazonEc2C5nInstanceCard', 'Amazon Ec2 C5n Instance Card', 'an optional description')
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

' loads the Item which embeds the element AmazonEc2C5NInstanceCard
include('aws-20210131/Resource/Compute/AmazonEc2C5NInstance')

' renders the element
AmazonEc2C5NInstanceCard('AmazonEc2C5nInstanceCard', 'Amazon Ec2 C5n Instance Card', 'an optional description')
@enduml
```

## AmazonEc2C5NInstanceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonEc2C5NInstanceGroup
include('aws-20210131/Resource/Compute/AmazonEc2C5NInstance')

' renders the element
AmazonEc2C5NInstanceGroup('AmazonEc2C5nInstanceGroup', 'Amazon Ec2 C5n Instance Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonEc2C5NInstanceGroup
include('aws-20210131/Resource/Compute/AmazonEc2C5NInstance')

' renders the element
AmazonEc2C5NInstanceGroup('AmazonEc2C5nInstanceGroup', 'Amazon Ec2 C5n Instance Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

