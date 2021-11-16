# AmazonSageMaker


```text
aws-q3-2021/Architecture/MachineLearning/AmazonSageMaker
```

```text
include('aws-q3-2021/Architecture/MachineLearning/AmazonSageMaker')
```



| Illustration | AmazonSageMaker | AmazonSageMakerCard | AmazonSageMakerGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2021/Architecture/MachineLearning/AmazonSageMaker.png) | ![illustration for AmazonSageMaker](../../../aws-q3-2021/Architecture/MachineLearning/AmazonSageMaker.Local.png) | ![illustration for AmazonSageMakerCard](../../../aws-q3-2021/Architecture/MachineLearning/AmazonSageMakerCard.Local.png) | ![illustration for AmazonSageMakerGroup](../../../aws-q3-2021/Architecture/MachineLearning/AmazonSageMakerGroup.Local.png) |




## AmazonSageMaker

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonSageMaker
include('aws-q3-2021/Architecture/MachineLearning/AmazonSageMaker')

' renders the element
AmazonSageMaker('AmazonSageMaker', 'Amazon Sage Maker', 'an optional tech label')
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

' loads the Item which embeds the element AmazonSageMaker
include('aws-q3-2021/Architecture/MachineLearning/AmazonSageMaker')

' renders the element
AmazonSageMaker('AmazonSageMaker', 'Amazon Sage Maker', 'an optional tech label')
@enduml
```

## AmazonSageMakerCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonSageMakerCard
include('aws-q3-2021/Architecture/MachineLearning/AmazonSageMaker')

' renders the element
AmazonSageMakerCard('AmazonSageMakerCard', 'Amazon Sage Maker Card', 'an optional description')
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

' loads the Item which embeds the element AmazonSageMakerCard
include('aws-q3-2021/Architecture/MachineLearning/AmazonSageMaker')

' renders the element
AmazonSageMakerCard('AmazonSageMakerCard', 'Amazon Sage Maker Card', 'an optional description')
@enduml
```

## AmazonSageMakerGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonSageMakerGroup
include('aws-q3-2021/Architecture/MachineLearning/AmazonSageMaker')

' renders the element
AmazonSageMakerGroup('AmazonSageMakerGroup', 'Amazon Sage Maker Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonSageMakerGroup
include('aws-q3-2021/Architecture/MachineLearning/AmazonSageMaker')

' renders the element
AmazonSageMakerGroup('AmazonSageMakerGroup', 'Amazon Sage Maker Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

