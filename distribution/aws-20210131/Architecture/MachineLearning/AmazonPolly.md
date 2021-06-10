# AmazonPolly


```text
aws-20210131/Architecture/MachineLearning/AmazonPolly
```

```text
include('aws-20210131/Architecture/MachineLearning/AmazonPolly')
```



| Illustration | AmazonPolly | AmazonPollyCard | AmazonPollyGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/MachineLearning/AmazonPolly.png) | ![illustration for AmazonPolly](../../../aws-20210131/Architecture/MachineLearning/AmazonPolly.Local.png) | ![illustration for AmazonPollyCard](../../../aws-20210131/Architecture/MachineLearning/AmazonPollyCard.Local.png) | ![illustration for AmazonPollyGroup](../../../aws-20210131/Architecture/MachineLearning/AmazonPollyGroup.Local.png) |




## AmazonPolly

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonPolly
include('aws-20210131/Architecture/MachineLearning/AmazonPolly')

' renders the element
AmazonPolly('AmazonPolly', 'Amazon Polly', 'an optional tech label')
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

' loads the Item which embeds the element AmazonPolly
include('aws-20210131/Architecture/MachineLearning/AmazonPolly')

' renders the element
AmazonPolly('AmazonPolly', 'Amazon Polly', 'an optional tech label')
@enduml
```

## AmazonPollyCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonPollyCard
include('aws-20210131/Architecture/MachineLearning/AmazonPolly')

' renders the element
AmazonPollyCard('AmazonPollyCard', 'Amazon Polly Card', 'an optional description')
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

' loads the Item which embeds the element AmazonPollyCard
include('aws-20210131/Architecture/MachineLearning/AmazonPolly')

' renders the element
AmazonPollyCard('AmazonPollyCard', 'Amazon Polly Card', 'an optional description')
@enduml
```

## AmazonPollyGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonPollyGroup
include('aws-20210131/Architecture/MachineLearning/AmazonPolly')

' renders the element
AmazonPollyGroup('AmazonPollyGroup', 'Amazon Polly Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonPollyGroup
include('aws-20210131/Architecture/MachineLearning/AmazonPolly')

' renders the element
AmazonPollyGroup('AmazonPollyGroup', 'Amazon Polly Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

