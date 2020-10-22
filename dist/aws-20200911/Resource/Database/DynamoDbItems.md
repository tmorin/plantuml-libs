# Dynamo Db Items

```text
aws-20200911/Resource/Database/DynamoDbItems
```

```text
include('aws-20200911/Resource/Database/DynamoDbItems')
```

|icon|card|element|group|
|---|---|---|---|
|![](DynamoDbItems.png)|![](DynamoDbItems.card.png)|![](DynamoDbItems.element.png)|![](DynamoDbItems.group.png)|



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
' loads the DynamoDbItems element
include('aws-20200911/Resource/Database/DynamoDbItems')
DynamoDbItemsCard('dynamo_db_items', 'Dynamo Db Items', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the DynamoDbItems element
include('aws-20200911/Resource/Database/DynamoDbItems')
DynamoDbItemsCard('dynamo_db_items', 'Dynamo Db Items', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the DynamoDbItems element
include('aws-20200911/Resource/Database/DynamoDbItems')
DynamoDbItems('dynamo_db_items', 'Dynamo Db Items', 'an optional tech field')
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
' loads the DynamoDbItems element
include('aws-20200911/Resource/Database/DynamoDbItems')
DynamoDbItems('dynamo_db_items', 'Dynamo Db Items', 'an optional tech field')
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
' loads the DynamoDbItems element
include('aws-20200911/Resource/Database/DynamoDbItems')
DynamoDbItemsGroup('dynamo_db_items', 'Dynamo Db Items', 'an optional tech field'){
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
' loads the DynamoDbItems element
include('aws-20200911/Resource/Database/DynamoDbItems')
DynamoDbItemsGroup('dynamo_db_items', 'Dynamo Db Items', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

