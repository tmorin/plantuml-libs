# AmazonDynamoDbTable


```text
aws-q3-2021/Resource/Database/AmazonDynamoDbTable
```

```text
include('aws-q3-2021/Resource/Database/AmazonDynamoDbTable')
```



| Illustration | AmazonDynamoDbTable | AmazonDynamoDbTableCard | AmazonDynamoDbTableGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-q3-2021/Resource/Database/AmazonDynamoDbTable.png) | ![illustration for AmazonDynamoDbTable](../../../aws-q3-2021/Resource/Database/AmazonDynamoDbTable.Local.png) | ![illustration for AmazonDynamoDbTableCard](../../../aws-q3-2021/Resource/Database/AmazonDynamoDbTableCard.Local.png) | ![illustration for AmazonDynamoDbTableGroup](../../../aws-q3-2021/Resource/Database/AmazonDynamoDbTableGroup.Local.png) |




## AmazonDynamoDbTable

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonDynamoDbTable
include('aws-q3-2021/Resource/Database/AmazonDynamoDbTable')

' renders the element
AmazonDynamoDbTable('AmazonDynamoDbTable', 'Amazon Dynamo Db Table', 'an optional tech label')
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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonDynamoDbTable
include('aws-q3-2021/Resource/Database/AmazonDynamoDbTable')

' renders the element
AmazonDynamoDbTable('AmazonDynamoDbTable', 'Amazon Dynamo Db Table', 'an optional tech label')
@enduml
```

## AmazonDynamoDbTableCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonDynamoDbTableCard
include('aws-q3-2021/Resource/Database/AmazonDynamoDbTable')

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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonDynamoDbTableCard
include('aws-q3-2021/Resource/Database/AmazonDynamoDbTable')

' renders the element
AmazonDynamoDbTableCard('AmazonDynamoDbTableCard', 'Amazon Dynamo Db Table Card', 'an optional description')
@enduml
```

## AmazonDynamoDbTableGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonDynamoDbTableGroup
include('aws-q3-2021/Resource/Database/AmazonDynamoDbTable')

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
include('aws-q3-2021/bootstrap')

' loads the Item which embeds the element AmazonDynamoDbTableGroup
include('aws-q3-2021/Resource/Database/AmazonDynamoDbTable')

' renders the element
AmazonDynamoDbTableGroup('AmazonDynamoDbTableGroup', 'Amazon Dynamo Db Table Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```
