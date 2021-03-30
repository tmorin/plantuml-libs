# Amazon Document Db

```text
aws-20210131/Architecture/Database/AmazonDocumentDb
```

```text
include('aws-20210131/Architecture/Database/AmazonDocumentDb')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonDocumentDb.png)|![](AmazonDocumentDb.card.png)|![](AmazonDocumentDb.element.png)|![](AmazonDocumentDb.group.png)|



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
' loads the AmazonDocumentDb element
include('aws-20210131/Architecture/Database/AmazonDocumentDb')
AmazonDocumentDbCard('amazon_document_db', 'Amazon Document Db', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonDocumentDb element
include('aws-20210131/Architecture/Database/AmazonDocumentDb')
AmazonDocumentDbCard('amazon_document_db', 'Amazon Document Db', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonDocumentDb element
include('aws-20210131/Architecture/Database/AmazonDocumentDb')
AmazonDocumentDb('amazon_document_db', 'Amazon Document Db', 'an optional tech field')
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
' loads the AmazonDocumentDb element
include('aws-20210131/Architecture/Database/AmazonDocumentDb')
AmazonDocumentDb('amazon_document_db', 'Amazon Document Db', 'an optional tech field')
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
' loads the AmazonDocumentDb element
include('aws-20210131/Architecture/Database/AmazonDocumentDb')
AmazonDocumentDbGroup('amazon_document_db', 'Amazon Document Db', 'an optional tech field'){
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
' loads the AmazonDocumentDb element
include('aws-20210131/Architecture/Database/AmazonDocumentDb')
AmazonDocumentDbGroup('amazon_document_db', 'Amazon Document Db', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

