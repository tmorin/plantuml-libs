# Aws Kinesis

```text
aws-20200430/Item/Analytics/AwsKinesis
```

```text
include('aws-20200430/Item/Analytics/AwsKinesis')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsKinesis.png)|![](AwsKinesis.card.png)|![](AwsKinesis.element.png)|![](AwsKinesis.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsKinesis element
include('aws-20200430/Item/Analytics/AwsKinesis')
AwsKinesisCard('aws_kinesis', 'Aws Kinesis', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsKinesis element
include('aws-20200430/Item/Analytics/AwsKinesis')
AwsKinesisCard('aws_kinesis', 'Aws Kinesis', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsKinesis element
include('aws-20200430/Item/Analytics/AwsKinesis')
AwsKinesis('aws_kinesis', 'Aws Kinesis', 'an optional tech field')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsKinesis element
include('aws-20200430/Item/Analytics/AwsKinesis')
AwsKinesis('aws_kinesis', 'Aws Kinesis', 'an optional tech field')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsKinesis element
include('aws-20200430/Item/Analytics/AwsKinesis')
AwsKinesisGroup('aws_kinesis', 'Aws Kinesis', 'an optional tech field'){
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsKinesis element
include('aws-20200430/Item/Analytics/AwsKinesis')
AwsKinesisGroup('aws_kinesis', 'Aws Kinesis', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

