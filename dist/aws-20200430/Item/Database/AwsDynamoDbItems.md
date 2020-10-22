# Aws Dynamo Db Items

```text
aws-20200430/Item/Database/AwsDynamoDbItems
```

```text
include('aws-20200430/Item/Database/AwsDynamoDbItems')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsDynamoDbItems.png)|![](AwsDynamoDbItems.card.png)|![](AwsDynamoDbItems.element.png)|![](AwsDynamoDbItems.group.png)|



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
' loads the AwsDynamoDbItems element
include('aws-20200430/Item/Database/AwsDynamoDbItems')
AwsDynamoDbItemsCard('aws_dynamo_db_items', 'Aws Dynamo Db Items', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsDynamoDbItems element
include('aws-20200430/Item/Database/AwsDynamoDbItems')
AwsDynamoDbItemsCard('aws_dynamo_db_items', 'Aws Dynamo Db Items', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AwsDynamoDbItems element
include('aws-20200430/Item/Database/AwsDynamoDbItems')
AwsDynamoDbItems('aws_dynamo_db_items', 'Aws Dynamo Db Items', 'an optional tech field')
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
' loads the AwsDynamoDbItems element
include('aws-20200430/Item/Database/AwsDynamoDbItems')
AwsDynamoDbItems('aws_dynamo_db_items', 'Aws Dynamo Db Items', 'an optional tech field')
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
' loads the AwsDynamoDbItems element
include('aws-20200430/Item/Database/AwsDynamoDbItems')
AwsDynamoDbItemsGroup('aws_dynamo_db_items', 'Aws Dynamo Db Items', 'an optional tech field'){
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
' loads the AwsDynamoDbItems element
include('aws-20200430/Item/Database/AwsDynamoDbItems')
AwsDynamoDbItemsGroup('aws_dynamo_db_items', 'Aws Dynamo Db Items', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

