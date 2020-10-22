# Aws Quicksight

```text
aws-20200430/Item/Analytics/AwsQuicksight
```

```text
include('aws-20200430/Item/Analytics/AwsQuicksight')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsQuicksight.png)|![](AwsQuicksight.card.png)|![](AwsQuicksight.element.png)|![](AwsQuicksight.group.png)|



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
' loads the AwsQuicksight element
include('aws-20200430/Item/Analytics/AwsQuicksight')
AwsQuicksightCard('aws_quicksight', 'Aws Quicksight', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsQuicksight element
include('aws-20200430/Item/Analytics/AwsQuicksight')
AwsQuicksightCard('aws_quicksight', 'Aws Quicksight', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsQuicksight element
include('aws-20200430/Item/Analytics/AwsQuicksight')
AwsQuicksight('aws_quicksight', 'Aws Quicksight', 'an optional tech field')
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
' loads the AwsQuicksight element
include('aws-20200430/Item/Analytics/AwsQuicksight')
AwsQuicksight('aws_quicksight', 'Aws Quicksight', 'an optional tech field')
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
' loads the AwsQuicksight element
include('aws-20200430/Item/Analytics/AwsQuicksight')
AwsQuicksightGroup('aws_quicksight', 'Aws Quicksight', 'an optional tech field'){
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
' loads the AwsQuicksight element
include('aws-20200430/Item/Analytics/AwsQuicksight')
AwsQuicksightGroup('aws_quicksight', 'Aws Quicksight', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

