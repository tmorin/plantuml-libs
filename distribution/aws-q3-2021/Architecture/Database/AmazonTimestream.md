# AmazonTimestream


```text
aws-q3-2021/Architecture/Database/AmazonTimestream
```

```text
include('aws-q3-2021/Architecture/Database/AmazonTimestream')
```



| Illustration | AmazonTimestream | AmazonTimestreamCard | AmazonTimestreamGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2021/Architecture/Database/AmazonTimestream.png) | ![illustration for AmazonTimestream](../../../aws-q3-2021/Architecture/Database/AmazonTimestream.Local.png) | ![illustration for AmazonTimestreamCard](../../../aws-q3-2021/Architecture/Database/AmazonTimestreamCard.Local.png) | ![illustration for AmazonTimestreamGroup](../../../aws-q3-2021/Architecture/Database/AmazonTimestreamGroup.Local.png) |




## AmazonTimestream

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonTimestream
include('aws-q3-2021/Architecture/Database/AmazonTimestream')

' renders the element
AmazonTimestream('AmazonTimestream', 'Amazon Timestream', 'an optional tech label')
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

' loads the Item which embeds the element AmazonTimestream
include('aws-q3-2021/Architecture/Database/AmazonTimestream')

' renders the element
AmazonTimestream('AmazonTimestream', 'Amazon Timestream', 'an optional tech label')
@enduml
```

## AmazonTimestreamCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonTimestreamCard
include('aws-q3-2021/Architecture/Database/AmazonTimestream')

' renders the element
AmazonTimestreamCard('AmazonTimestreamCard', 'Amazon Timestream Card', 'an optional description')
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

' loads the Item which embeds the element AmazonTimestreamCard
include('aws-q3-2021/Architecture/Database/AmazonTimestream')

' renders the element
AmazonTimestreamCard('AmazonTimestreamCard', 'Amazon Timestream Card', 'an optional description')
@enduml
```

## AmazonTimestreamGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonTimestreamGroup
include('aws-q3-2021/Architecture/Database/AmazonTimestream')

' renders the element
AmazonTimestreamGroup('AmazonTimestreamGroup', 'Amazon Timestream Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonTimestreamGroup
include('aws-q3-2021/Architecture/Database/AmazonTimestream')

' renders the element
AmazonTimestreamGroup('AmazonTimestreamGroup', 'Amazon Timestream Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

