# Aws Dynamo Db

```text
aws-20200430/Item/Database/AwsDynamoDb
```

```text
include('aws-20200430/Item/Database/AwsDynamoDb')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsDynamoDb.png)|![](AwsDynamoDb.card.png)|![](AwsDynamoDb.element.png)|![](AwsDynamoDb.group.png)|



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
' loads the AwsDynamoDb element
include('aws-20200430/Item/Database/AwsDynamoDb')
AwsDynamoDbCard('aws_dynamo_db', 'Aws Dynamo Db', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsDynamoDb element
include('aws-20200430/Item/Database/AwsDynamoDb')
AwsDynamoDbCard('aws_dynamo_db', 'Aws Dynamo Db', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsDynamoDb element
include('aws-20200430/Item/Database/AwsDynamoDb')
AwsDynamoDb('aws_dynamo_db', 'Aws Dynamo Db', 'an optional tech field')
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
' loads the AwsDynamoDb element
include('aws-20200430/Item/Database/AwsDynamoDb')
AwsDynamoDb('aws_dynamo_db', 'Aws Dynamo Db', 'an optional tech field')
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
' loads the AwsDynamoDb element
include('aws-20200430/Item/Database/AwsDynamoDb')
AwsDynamoDbGroup('aws_dynamo_db', 'Aws Dynamo Db', 'an optional tech field'){
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
' loads the AwsDynamoDb element
include('aws-20200430/Item/Database/AwsDynamoDb')
AwsDynamoDbGroup('aws_dynamo_db', 'Aws Dynamo Db', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

