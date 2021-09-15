# AmazonSageMakerGroundTruth


```text
aws-20210730/Architecture/MachineLearning/AmazonSageMakerGroundTruth
```

```text
include('aws-20210730/Architecture/MachineLearning/AmazonSageMakerGroundTruth')
```



| Illustration | AmazonSageMakerGroundTruth | AmazonSageMakerGroundTruthCard | AmazonSageMakerGroundTruthGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Architecture/MachineLearning/AmazonSageMakerGroundTruth.png) | ![illustration for AmazonSageMakerGroundTruth](../../../aws-20210730/Architecture/MachineLearning/AmazonSageMakerGroundTruth.Local.png) | ![illustration for AmazonSageMakerGroundTruthCard](../../../aws-20210730/Architecture/MachineLearning/AmazonSageMakerGroundTruthCard.Local.png) | ![illustration for AmazonSageMakerGroundTruthGroup](../../../aws-20210730/Architecture/MachineLearning/AmazonSageMakerGroundTruthGroup.Local.png) |




## AmazonSageMakerGroundTruth

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonSageMakerGroundTruth
include('aws-20210730/Architecture/MachineLearning/AmazonSageMakerGroundTruth')

' renders the element
AmazonSageMakerGroundTruth('AmazonSageMakerGroundTruth', 'Amazon Sage Maker Ground Truth', 'an optional tech label')
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonSageMakerGroundTruth
include('aws-20210730/Architecture/MachineLearning/AmazonSageMakerGroundTruth')

' renders the element
AmazonSageMakerGroundTruth('AmazonSageMakerGroundTruth', 'Amazon Sage Maker Ground Truth', 'an optional tech label')
@enduml
```

## AmazonSageMakerGroundTruthCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonSageMakerGroundTruthCard
include('aws-20210730/Architecture/MachineLearning/AmazonSageMakerGroundTruth')

' renders the element
AmazonSageMakerGroundTruthCard('AmazonSageMakerGroundTruthCard', 'Amazon Sage Maker Ground Truth Card', 'an optional description')
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonSageMakerGroundTruthCard
include('aws-20210730/Architecture/MachineLearning/AmazonSageMakerGroundTruth')

' renders the element
AmazonSageMakerGroundTruthCard('AmazonSageMakerGroundTruthCard', 'Amazon Sage Maker Ground Truth Card', 'an optional description')
@enduml
```

## AmazonSageMakerGroundTruthGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonSageMakerGroundTruthGroup
include('aws-20210730/Architecture/MachineLearning/AmazonSageMakerGroundTruth')

' renders the element
AmazonSageMakerGroundTruthGroup('AmazonSageMakerGroundTruthGroup', 'Amazon Sage Maker Ground Truth Group', 'an optional tech label') {
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
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonSageMakerGroundTruthGroup
include('aws-20210730/Architecture/MachineLearning/AmazonSageMakerGroundTruth')

' renders the element
AmazonSageMakerGroundTruthGroup('AmazonSageMakerGroundTruthGroup', 'Amazon Sage Maker Ground Truth Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

