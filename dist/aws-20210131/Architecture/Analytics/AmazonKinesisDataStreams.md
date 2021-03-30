# Amazon Kinesis Data Streams

```text
aws-20210131/Architecture/Analytics/AmazonKinesisDataStreams
```

```text
include('aws-20210131/Architecture/Analytics/AmazonKinesisDataStreams')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonKinesisDataStreams.png)|![](AmazonKinesisDataStreams.card.png)|![](AmazonKinesisDataStreams.element.png)|![](AmazonKinesisDataStreams.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AmazonKinesisDataStreams element
include('aws-20210131/Architecture/Analytics/AmazonKinesisDataStreams')
AmazonKinesisDataStreamsCard('amazon_kinesis_data_streams', 'Amazon Kinesis Data Streams', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AmazonKinesisDataStreams element
include('aws-20210131/Architecture/Analytics/AmazonKinesisDataStreams')
AmazonKinesisDataStreamsCard('amazon_kinesis_data_streams', 'Amazon Kinesis Data Streams', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
@enduml
```


## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AmazonKinesisDataStreams element
include('aws-20210131/Architecture/Analytics/AmazonKinesisDataStreams')
AmazonKinesisDataStreams('amazon_kinesis_data_streams', 'Amazon Kinesis Data Streams', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AmazonKinesisDataStreams element
include('aws-20210131/Architecture/Analytics/AmazonKinesisDataStreams')
AmazonKinesisDataStreams('amazon_kinesis_data_streams', 'Amazon Kinesis Data Streams', 'an optional tech field')
@enduml
```


## group
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AmazonKinesisDataStreams element
include('aws-20210131/Architecture/Analytics/AmazonKinesisDataStreams')
AmazonKinesisDataStreamsGroup('amazon_kinesis_data_streams', 'Amazon Kinesis Data Streams', 'an optional tech field'){
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
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20210131 bootstrap
include('aws-20210131/bootstrap')
' loads the AmazonKinesisDataStreams element
include('aws-20210131/Architecture/Analytics/AmazonKinesisDataStreams')
AmazonKinesisDataStreamsGroup('amazon_kinesis_data_streams', 'Amazon Kinesis Data Streams', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

