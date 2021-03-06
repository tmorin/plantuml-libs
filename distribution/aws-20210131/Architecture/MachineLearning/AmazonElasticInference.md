# AmazonElasticInference


```text
aws-20210131/Architecture/MachineLearning/AmazonElasticInference
```

```text
include('aws-20210131/Architecture/MachineLearning/AmazonElasticInference')
```



| Illustration | AmazonElasticInference | AmazonElasticInferenceCard | AmazonElasticInferenceGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/MachineLearning/AmazonElasticInference.png) | ![illustration for AmazonElasticInference](../../../aws-20210131/Architecture/MachineLearning/AmazonElasticInference.Local.png) | ![illustration for AmazonElasticInferenceCard](../../../aws-20210131/Architecture/MachineLearning/AmazonElasticInferenceCard.Local.png) | ![illustration for AmazonElasticInferenceGroup](../../../aws-20210131/Architecture/MachineLearning/AmazonElasticInferenceGroup.Local.png) |




## AmazonElasticInference

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonElasticInference
include('aws-20210131/Architecture/MachineLearning/AmazonElasticInference')

' renders the element
AmazonElasticInference('AmazonElasticInference', 'Amazon Elastic Inference', 'an optional tech label')
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

' loads the Item which embeds the element AmazonElasticInference
include('aws-20210131/Architecture/MachineLearning/AmazonElasticInference')

' renders the element
AmazonElasticInference('AmazonElasticInference', 'Amazon Elastic Inference', 'an optional tech label')
@enduml
```

## AmazonElasticInferenceCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonElasticInferenceCard
include('aws-20210131/Architecture/MachineLearning/AmazonElasticInference')

' renders the element
AmazonElasticInferenceCard('AmazonElasticInferenceCard', 'Amazon Elastic Inference Card', 'an optional description')
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

' loads the Item which embeds the element AmazonElasticInferenceCard
include('aws-20210131/Architecture/MachineLearning/AmazonElasticInference')

' renders the element
AmazonElasticInferenceCard('AmazonElasticInferenceCard', 'Amazon Elastic Inference Card', 'an optional description')
@enduml
```

## AmazonElasticInferenceGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonElasticInferenceGroup
include('aws-20210131/Architecture/MachineLearning/AmazonElasticInference')

' renders the element
AmazonElasticInferenceGroup('AmazonElasticInferenceGroup', 'Amazon Elastic Inference Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonElasticInferenceGroup
include('aws-20210131/Architecture/MachineLearning/AmazonElasticInference')

' renders the element
AmazonElasticInferenceGroup('AmazonElasticInferenceGroup', 'Amazon Elastic Inference Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

