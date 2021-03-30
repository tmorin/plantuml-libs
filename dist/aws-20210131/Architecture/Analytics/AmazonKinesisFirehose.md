# Amazon Kinesis Firehose

```text
aws-20210131/Architecture/Analytics/AmazonKinesisFirehose
```

```text
include('aws-20210131/Architecture/Analytics/AmazonKinesisFirehose')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonKinesisFirehose.png)|![](AmazonKinesisFirehose.card.png)|![](AmazonKinesisFirehose.element.png)|![](AmazonKinesisFirehose.group.png)|



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
' loads the AmazonKinesisFirehose element
include('aws-20210131/Architecture/Analytics/AmazonKinesisFirehose')
AmazonKinesisFirehoseCard('amazon_kinesis_firehose', 'Amazon Kinesis Firehose', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonKinesisFirehose element
include('aws-20210131/Architecture/Analytics/AmazonKinesisFirehose')
AmazonKinesisFirehoseCard('amazon_kinesis_firehose', 'Amazon Kinesis Firehose', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonKinesisFirehose element
include('aws-20210131/Architecture/Analytics/AmazonKinesisFirehose')
AmazonKinesisFirehose('amazon_kinesis_firehose', 'Amazon Kinesis Firehose', 'an optional tech field')
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
' loads the AmazonKinesisFirehose element
include('aws-20210131/Architecture/Analytics/AmazonKinesisFirehose')
AmazonKinesisFirehose('amazon_kinesis_firehose', 'Amazon Kinesis Firehose', 'an optional tech field')
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
' loads the AmazonKinesisFirehose element
include('aws-20210131/Architecture/Analytics/AmazonKinesisFirehose')
AmazonKinesisFirehoseGroup('amazon_kinesis_firehose', 'Amazon Kinesis Firehose', 'an optional tech field'){
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
' loads the AmazonKinesisFirehose element
include('aws-20210131/Architecture/Analytics/AmazonKinesisFirehose')
AmazonKinesisFirehoseGroup('amazon_kinesis_firehose', 'Amazon Kinesis Firehose', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

