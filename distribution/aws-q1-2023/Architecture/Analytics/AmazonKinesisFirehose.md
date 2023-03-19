# AmazonKinesisFirehose


```text
aws-q1-2023/Architecture/Analytics/AmazonKinesisFirehose
```

```text
include('aws-q1-2023/Architecture/Analytics/AmazonKinesisFirehose')
```



| Illustration | AmazonKinesisFirehose | AmazonKinesisFirehoseCard | AmazonKinesisFirehoseGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2023/Architecture/Analytics/AmazonKinesisFirehose.png) | ![illustration for AmazonKinesisFirehose](../../../aws-q1-2023/Architecture/Analytics/AmazonKinesisFirehose.Local.png) | ![illustration for AmazonKinesisFirehoseCard](../../../aws-q1-2023/Architecture/Analytics/AmazonKinesisFirehoseCard.Local.png) | ![illustration for AmazonKinesisFirehoseGroup](../../../aws-q1-2023/Architecture/Analytics/AmazonKinesisFirehoseGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonKinesisFirehoseXs>`
- `<$AmazonKinesisFirehoseSm>`
- `<$AmazonKinesisFirehoseMd>`
- `<$AmazonKinesisFirehoseLg>`





## AmazonKinesisFirehose

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonKinesisFirehose
include('aws-q1-2023/Architecture/Analytics/AmazonKinesisFirehose')

' renders the element
AmazonKinesisFirehose('AmazonKinesisFirehose', 'Amazon Kinesis Firehose', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element AmazonKinesisFirehose
include('aws-q1-2023/Architecture/Analytics/AmazonKinesisFirehose')

' renders the element
AmazonKinesisFirehose('AmazonKinesisFirehose', 'Amazon Kinesis Firehose', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonKinesisFirehoseCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonKinesisFirehoseCard
include('aws-q1-2023/Architecture/Analytics/AmazonKinesisFirehose')

' renders the element
AmazonKinesisFirehoseCard('AmazonKinesisFirehoseCard', 'Amazon Kinesis Firehose Card', 'an optional description')
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

' loads the Item which embeds the element AmazonKinesisFirehoseCard
include('aws-q1-2023/Architecture/Analytics/AmazonKinesisFirehose')

' renders the element
AmazonKinesisFirehoseCard('AmazonKinesisFirehoseCard', 'Amazon Kinesis Firehose Card', 'an optional description')
@enduml
```

## AmazonKinesisFirehoseGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2023/bootstrap')

' loads the Item which embeds the element AmazonKinesisFirehoseGroup
include('aws-q1-2023/Architecture/Analytics/AmazonKinesisFirehose')

' renders the element
AmazonKinesisFirehoseGroup('AmazonKinesisFirehoseGroup', 'Amazon Kinesis Firehose Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonKinesisFirehoseGroup
include('aws-q1-2023/Architecture/Analytics/AmazonKinesisFirehose')

' renders the element
AmazonKinesisFirehoseGroup('AmazonKinesisFirehoseGroup', 'Amazon Kinesis Firehose Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```
