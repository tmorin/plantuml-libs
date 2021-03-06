# AmazonTextract


```text
aws-20210131/Architecture/MachineLearning/AmazonTextract
```

```text
include('aws-20210131/Architecture/MachineLearning/AmazonTextract')
```



| Illustration | AmazonTextract | AmazonTextractCard | AmazonTextractGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/MachineLearning/AmazonTextract.png) | ![illustration for AmazonTextract](../../../aws-20210131/Architecture/MachineLearning/AmazonTextract.Local.png) | ![illustration for AmazonTextractCard](../../../aws-20210131/Architecture/MachineLearning/AmazonTextractCard.Local.png) | ![illustration for AmazonTextractGroup](../../../aws-20210131/Architecture/MachineLearning/AmazonTextractGroup.Local.png) |




## AmazonTextract

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonTextract
include('aws-20210131/Architecture/MachineLearning/AmazonTextract')

' renders the element
AmazonTextract('AmazonTextract', 'Amazon Textract', 'an optional tech label')
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

' loads the Item which embeds the element AmazonTextract
include('aws-20210131/Architecture/MachineLearning/AmazonTextract')

' renders the element
AmazonTextract('AmazonTextract', 'Amazon Textract', 'an optional tech label')
@enduml
```

## AmazonTextractCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonTextractCard
include('aws-20210131/Architecture/MachineLearning/AmazonTextract')

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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonTextractCard
include('aws-20210131/Architecture/MachineLearning/AmazonTextract')

' renders the element
AmazonTextractCard('AmazonTextractCard', 'Amazon Textract Card', 'an optional description')
@enduml
```

## AmazonTextractGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonTextractGroup
include('aws-20210131/Architecture/MachineLearning/AmazonTextract')

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
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonTextractGroup
include('aws-20210131/Architecture/MachineLearning/AmazonTextract')

' renders the element
AmazonTextractGroup('AmazonTextractGroup', 'Amazon Textract Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

