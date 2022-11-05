# AmazonTextract


```text
aws-q3-2022/Architecture/MachineLearning/AmazonTextract
```

```text
include('aws-q3-2022/Architecture/MachineLearning/AmazonTextract')
```



| Illustration | AmazonTextract | AmazonTextractCard | AmazonTextractGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2022/Architecture/MachineLearning/AmazonTextract.png) | ![illustration for AmazonTextract](../../../aws-q3-2022/Architecture/MachineLearning/AmazonTextract.Local.png) | ![illustration for AmazonTextractCard](../../../aws-q3-2022/Architecture/MachineLearning/AmazonTextractCard.Local.png) | ![illustration for AmazonTextractGroup](../../../aws-q3-2022/Architecture/MachineLearning/AmazonTextractGroup.Local.png) |




## AmazonTextract

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonTextract
include('aws-q3-2022/Architecture/MachineLearning/AmazonTextract')

' renders the element
AmazonTextract('AmazonTextract', 'Amazon Textract', 'an optional tech label', 'an optional description')
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
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonTextract
include('aws-q3-2022/Architecture/MachineLearning/AmazonTextract')

' renders the element
AmazonTextract('AmazonTextract', 'Amazon Textract', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonTextractCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonTextractCard
include('aws-q3-2022/Architecture/MachineLearning/AmazonTextract')

' renders the element
AmazonTextractCard('AmazonTextractCard', 'Amazon Textract Card', 'an optional description')
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
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonTextractCard
include('aws-q3-2022/Architecture/MachineLearning/AmazonTextract')

' renders the element
AmazonTextractCard('AmazonTextractCard', 'Amazon Textract Card', 'an optional description')
@enduml
```

## AmazonTextractGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonTextractGroup
include('aws-q3-2022/Architecture/MachineLearning/AmazonTextract')

' renders the element
AmazonTextractGroup('AmazonTextractGroup', 'Amazon Textract Group', 'an optional tech label') {
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
include('aws-q3-2022/bootstrap')

' loads the Item which embeds the element AmazonTextractGroup
include('aws-q3-2022/Architecture/MachineLearning/AmazonTextract')

' renders the element
AmazonTextractGroup('AmazonTextractGroup', 'Amazon Textract Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

