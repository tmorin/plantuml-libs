# AmazonKinesisDataFirehose


```text
aws-q1-2024/Architecture/Analytics/AmazonKinesisDataFirehose
```

```text
include('aws-q1-2024/Architecture/Analytics/AmazonKinesisDataFirehose')
```



| Illustration | AmazonKinesisDataFirehose | AmazonKinesisDataFirehoseCard | AmazonKinesisDataFirehoseGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q1-2024/Architecture/Analytics/AmazonKinesisDataFirehose.png) | ![illustration for AmazonKinesisDataFirehose](../../../aws-q1-2024/Architecture/Analytics/AmazonKinesisDataFirehose.Local.png) | ![illustration for AmazonKinesisDataFirehoseCard](../../../aws-q1-2024/Architecture/Analytics/AmazonKinesisDataFirehoseCard.Local.png) | ![illustration for AmazonKinesisDataFirehoseGroup](../../../aws-q1-2024/Architecture/Analytics/AmazonKinesisDataFirehoseGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonKinesisDataFirehoseXs>`
- `<$AmazonKinesisDataFirehoseSm>`
- `<$AmazonKinesisDataFirehoseMd>`
- `<$AmazonKinesisDataFirehoseLg>`





## AmazonKinesisDataFirehose

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AmazonKinesisDataFirehose
include('aws-q1-2024/Architecture/Analytics/AmazonKinesisDataFirehose')

' renders the element
AmazonKinesisDataFirehose('AmazonKinesisDataFirehose', 'Amazon Kinesis Data Firehose', 'an optional tech label', 'an optional description')
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
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AmazonKinesisDataFirehose
include('aws-q1-2024/Architecture/Analytics/AmazonKinesisDataFirehose')

' renders the element
AmazonKinesisDataFirehose('AmazonKinesisDataFirehose', 'Amazon Kinesis Data Firehose', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonKinesisDataFirehoseCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AmazonKinesisDataFirehoseCard
include('aws-q1-2024/Architecture/Analytics/AmazonKinesisDataFirehose')

' renders the element
AmazonKinesisDataFirehoseCard('AmazonKinesisDataFirehoseCard', 'Amazon Kinesis Data Firehose Card', 'an optional description')
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
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AmazonKinesisDataFirehoseCard
include('aws-q1-2024/Architecture/Analytics/AmazonKinesisDataFirehose')

' renders the element
AmazonKinesisDataFirehoseCard('AmazonKinesisDataFirehoseCard', 'Amazon Kinesis Data Firehose Card', 'an optional description')
@enduml
```

## AmazonKinesisDataFirehoseGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AmazonKinesisDataFirehoseGroup
include('aws-q1-2024/Architecture/Analytics/AmazonKinesisDataFirehose')

' renders the element
AmazonKinesisDataFirehoseGroup('AmazonKinesisDataFirehoseGroup', 'Amazon Kinesis Data Firehose Group', 'an optional tech label') {
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
include('aws-q1-2024/bootstrap')

' loads the Item which embeds the element AmazonKinesisDataFirehoseGroup
include('aws-q1-2024/Architecture/Analytics/AmazonKinesisDataFirehose')

' renders the element
AmazonKinesisDataFirehoseGroup('AmazonKinesisDataFirehoseGroup', 'Amazon Kinesis Data Firehose Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

