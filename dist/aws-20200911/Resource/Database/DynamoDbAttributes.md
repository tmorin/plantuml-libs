# Dynamo Db Attributes

```text
aws-20200911/Resource/Database/DynamoDbAttributes
```

```text
include('aws-20200911/Resource/Database/DynamoDbAttributes')
```

|icon|card|element|group|
|---|---|---|---|
|![](DynamoDbAttributes.png)|![](DynamoDbAttributes.card.png)|![](DynamoDbAttributes.element.png)|![](DynamoDbAttributes.group.png)|



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
' loads the DynamoDbAttributes element
include('aws-20200911/Resource/Database/DynamoDbAttributes')
DynamoDbAttributesCard('dynamo_db_attributes', 'Dynamo Db Attributes', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the DynamoDbAttributes element
include('aws-20200911/Resource/Database/DynamoDbAttributes')
DynamoDbAttributesCard('dynamo_db_attributes', 'Dynamo Db Attributes', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the DynamoDbAttributes element
include('aws-20200911/Resource/Database/DynamoDbAttributes')
DynamoDbAttributes('dynamo_db_attributes', 'Dynamo Db Attributes', 'an optional tech field')
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
' loads the DynamoDbAttributes element
include('aws-20200911/Resource/Database/DynamoDbAttributes')
DynamoDbAttributes('dynamo_db_attributes', 'Dynamo Db Attributes', 'an optional tech field')
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
' loads the DynamoDbAttributes element
include('aws-20200911/Resource/Database/DynamoDbAttributes')
DynamoDbAttributesGroup('dynamo_db_attributes', 'Dynamo Db Attributes', 'an optional tech field'){
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
' loads the DynamoDbAttributes element
include('aws-20200911/Resource/Database/DynamoDbAttributes')
DynamoDbAttributesGroup('dynamo_db_attributes', 'Dynamo Db Attributes', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

