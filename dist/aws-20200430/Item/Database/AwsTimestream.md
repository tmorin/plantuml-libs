# Aws Timestream

```text
aws-20200430/Item/Database/AwsTimestream
```

```text
include('aws-20200430/Item/Database/AwsTimestream')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsTimestream.png)|![](AwsTimestream.card.png)|![](AwsTimestream.element.png)|![](AwsTimestream.group.png)|



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
' loads the AwsTimestream element
include('aws-20200430/Item/Database/AwsTimestream')
AwsTimestreamCard('aws_timestream', 'Aws Timestream', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsTimestream element
include('aws-20200430/Item/Database/AwsTimestream')
AwsTimestreamCard('aws_timestream', 'Aws Timestream', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsTimestream element
include('aws-20200430/Item/Database/AwsTimestream')
AwsTimestream('aws_timestream', 'Aws Timestream', 'an optional tech field')
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
' loads the AwsTimestream element
include('aws-20200430/Item/Database/AwsTimestream')
AwsTimestream('aws_timestream', 'Aws Timestream', 'an optional tech field')
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
' loads the AwsTimestream element
include('aws-20200430/Item/Database/AwsTimestream')
AwsTimestreamGroup('aws_timestream', 'Aws Timestream', 'an optional tech field'){
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
' loads the AwsTimestream element
include('aws-20200430/Item/Database/AwsTimestream')
AwsTimestreamGroup('aws_timestream', 'Aws Timestream', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

