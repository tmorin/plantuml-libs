# AwsDeepLearningAmIs


```text
aws-20210131/Architecture/MachineLearning/AwsDeepLearningAmIs
```

```text
include('aws-20210131/Architecture/MachineLearning/AwsDeepLearningAmIs')
```



| Illustration | AwsDeepLearningAmIs | AwsDeepLearningAmIsCard | AwsDeepLearningAmIsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/MachineLearning/AwsDeepLearningAmIs.png) | ![illustration for AwsDeepLearningAmIs](../../../aws-20210131/Architecture/MachineLearning/AwsDeepLearningAmIs.Local.png) | ![illustration for AwsDeepLearningAmIsCard](../../../aws-20210131/Architecture/MachineLearning/AwsDeepLearningAmIsCard.Local.png) | ![illustration for AwsDeepLearningAmIsGroup](../../../aws-20210131/Architecture/MachineLearning/AwsDeepLearningAmIsGroup.Local.png) |




## AwsDeepLearningAmIs

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsDeepLearningAmIs
include('aws-20210131/Architecture/MachineLearning/AwsDeepLearningAmIs')

' renders the element
AwsDeepLearningAmIs('AwsDeepLearningAmIs', 'Aws Deep Learning Am Is', 'an optional tech label')
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

' loads the Item which embeds the element AwsDeepLearningAmIs
include('aws-20210131/Architecture/MachineLearning/AwsDeepLearningAmIs')

' renders the element
AwsDeepLearningAmIs('AwsDeepLearningAmIs', 'Aws Deep Learning Am Is', 'an optional tech label')
@enduml
```

## AwsDeepLearningAmIsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsDeepLearningAmIsCard
include('aws-20210131/Architecture/MachineLearning/AwsDeepLearningAmIs')

' renders the element
AwsDeepLearningAmIsCard('AwsDeepLearningAmIsCard', 'Aws Deep Learning Am Is Card', 'an optional description')
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

' loads the Item which embeds the element AwsDeepLearningAmIsCard
include('aws-20210131/Architecture/MachineLearning/AwsDeepLearningAmIs')

' renders the element
AwsDeepLearningAmIsCard('AwsDeepLearningAmIsCard', 'Aws Deep Learning Am Is Card', 'an optional description')
@enduml
```

## AwsDeepLearningAmIsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AwsDeepLearningAmIsGroup
include('aws-20210131/Architecture/MachineLearning/AwsDeepLearningAmIs')

' renders the element
AwsDeepLearningAmIsGroup('AwsDeepLearningAmIsGroup', 'Aws Deep Learning Am Is Group', 'an optional tech label') {
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

' loads the Item which embeds the element AwsDeepLearningAmIsGroup
include('aws-20210131/Architecture/MachineLearning/AwsDeepLearningAmIs')

' renders the element
AwsDeepLearningAmIsGroup('AwsDeepLearningAmIsGroup', 'Aws Deep Learning Am Is Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

