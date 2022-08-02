# AmazonKinesisDataStreams


```text
aws-q1-2022/Architecture/Analytics/AmazonKinesisDataStreams
```

```text
include('aws-q1-2022/Architecture/Analytics/AmazonKinesisDataStreams')
```



| Illustration | AmazonKinesisDataStreams | AmazonKinesisDataStreamsCard | AmazonKinesisDataStreamsGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2022/Architecture/Analytics/AmazonKinesisDataStreams.png) | ![illustration for AmazonKinesisDataStreams](../../../aws-q1-2022/Architecture/Analytics/AmazonKinesisDataStreams.Local.png) | ![illustration for AmazonKinesisDataStreamsCard](../../../aws-q1-2022/Architecture/Analytics/AmazonKinesisDataStreamsCard.Local.png) | ![illustration for AmazonKinesisDataStreamsGroup](../../../aws-q1-2022/Architecture/Analytics/AmazonKinesisDataStreamsGroup.Local.png) |




## AmazonKinesisDataStreams

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonKinesisDataStreams
include('aws-q1-2022/Architecture/Analytics/AmazonKinesisDataStreams')

' renders the element
AmazonKinesisDataStreams('AmazonKinesisDataStreams', 'Amazon Kinesis Data Streams', 'an optional tech label', 'an optional description')
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
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonKinesisDataStreams
include('aws-q1-2022/Architecture/Analytics/AmazonKinesisDataStreams')

' renders the element
AmazonKinesisDataStreams('AmazonKinesisDataStreams', 'Amazon Kinesis Data Streams', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonKinesisDataStreamsCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonKinesisDataStreamsCard
include('aws-q1-2022/Architecture/Analytics/AmazonKinesisDataStreams')

' renders the element
AmazonKinesisDataStreamsCard('AmazonKinesisDataStreamsCard', 'Amazon Kinesis Data Streams Card', 'an optional description')
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
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonKinesisDataStreamsCard
include('aws-q1-2022/Architecture/Analytics/AmazonKinesisDataStreams')

' renders the element
AmazonKinesisDataStreamsCard('AmazonKinesisDataStreamsCard', 'Amazon Kinesis Data Streams Card', 'an optional description')
@enduml
```

## AmazonKinesisDataStreamsGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonKinesisDataStreamsGroup
include('aws-q1-2022/Architecture/Analytics/AmazonKinesisDataStreams')

' renders the element
AmazonKinesisDataStreamsGroup('AmazonKinesisDataStreamsGroup', 'Amazon Kinesis Data Streams Group', 'an optional tech label') {
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
include('aws-q1-2022/bootstrap')

' loads the Item which embeds the element AmazonKinesisDataStreamsGroup
include('aws-q1-2022/Architecture/Analytics/AmazonKinesisDataStreams')

' renders the element
AmazonKinesisDataStreamsGroup('AmazonKinesisDataStreamsGroup', 'Amazon Kinesis Data Streams Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

