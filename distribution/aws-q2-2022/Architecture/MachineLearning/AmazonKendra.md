# AmazonKendra


```text
aws-q2-2022/Architecture/MachineLearning/AmazonKendra
```

```text
include('aws-q2-2022/Architecture/MachineLearning/AmazonKendra')
```



| Illustration | AmazonKendra | AmazonKendraCard | AmazonKendraGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2022/Architecture/MachineLearning/AmazonKendra.png) | ![illustration for AmazonKendra](../../../aws-q2-2022/Architecture/MachineLearning/AmazonKendra.Local.png) | ![illustration for AmazonKendraCard](../../../aws-q2-2022/Architecture/MachineLearning/AmazonKendraCard.Local.png) | ![illustration for AmazonKendraGroup](../../../aws-q2-2022/Architecture/MachineLearning/AmazonKendraGroup.Local.png) |




## AmazonKendra

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonKendra
include('aws-q2-2022/Architecture/MachineLearning/AmazonKendra')

' renders the element
AmazonKendra('AmazonKendra', 'Amazon Kendra', 'an optional tech label')
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonKendra
include('aws-q2-2022/Architecture/MachineLearning/AmazonKendra')

' renders the element
AmazonKendra('AmazonKendra', 'Amazon Kendra', 'an optional tech label')
@enduml
```

## AmazonKendraCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonKendraCard
include('aws-q2-2022/Architecture/MachineLearning/AmazonKendra')

' renders the element
AmazonKendraCard('AmazonKendraCard', 'Amazon Kendra Card', 'an optional description')
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonKendraCard
include('aws-q2-2022/Architecture/MachineLearning/AmazonKendra')

' renders the element
AmazonKendraCard('AmazonKendraCard', 'Amazon Kendra Card', 'an optional description')
@enduml
```

## AmazonKendraGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonKendraGroup
include('aws-q2-2022/Architecture/MachineLearning/AmazonKendra')

' renders the element
AmazonKendraGroup('AmazonKendraGroup', 'Amazon Kendra Group', 'an optional tech label') {
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
include('aws-q2-2022/bootstrap')

' loads the Item which embeds the element AmazonKendraGroup
include('aws-q2-2022/Architecture/MachineLearning/AmazonKendra')

' renders the element
AmazonKendraGroup('AmazonKendraGroup', 'Amazon Kendra Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

