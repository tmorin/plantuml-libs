# AmazonLookoutForVision


```text
aws-q1-2022/Architecture/MachineLearning/AmazonLookoutForVision
```

```text
include('aws-q1-2022/Architecture/MachineLearning/AmazonLookoutForVision')
```



| Illustration | AmazonLookoutForVision | AmazonLookoutForVisionCard | AmazonLookoutForVisionGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2022/Architecture/MachineLearning/AmazonLookoutForVision.png) | ![illustration for AmazonLookoutForVision](../../../aws-q1-2022/Architecture/MachineLearning/AmazonLookoutForVision.Local.png) | ![illustration for AmazonLookoutForVisionCard](../../../aws-q1-2022/Architecture/MachineLearning/AmazonLookoutForVisionCard.Local.png) | ![illustration for AmazonLookoutForVisionGroup](../../../aws-q1-2022/Architecture/MachineLearning/AmazonLookoutForVisionGroup.Local.png) |




## AmazonLookoutForVision

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonLookoutForVision
include('aws-q1-2022/Architecture/MachineLearning/AmazonLookoutForVision')

' renders the element
AmazonLookoutForVision('AmazonLookoutForVision', 'Amazon Lookout For Vision', 'an optional tech label')
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

' loads the Item which embeds the element AmazonLookoutForVision
include('aws-q1-2022/Architecture/MachineLearning/AmazonLookoutForVision')

' renders the element
AmazonLookoutForVision('AmazonLookoutForVision', 'Amazon Lookout For Vision', 'an optional tech label')
@enduml
```

## AmazonLookoutForVisionCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonLookoutForVisionCard
include('aws-q1-2022/Architecture/MachineLearning/AmazonLookoutForVision')

' renders the element
AmazonLookoutForVisionCard('AmazonLookoutForVisionCard', 'Amazon Lookout For Vision Card', 'an optional description')
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

' loads the Item which embeds the element AmazonLookoutForVisionCard
include('aws-q1-2022/Architecture/MachineLearning/AmazonLookoutForVision')

' renders the element
AmazonLookoutForVisionCard('AmazonLookoutForVisionCard', 'Amazon Lookout For Vision Card', 'an optional description')
@enduml
```

## AmazonLookoutForVisionGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonLookoutForVisionGroup
include('aws-q1-2022/Architecture/MachineLearning/AmazonLookoutForVision')

' renders the element
AmazonLookoutForVisionGroup('AmazonLookoutForVisionGroup', 'Amazon Lookout For Vision Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonLookoutForVisionGroup
include('aws-q1-2022/Architecture/MachineLearning/AmazonLookoutForVision')

' renders the element
AmazonLookoutForVisionGroup('AmazonLookoutForVisionGroup', 'Amazon Lookout For Vision Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

