# Amazon Dynamo Db Items

```text
aws-20210131/Resource/Database/AmazonDynamoDbItems
```

```text
include('aws-20210131/Resource/Database/AmazonDynamoDbItems')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonDynamoDbItems.png)|![](AmazonDynamoDbItems.card.png)|![](AmazonDynamoDbItems.element.png)|![](AmazonDynamoDbItems.group.png)|



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
' loads the AmazonDynamoDbItems element
include('aws-20210131/Resource/Database/AmazonDynamoDbItems')
AmazonDynamoDbItemsCard('amazon_dynamo_db_items', 'Amazon Dynamo Db Items', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonDynamoDbItems element
include('aws-20210131/Resource/Database/AmazonDynamoDbItems')
AmazonDynamoDbItemsCard('amazon_dynamo_db_items', 'Amazon Dynamo Db Items', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonDynamoDbItems element
include('aws-20210131/Resource/Database/AmazonDynamoDbItems')
AmazonDynamoDbItems('amazon_dynamo_db_items', 'Amazon Dynamo Db Items', 'an optional tech field')
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
' loads the AmazonDynamoDbItems element
include('aws-20210131/Resource/Database/AmazonDynamoDbItems')
AmazonDynamoDbItems('amazon_dynamo_db_items', 'Amazon Dynamo Db Items', 'an optional tech field')
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
' loads the AmazonDynamoDbItems element
include('aws-20210131/Resource/Database/AmazonDynamoDbItems')
AmazonDynamoDbItemsGroup('amazon_dynamo_db_items', 'Amazon Dynamo Db Items', 'an optional tech field'){
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
' loads the AmazonDynamoDbItems element
include('aws-20210131/Resource/Database/AmazonDynamoDbItems')
AmazonDynamoDbItemsGroup('amazon_dynamo_db_items', 'Amazon Dynamo Db Items', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

