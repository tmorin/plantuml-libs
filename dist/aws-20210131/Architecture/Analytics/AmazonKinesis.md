# Amazon Kinesis

```text
aws-20210131/Architecture/Analytics/AmazonKinesis
```

```text
include('aws-20210131/Architecture/Analytics/AmazonKinesis')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonKinesis.png)|![](AmazonKinesis.card.png)|![](AmazonKinesis.element.png)|![](AmazonKinesis.group.png)|



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
' loads the AmazonKinesis element
include('aws-20210131/Architecture/Analytics/AmazonKinesis')
AmazonKinesisCard('amazon_kinesis', 'Amazon Kinesis', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonKinesis element
include('aws-20210131/Architecture/Analytics/AmazonKinesis')
AmazonKinesisCard('amazon_kinesis', 'Amazon Kinesis', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonKinesis element
include('aws-20210131/Architecture/Analytics/AmazonKinesis')
AmazonKinesis('amazon_kinesis', 'Amazon Kinesis', 'an optional tech field')
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
' loads the AmazonKinesis element
include('aws-20210131/Architecture/Analytics/AmazonKinesis')
AmazonKinesis('amazon_kinesis', 'Amazon Kinesis', 'an optional tech field')
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
' loads the AmazonKinesis element
include('aws-20210131/Architecture/Analytics/AmazonKinesis')
AmazonKinesisGroup('amazon_kinesis', 'Amazon Kinesis', 'an optional tech field'){
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
' loads the AmazonKinesis element
include('aws-20210131/Architecture/Analytics/AmazonKinesis')
AmazonKinesisGroup('amazon_kinesis', 'Amazon Kinesis', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

