# AmazonOmics


```text
aws-q1-2023/Architecture/MachineLearning/AmazonOmics
```

```text
include('aws-q1-2023/Architecture/MachineLearning/AmazonOmics')
```



| Illustration | AmazonOmics | AmazonOmicsCard | AmazonOmicsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2023/Architecture/MachineLearning/AmazonOmics.png) | ![illustration for AmazonOmics](../../../aws-q1-2023/Architecture/MachineLearning/AmazonOmics.Local.png) | ![illustration for AmazonOmicsCard](../../../aws-q1-2023/Architecture/MachineLearning/AmazonOmicsCard.Local.png) | ![illustration for AmazonOmicsGroup](../../../aws-q1-2023/Architecture/MachineLearning/AmazonOmicsGroup.Local.png) |




## AmazonOmics

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonOmics
include('aws-q1-2023/Architecture/MachineLearning/AmazonOmics')

' renders the element
AmazonOmics('AmazonOmics', 'Amazon Omics', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AmazonOmics
include('aws-q1-2023/Architecture/MachineLearning/AmazonOmics')

' renders the element
AmazonOmics('AmazonOmics', 'Amazon Omics', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonOmicsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonOmicsCard
include('aws-q1-2023/Architecture/MachineLearning/AmazonOmics')

' renders the element
AmazonOmicsCard('AmazonOmicsCard', 'Amazon Omics Card', 'an optional description')
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

' loads the Item which embeds the element AmazonOmicsCard
include('aws-q1-2023/Architecture/MachineLearning/AmazonOmics')

' renders the element
AmazonOmicsCard('AmazonOmicsCard', 'Amazon Omics Card', 'an optional description')
@enduml
```

## AmazonOmicsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonOmicsGroup
include('aws-q1-2023/Architecture/MachineLearning/AmazonOmics')

' renders the element
AmazonOmicsGroup('AmazonOmicsGroup', 'Amazon Omics Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonOmicsGroup
include('aws-q1-2023/Architecture/MachineLearning/AmazonOmics')

' renders the element
AmazonOmicsGroup('AmazonOmicsGroup', 'Amazon Omics Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

