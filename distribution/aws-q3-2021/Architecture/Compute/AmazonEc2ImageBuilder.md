# AmazonEc2ImageBuilder


```text
aws-q3-2021/Architecture/Compute/AmazonEc2ImageBuilder
```

```text
include('aws-q3-2021/Architecture/Compute/AmazonEc2ImageBuilder')
```



| Illustration | AmazonEc2ImageBuilder | AmazonEc2ImageBuilderCard | AmazonEc2ImageBuilderGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2021/Architecture/Compute/AmazonEc2ImageBuilder.png) | ![illustration for AmazonEc2ImageBuilder](../../../aws-q3-2021/Architecture/Compute/AmazonEc2ImageBuilder.Local.png) | ![illustration for AmazonEc2ImageBuilderCard](../../../aws-q3-2021/Architecture/Compute/AmazonEc2ImageBuilderCard.Local.png) | ![illustration for AmazonEc2ImageBuilderGroup](../../../aws-q3-2021/Architecture/Compute/AmazonEc2ImageBuilderGroup.Local.png) |




## AmazonEc2ImageBuilder

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonEc2ImageBuilder
include('aws-q3-2021/Architecture/Compute/AmazonEc2ImageBuilder')

' renders the element
AmazonEc2ImageBuilder('AmazonEc2ImageBuilder', 'Amazon Ec2 Image Builder', 'an optional tech label')
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonEc2ImageBuilder
include('aws-q3-2021/Architecture/Compute/AmazonEc2ImageBuilder')

' renders the element
AmazonEc2ImageBuilder('AmazonEc2ImageBuilder', 'Amazon Ec2 Image Builder', 'an optional tech label')
@enduml
```

## AmazonEc2ImageBuilderCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonEc2ImageBuilderCard
include('aws-q3-2021/Architecture/Compute/AmazonEc2ImageBuilder')

' renders the element
AmazonEc2ImageBuilderCard('AmazonEc2ImageBuilderCard', 'Amazon Ec2 Image Builder Card', 'an optional description')
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonEc2ImageBuilderCard
include('aws-q3-2021/Architecture/Compute/AmazonEc2ImageBuilder')

' renders the element
AmazonEc2ImageBuilderCard('AmazonEc2ImageBuilderCard', 'Amazon Ec2 Image Builder Card', 'an optional description')
@enduml
```

## AmazonEc2ImageBuilderGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonEc2ImageBuilderGroup
include('aws-q3-2021/Architecture/Compute/AmazonEc2ImageBuilder')

' renders the element
AmazonEc2ImageBuilderGroup('AmazonEc2ImageBuilderGroup', 'Amazon Ec2 Image Builder Group', 'an optional tech label') {
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonEc2ImageBuilderGroup
include('aws-q3-2021/Architecture/Compute/AmazonEc2ImageBuilder')

' renders the element
AmazonEc2ImageBuilderGroup('AmazonEc2ImageBuilderGroup', 'Amazon Ec2 Image Builder Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

