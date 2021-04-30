# Amazon Work Docs

```text
aws-20210131/Architecture/EndUserComputing/AmazonWorkDocs
```

```text
include('aws-20210131/Architecture/EndUserComputing/AmazonWorkDocs')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonWorkDocs.png)|![](AmazonWorkDocs.card.png)|![](AmazonWorkDocs.element.png)|![](AmazonWorkDocs.group.png)|



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
' loads the AmazonWorkDocs element
include('aws-20210131/Architecture/EndUserComputing/AmazonWorkDocs')
AmazonWorkDocsCard('amazon_work_docs', 'Amazon Work Docs', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonWorkDocs element
include('aws-20210131/Architecture/EndUserComputing/AmazonWorkDocs')
AmazonWorkDocsCard('amazon_work_docs', 'Amazon Work Docs', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonWorkDocs element
include('aws-20210131/Architecture/EndUserComputing/AmazonWorkDocs')
AmazonWorkDocs('amazon_work_docs', 'Amazon Work Docs', 'an optional tech field')
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
' loads the AmazonWorkDocs element
include('aws-20210131/Architecture/EndUserComputing/AmazonWorkDocs')
AmazonWorkDocs('amazon_work_docs', 'Amazon Work Docs', 'an optional tech field')
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
' loads the AmazonWorkDocs element
include('aws-20210131/Architecture/EndUserComputing/AmazonWorkDocs')
AmazonWorkDocsGroup('amazon_work_docs', 'Amazon Work Docs', 'an optional tech field'){
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
' loads the AmazonWorkDocs element
include('aws-20210131/Architecture/EndUserComputing/AmazonWorkDocs')
AmazonWorkDocsGroup('amazon_work_docs', 'Amazon Work Docs', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

