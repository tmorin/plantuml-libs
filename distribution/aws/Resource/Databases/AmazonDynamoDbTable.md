# AmazonDynamoDbTable


```text
aws/Resource/Databases/AmazonDynamoDbTable
```

```text
include('aws/Resource/Databases/AmazonDynamoDbTable')
```



| Illustration | AmazonDynamoDbTable | AmazonDynamoDbTableCard | AmazonDynamoDbTableGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws/Resource/Databases/AmazonDynamoDbTable.png) | ![illustration for AmazonDynamoDbTable](../../../aws/Resource/Databases/AmazonDynamoDbTable.Local.png) | ![illustration for AmazonDynamoDbTableCard](../../../aws/Resource/Databases/AmazonDynamoDbTableCard.Local.png) | ![illustration for AmazonDynamoDbTableGroup](../../../aws/Resource/Databases/AmazonDynamoDbTableGroup.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AmazonDynamoDbTableXs>`
- `<$AmazonDynamoDbTableSm>`
- `<$AmazonDynamoDbTableMd>`
- `<$AmazonDynamoDbTableLg>`





## AmazonDynamoDbTable

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonDynamoDbTable
include('aws/Resource/Databases/AmazonDynamoDbTable')

' renders the element
AmazonDynamoDbTable('AmazonDynamoDbTable', 'Amazon Dynamo Db Table', 'an optional tech label', 'an optional description')
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
include('aws/bootstrap')

' loads the Item which embeds the element AmazonDynamoDbTable
include('aws/Resource/Databases/AmazonDynamoDbTable')

' renders the element
AmazonDynamoDbTable('AmazonDynamoDbTable', 'Amazon Dynamo Db Table', 'an optional tech label', 'an optional description')
@enduml
```

## AmazonDynamoDbTableCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonDynamoDbTableCard
include('aws/Resource/Databases/AmazonDynamoDbTable')

' renders the element
AmazonDynamoDbTableCard('AmazonDynamoDbTableCard', 'Amazon Dynamo Db Table Card', 'an optional description')
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
include('aws/bootstrap')

' loads the Item which embeds the element AmazonDynamoDbTableCard
include('aws/Resource/Databases/AmazonDynamoDbTable')

' renders the element
AmazonDynamoDbTableCard('AmazonDynamoDbTableCard', 'Amazon Dynamo Db Table Card', 'an optional description')
@enduml
```

## AmazonDynamoDbTableGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws/bootstrap')

' loads the Item which embeds the element AmazonDynamoDbTableGroup
include('aws/Resource/Databases/AmazonDynamoDbTable')

' renders the element
AmazonDynamoDbTableGroup('AmazonDynamoDbTableGroup', 'Amazon Dynamo Db Table Group', 'an optional tech label') {
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
include('aws/bootstrap')

' loads the Item which embeds the element AmazonDynamoDbTableGroup
include('aws/Resource/Databases/AmazonDynamoDbTable')

' renders the element
AmazonDynamoDbTableGroup('AmazonDynamoDbTableGroup', 'Amazon Dynamo Db Table Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

