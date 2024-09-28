# AmazonDynamoDb


```text
aws-q2-2024/Architecture/Database/AmazonDynamoDb
```

```text
include('aws-q2-2024/Architecture/Database/AmazonDynamoDb')
```



| Illustration | AmazonDynamoDb | AmazonDynamoDbCard | AmazonDynamoDbGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q2-2024/Architecture/Database/AmazonDynamoDb.png) | ![illustration for AmazonDynamoDb](../../../aws-q2-2024/Architecture/Database/AmazonDynamoDb.Local.png) | ![illustration for AmazonDynamoDbCard](../../../aws-q2-2024/Architecture/Database/AmazonDynamoDbCard.Local.png) | ![illustration for AmazonDynamoDbGroup](../../../aws-q2-2024/Architecture/Database/AmazonDynamoDbGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonDynamoDbXs>`
- `<$AmazonDynamoDbSm>`
- `<$AmazonDynamoDbMd>`
- `<$AmazonDynamoDbLg>`





## AmazonDynamoDb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AmazonDynamoDb
include('aws-q2-2024/Architecture/Database/AmazonDynamoDb')

' renders the element
AmazonDynamoDb('AmazonDynamoDb', 'Amazon Dynamo Db', 'an optional tech label', 'an optional description')
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AmazonDynamoDb
include('aws-q2-2024/Architecture/Database/AmazonDynamoDb')

' renders the element
AmazonDynamoDb('AmazonDynamoDb', 'Amazon Dynamo Db', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonDynamoDbCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AmazonDynamoDbCard
include('aws-q2-2024/Architecture/Database/AmazonDynamoDb')

' renders the element
AmazonDynamoDbCard('AmazonDynamoDbCard', 'Amazon Dynamo Db Card', 'an optional description')
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AmazonDynamoDbCard
include('aws-q2-2024/Architecture/Database/AmazonDynamoDb')

' renders the element
AmazonDynamoDbCard('AmazonDynamoDbCard', 'Amazon Dynamo Db Card', 'an optional description')
@enduml
```

## AmazonDynamoDbGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AmazonDynamoDbGroup
include('aws-q2-2024/Architecture/Database/AmazonDynamoDb')

' renders the element
AmazonDynamoDbGroup('AmazonDynamoDbGroup', 'Amazon Dynamo Db Group', 'an optional tech label') {
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
include('aws-q2-2024/bootstrap')

' loads the Item which embeds the element AmazonDynamoDbGroup
include('aws-q2-2024/Architecture/Database/AmazonDynamoDb')

' renders the element
AmazonDynamoDbGroup('AmazonDynamoDbGroup', 'Amazon Dynamo Db Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

