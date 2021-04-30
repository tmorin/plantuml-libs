# Amazon Kinesis Data Analytics

```text
aws-20210131/Architecture/Analytics/AmazonKinesisDataAnalytics
```

```text
include('aws-20210131/Architecture/Analytics/AmazonKinesisDataAnalytics')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonKinesisDataAnalytics.png)|![](AmazonKinesisDataAnalytics.card.png)|![](AmazonKinesisDataAnalytics.element.png)|![](AmazonKinesisDataAnalytics.group.png)|



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
' loads the AmazonKinesisDataAnalytics element
include('aws-20210131/Architecture/Analytics/AmazonKinesisDataAnalytics')
AmazonKinesisDataAnalyticsCard('amazon_kinesis_data_analytics', 'Amazon Kinesis Data Analytics', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonKinesisDataAnalytics element
include('aws-20210131/Architecture/Analytics/AmazonKinesisDataAnalytics')
AmazonKinesisDataAnalyticsCard('amazon_kinesis_data_analytics', 'Amazon Kinesis Data Analytics', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonKinesisDataAnalytics element
include('aws-20210131/Architecture/Analytics/AmazonKinesisDataAnalytics')
AmazonKinesisDataAnalytics('amazon_kinesis_data_analytics', 'Amazon Kinesis Data Analytics', 'an optional tech field')
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
' loads the AmazonKinesisDataAnalytics element
include('aws-20210131/Architecture/Analytics/AmazonKinesisDataAnalytics')
AmazonKinesisDataAnalytics('amazon_kinesis_data_analytics', 'Amazon Kinesis Data Analytics', 'an optional tech field')
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
' loads the AmazonKinesisDataAnalytics element
include('aws-20210131/Architecture/Analytics/AmazonKinesisDataAnalytics')
AmazonKinesisDataAnalyticsGroup('amazon_kinesis_data_analytics', 'Amazon Kinesis Data Analytics', 'an optional tech field'){
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
' loads the AmazonKinesisDataAnalytics element
include('aws-20210131/Architecture/Analytics/AmazonKinesisDataAnalytics')
AmazonKinesisDataAnalyticsGroup('amazon_kinesis_data_analytics', 'Amazon Kinesis Data Analytics', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

