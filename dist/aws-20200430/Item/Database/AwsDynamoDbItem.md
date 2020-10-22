# Aws Dynamo Db Item

```text
aws-20200430/Item/Database/AwsDynamoDbItem
```

```text
include('aws-20200430/Item/Database/AwsDynamoDbItem')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsDynamoDbItem.png)|![](AwsDynamoDbItem.card.png)|![](AwsDynamoDbItem.element.png)|![](AwsDynamoDbItem.group.png)|



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
' loads the AwsDynamoDbItem element
include('aws-20200430/Item/Database/AwsDynamoDbItem')
AwsDynamoDbItemCard('aws_dynamo_db_item', 'Aws Dynamo Db Item', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsDynamoDbItem element
include('aws-20200430/Item/Database/AwsDynamoDbItem')
AwsDynamoDbItemCard('aws_dynamo_db_item', 'Aws Dynamo Db Item', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsDynamoDbItem element
include('aws-20200430/Item/Database/AwsDynamoDbItem')
AwsDynamoDbItem('aws_dynamo_db_item', 'Aws Dynamo Db Item', 'an optional tech field')
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
' loads the AwsDynamoDbItem element
include('aws-20200430/Item/Database/AwsDynamoDbItem')
AwsDynamoDbItem('aws_dynamo_db_item', 'Aws Dynamo Db Item', 'an optional tech field')
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
' loads the AwsDynamoDbItem element
include('aws-20200430/Item/Database/AwsDynamoDbItem')
AwsDynamoDbItemGroup('aws_dynamo_db_item', 'Aws Dynamo Db Item', 'an optional tech field'){
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
' loads the AwsDynamoDbItem element
include('aws-20200430/Item/Database/AwsDynamoDbItem')
AwsDynamoDbItemGroup('aws_dynamo_db_item', 'Aws Dynamo Db Item', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

