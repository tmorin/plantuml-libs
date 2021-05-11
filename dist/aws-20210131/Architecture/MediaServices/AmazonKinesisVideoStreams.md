# Amazon Kinesis Video Streams

```text
aws-20210131/Architecture/MediaServices/AmazonKinesisVideoStreams
```

```text
include('aws-20210131/Architecture/MediaServices/AmazonKinesisVideoStreams')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonKinesisVideoStreams.png)|![](AmazonKinesisVideoStreams.card.png)|![](AmazonKinesisVideoStreams.element.png)|![](AmazonKinesisVideoStreams.group.png)|



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
' loads the AmazonKinesisVideoStreams element
include('aws-20210131/Architecture/MediaServices/AmazonKinesisVideoStreams')
AmazonKinesisVideoStreamsCard('amazon_kinesis_video_streams', 'Amazon Kinesis Video Streams', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonKinesisVideoStreams element
include('aws-20210131/Architecture/MediaServices/AmazonKinesisVideoStreams')
AmazonKinesisVideoStreamsCard('amazon_kinesis_video_streams', 'Amazon Kinesis Video Streams', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonKinesisVideoStreams element
include('aws-20210131/Architecture/MediaServices/AmazonKinesisVideoStreams')
AmazonKinesisVideoStreams('amazon_kinesis_video_streams', 'Amazon Kinesis Video Streams', 'an optional tech field')
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
' loads the AmazonKinesisVideoStreams element
include('aws-20210131/Architecture/MediaServices/AmazonKinesisVideoStreams')
AmazonKinesisVideoStreams('amazon_kinesis_video_streams', 'Amazon Kinesis Video Streams', 'an optional tech field')
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
' loads the AmazonKinesisVideoStreams element
include('aws-20210131/Architecture/MediaServices/AmazonKinesisVideoStreams')
AmazonKinesisVideoStreamsGroup('amazon_kinesis_video_streams', 'Amazon Kinesis Video Streams', 'an optional tech field'){
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
' loads the AmazonKinesisVideoStreams element
include('aws-20210131/Architecture/MediaServices/AmazonKinesisVideoStreams')
AmazonKinesisVideoStreamsGroup('amazon_kinesis_video_streams', 'Amazon Kinesis Video Streams', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```
