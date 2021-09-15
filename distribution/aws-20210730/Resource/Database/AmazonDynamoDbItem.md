# AmazonDynamoDbItem


```text
aws-20210730/Resource/Database/AmazonDynamoDbItem
```

```text
include('aws-20210730/Resource/Database/AmazonDynamoDbItem')
```



| Illustration | AmazonDynamoDbItem | AmazonDynamoDbItemCard | AmazonDynamoDbItemGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Resource/Database/AmazonDynamoDbItem.png) | ![illustration for AmazonDynamoDbItem](../../../aws-20210730/Resource/Database/AmazonDynamoDbItem.Local.png) | ![illustration for AmazonDynamoDbItemCard](../../../aws-20210730/Resource/Database/AmazonDynamoDbItemCard.Local.png) | ![illustration for AmazonDynamoDbItemGroup](../../../aws-20210730/Resource/Database/AmazonDynamoDbItemGroup.Local.png) |




## AmazonDynamoDbItem

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonDynamoDbItem
include('aws-20210730/Resource/Database/AmazonDynamoDbItem')

' renders the element
AmazonDynamoDbItem('AmazonDynamoDbItem', 'Amazon Dynamo Db Item', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonDynamoDbItem
include('aws-20210730/Resource/Database/AmazonDynamoDbItem')

' renders the element
AmazonDynamoDbItem('AmazonDynamoDbItem', 'Amazon Dynamo Db Item', 'an optional tech label')
@enduml
```

## AmazonDynamoDbItemCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonDynamoDbItemCard
include('aws-20210730/Resource/Database/AmazonDynamoDbItem')

' renders the element
AmazonDynamoDbItemCard('AmazonDynamoDbItemCard', 'Amazon Dynamo Db Item Card', 'an optional description')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonDynamoDbItemCard
include('aws-20210730/Resource/Database/AmazonDynamoDbItem')

' renders the element
AmazonDynamoDbItemCard('AmazonDynamoDbItemCard', 'Amazon Dynamo Db Item Card', 'an optional description')
@enduml
```

## AmazonDynamoDbItemGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonDynamoDbItemGroup
include('aws-20210730/Resource/Database/AmazonDynamoDbItem')

' renders the element
AmazonDynamoDbItemGroup('AmazonDynamoDbItemGroup', 'Amazon Dynamo Db Item Group', 'an optional tech label') {
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

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonDynamoDbItemGroup
include('aws-20210730/Resource/Database/AmazonDynamoDbItem')

' renders the element
AmazonDynamoDbItemGroup('AmazonDynamoDbItemGroup', 'Amazon Dynamo Db Item Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

