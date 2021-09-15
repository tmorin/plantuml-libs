# AmazonDocumentDb


```text
aws-20210730/Architecture/Database/AmazonDocumentDb
```

```text
include('aws-20210730/Architecture/Database/AmazonDocumentDb')
```



| Illustration | AmazonDocumentDb | AmazonDocumentDbCard | AmazonDocumentDbGroup |
| :---: | :---: | :---: | :---: |
| ![illustration for Illustration](../../../aws-20210730/Architecture/Database/AmazonDocumentDb.png) | ![illustration for AmazonDocumentDb](../../../aws-20210730/Architecture/Database/AmazonDocumentDb.Local.png) | ![illustration for AmazonDocumentDbCard](../../../aws-20210730/Architecture/Database/AmazonDocumentDbCard.Local.png) | ![illustration for AmazonDocumentDbGroup](../../../aws-20210730/Architecture/Database/AmazonDocumentDbGroup.Local.png) |




## AmazonDocumentDb

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonDocumentDb
include('aws-20210730/Architecture/Database/AmazonDocumentDb')

' renders the element
AmazonDocumentDb('AmazonDocumentDb', 'Amazon Document Db', 'an optional tech label')
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

' loads the Item which embeds the element AmazonDocumentDb
include('aws-20210730/Architecture/Database/AmazonDocumentDb')

' renders the element
AmazonDocumentDb('AmazonDocumentDb', 'Amazon Document Db', 'an optional tech label')
@enduml
```

## AmazonDocumentDbCard

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonDocumentDbCard
include('aws-20210730/Architecture/Database/AmazonDocumentDb')

' renders the element
AmazonDocumentDbCard('AmazonDocumentDbCard', 'Amazon Document Db Card', 'an optional description')
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

' loads the Item which embeds the element AmazonDocumentDbCard
include('aws-20210730/Architecture/Database/AmazonDocumentDb')

' renders the element
AmazonDocumentDbCard('AmazonDocumentDbCard', 'Amazon Document Db Card', 'an optional description')
@enduml
```

## AmazonDocumentDbGroup

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('aws-20210730/bootstrap')

' loads the Item which embeds the element AmazonDocumentDbGroup
include('aws-20210730/Architecture/Database/AmazonDocumentDb')

' renders the element
AmazonDocumentDbGroup('AmazonDocumentDbGroup', 'Amazon Document Db Group', 'an optional tech label') {
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

' loads the Item which embeds the element AmazonDocumentDbGroup
include('aws-20210730/Architecture/Database/AmazonDocumentDb')

' renders the element
AmazonDocumentDbGroup('AmazonDocumentDbGroup', 'Amazon Document Db Group', 'an optional tech label') {
    note as note
        the content of the group
    end note
}
@enduml
```

