# Aws Work Docs

```text
aws-20200430/Item/EndUserComputing/AwsWorkDocs
```

```text
include('aws-20200430/Item/EndUserComputing/AwsWorkDocs')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsWorkDocs.png)|![](AwsWorkDocs.card.png)|![](AwsWorkDocs.element.png)|![](AwsWorkDocs.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsWorkDocs element
include('aws-20200430/Item/EndUserComputing/AwsWorkDocs')
AwsWorkDocsCard('aws_work_docs', 'Aws Work Docs', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsWorkDocs element
include('aws-20200430/Item/EndUserComputing/AwsWorkDocs')
AwsWorkDocsCard('aws_work_docs', 'Aws Work Docs', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsWorkDocs element
include('aws-20200430/Item/EndUserComputing/AwsWorkDocs')
AwsWorkDocs('aws_work_docs', 'Aws Work Docs', 'an optional tech field')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsWorkDocs element
include('aws-20200430/Item/EndUserComputing/AwsWorkDocs')
AwsWorkDocs('aws_work_docs', 'Aws Work Docs', 'an optional tech field')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsWorkDocs element
include('aws-20200430/Item/EndUserComputing/AwsWorkDocs')
AwsWorkDocsGroup('aws_work_docs', 'Aws Work Docs', 'an optional tech field'){
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsWorkDocs element
include('aws-20200430/Item/EndUserComputing/AwsWorkDocs')
AwsWorkDocsGroup('aws_work_docs', 'Aws Work Docs', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

