# Amazon Work Docs

```text
aws-20200911/Service/BusinessApplication/AmazonWorkDocs
```

```text
include('aws-20200911/Service/BusinessApplication/AmazonWorkDocs')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AmazonWorkDocs element
include('aws-20200911/Service/BusinessApplication/AmazonWorkDocs')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AmazonWorkDocs element
include('aws-20200911/Service/BusinessApplication/AmazonWorkDocs')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AmazonWorkDocs element
include('aws-20200911/Service/BusinessApplication/AmazonWorkDocs')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AmazonWorkDocs element
include('aws-20200911/Service/BusinessApplication/AmazonWorkDocs')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AmazonWorkDocs element
include('aws-20200911/Service/BusinessApplication/AmazonWorkDocs')
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
' loads the aws-20200911 bootstrap
include('aws-20200911/bootstrap')
' loads the AmazonWorkDocs element
include('aws-20200911/Service/BusinessApplication/AmazonWorkDocs')
AmazonWorkDocsGroup('amazon_work_docs', 'Amazon Work Docs', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

