# Amazon Kendra

```text
aws-20210131/Architecture/MachineLearning/AmazonKendra
```

```text
include('aws-20210131/Architecture/MachineLearning/AmazonKendra')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonKendra.png)|![](AmazonKendra.card.png)|![](AmazonKendra.element.png)|![](AmazonKendra.group.png)|



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
' loads the AmazonKendra element
include('aws-20210131/Architecture/MachineLearning/AmazonKendra')
AmazonKendraCard('amazon_kendra', 'Amazon Kendra', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonKendra element
include('aws-20210131/Architecture/MachineLearning/AmazonKendra')
AmazonKendraCard('amazon_kendra', 'Amazon Kendra', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonKendra element
include('aws-20210131/Architecture/MachineLearning/AmazonKendra')
AmazonKendra('amazon_kendra', 'Amazon Kendra', 'an optional tech field')
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
' loads the AmazonKendra element
include('aws-20210131/Architecture/MachineLearning/AmazonKendra')
AmazonKendra('amazon_kendra', 'Amazon Kendra', 'an optional tech field')
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
' loads the AmazonKendra element
include('aws-20210131/Architecture/MachineLearning/AmazonKendra')
AmazonKendraGroup('amazon_kendra', 'Amazon Kendra', 'an optional tech field'){
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
' loads the AmazonKendra element
include('aws-20210131/Architecture/MachineLearning/AmazonKendra')
AmazonKendraGroup('amazon_kendra', 'Amazon Kendra', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

