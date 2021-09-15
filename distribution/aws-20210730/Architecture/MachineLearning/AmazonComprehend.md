# AmazonComprehend


```text
aws-20210730/Architecture/MachineLearning/AmazonComprehend
```

```text
include('aws-20210730/Architecture/MachineLearning/AmazonComprehend')
```



| Illustration | AmazonComprehend | AmazonComprehendCard | AmazonComprehendGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Architecture/MachineLearning/AmazonComprehend.png) | ![illustration for AmazonComprehend](../../../aws-20210730/Architecture/MachineLearning/AmazonComprehend.Local.png) | ![illustration for AmazonComprehendCard](../../../aws-20210730/Architecture/MachineLearning/AmazonComprehendCard.Local.png) | ![illustration for AmazonComprehendGroup](../../../aws-20210730/Architecture/MachineLearning/AmazonComprehendGroup.Local.png) |




## AmazonComprehend

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonComprehend
include('aws-20210730/Architecture/MachineLearning/AmazonComprehend')

' renders the element
AmazonComprehend('AmazonComprehend', 'Amazon Comprehend', 'an optional tech label')
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

' loads the Item which embeds the element AmazonComprehend
include('aws-20210730/Architecture/MachineLearning/AmazonComprehend')

' renders the element
AmazonComprehend('AmazonComprehend', 'Amazon Comprehend', 'an optional tech label')
@enduml
```

## AmazonComprehendCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonComprehendCard
include('aws-20210730/Architecture/MachineLearning/AmazonComprehend')

' renders the element
AmazonComprehendCard('AmazonComprehendCard', 'Amazon Comprehend Card', 'an optional description')
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

' loads the Item which embeds the element AmazonComprehendCard
include('aws-20210730/Architecture/MachineLearning/AmazonComprehend')

' renders the element
AmazonComprehendCard('AmazonComprehendCard', 'Amazon Comprehend Card', 'an optional description')
@enduml
```

## AmazonComprehendGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonComprehendGroup
include('aws-20210730/Architecture/MachineLearning/AmazonComprehend')

' renders the element
AmazonComprehendGroup('AmazonComprehendGroup', 'Amazon Comprehend Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonComprehendGroup
include('aws-20210730/Architecture/MachineLearning/AmazonComprehend')

' renders the element
AmazonComprehendGroup('AmazonComprehendGroup', 'Amazon Comprehend Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

