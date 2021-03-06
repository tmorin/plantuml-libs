# AmazonSumerian


```text
aws-20210131/Architecture/ArVr/AmazonSumerian
```

```text
include('aws-20210131/Architecture/ArVr/AmazonSumerian')
```



| Illustration | AmazonSumerian | AmazonSumerianCard | AmazonSumerianGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210131/Architecture/ArVr/AmazonSumerian.png) | ![illustration for AmazonSumerian](../../../aws-20210131/Architecture/ArVr/AmazonSumerian.Local.png) | ![illustration for AmazonSumerianCard](../../../aws-20210131/Architecture/ArVr/AmazonSumerianCard.Local.png) | ![illustration for AmazonSumerianGroup](../../../aws-20210131/Architecture/ArVr/AmazonSumerianGroup.Local.png) |




## AmazonSumerian

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonSumerian
include('aws-20210131/Architecture/ArVr/AmazonSumerian')

' renders the element
AmazonSumerian('AmazonSumerian', 'Amazon Sumerian', 'an optional tech label')
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

' loads the Item which embeds the element AmazonSumerian
include('aws-20210131/Architecture/ArVr/AmazonSumerian')

' renders the element
AmazonSumerian('AmazonSumerian', 'Amazon Sumerian', 'an optional tech label')
@enduml
```

## AmazonSumerianCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonSumerianCard
include('aws-20210131/Architecture/ArVr/AmazonSumerian')

' renders the element
AmazonSumerianCard('AmazonSumerianCard', 'Amazon Sumerian Card', 'an optional description')
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

' loads the Item which embeds the element AmazonSumerianCard
include('aws-20210131/Architecture/ArVr/AmazonSumerian')

' renders the element
AmazonSumerianCard('AmazonSumerianCard', 'Amazon Sumerian Card', 'an optional description')
@enduml
```

## AmazonSumerianGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210131/bootstrap')

' loads the Item which embeds the element AmazonSumerianGroup
include('aws-20210131/Architecture/ArVr/AmazonSumerian')

' renders the element
AmazonSumerianGroup('AmazonSumerianGroup', 'Amazon Sumerian Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonSumerianGroup
include('aws-20210131/Architecture/ArVr/AmazonSumerian')

' renders the element
AmazonSumerianGroup('AmazonSumerianGroup', 'Amazon Sumerian Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

