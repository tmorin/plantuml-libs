# Dynamo Db Table

```text
aws-20200911/Resource/Database/DynamoDbTable
```

```text
include('aws-20200911/Resource/Database/DynamoDbTable')
```

|icon|card|element|group|
|---|---|---|---|
|![](DynamoDbTable.png)|![](DynamoDbTable.card.png)|![](DynamoDbTable.element.png)|![](DynamoDbTable.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the DynamoDbTable element
include('aws-20200911/Resource/Database/DynamoDbTable')
DynamoDbTableCard('dynamo_db_table', 'Dynamo Db Table', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the DynamoDbTable element
include('aws-20200911/Resource/Database/DynamoDbTable')
DynamoDbTableCard('dynamo_db_table', 'Dynamo Db Table', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the DynamoDbTable element
include('aws-20200911/Resource/Database/DynamoDbTable')
DynamoDbTable('dynamo_db_table', 'Dynamo Db Table', 'an optional tech field')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the DynamoDbTable element
include('aws-20200911/Resource/Database/DynamoDbTable')
DynamoDbTable('dynamo_db_table', 'Dynamo Db Table', 'an optional tech field')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the DynamoDbTable element
include('aws-20200911/Resource/Database/DynamoDbTable')
DynamoDbTableGroup('dynamo_db_table', 'Dynamo Db Table', 'an optional tech field'){
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the DynamoDbTable element
include('aws-20200911/Resource/Database/DynamoDbTable')
DynamoDbTableGroup('dynamo_db_table', 'Dynamo Db Table', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

