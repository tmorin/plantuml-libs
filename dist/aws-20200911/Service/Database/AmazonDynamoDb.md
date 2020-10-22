# Amazon Dynamo Db

```text
aws-20200911/Service/Database/AmazonDynamoDb
```

```text
include('aws-20200911/Service/Database/AmazonDynamoDb')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonDynamoDb.png)|![](AmazonDynamoDb.card.png)|![](AmazonDynamoDb.element.png)|![](AmazonDynamoDb.group.png)|



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
' loads the AmazonDynamoDb element
include('aws-20200911/Service/Database/AmazonDynamoDb')
AmazonDynamoDbCard('amazon_dynamo_db', 'Amazon Dynamo Db', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonDynamoDb element
include('aws-20200911/Service/Database/AmazonDynamoDb')
AmazonDynamoDbCard('amazon_dynamo_db', 'Amazon Dynamo Db', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonDynamoDb element
include('aws-20200911/Service/Database/AmazonDynamoDb')
AmazonDynamoDb('amazon_dynamo_db', 'Amazon Dynamo Db', 'an optional tech field')
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
' loads the AmazonDynamoDb element
include('aws-20200911/Service/Database/AmazonDynamoDb')
AmazonDynamoDb('amazon_dynamo_db', 'Amazon Dynamo Db', 'an optional tech field')
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
' loads the AmazonDynamoDb element
include('aws-20200911/Service/Database/AmazonDynamoDb')
AmazonDynamoDbGroup('amazon_dynamo_db', 'Amazon Dynamo Db', 'an optional tech field'){
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
' loads the AmazonDynamoDb element
include('aws-20200911/Service/Database/AmazonDynamoDb')
AmazonDynamoDbGroup('amazon_dynamo_db', 'Amazon Dynamo Db', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

