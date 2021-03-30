# Amazon Textract

```text
aws-20210131/Architecture/MachineLearning/AmazonTextract
```

```text
include('aws-20210131/Architecture/MachineLearning/AmazonTextract')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonTextract.png)|![](AmazonTextract.card.png)|![](AmazonTextract.element.png)|![](AmazonTextract.group.png)|



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
' loads the AmazonTextract element
include('aws-20210131/Architecture/MachineLearning/AmazonTextract')
AmazonTextractCard('amazon_textract', 'Amazon Textract', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonTextract element
include('aws-20210131/Architecture/MachineLearning/AmazonTextract')
AmazonTextractCard('amazon_textract', 'Amazon Textract', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonTextract element
include('aws-20210131/Architecture/MachineLearning/AmazonTextract')
AmazonTextract('amazon_textract', 'Amazon Textract', 'an optional tech field')
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
' loads the AmazonTextract element
include('aws-20210131/Architecture/MachineLearning/AmazonTextract')
AmazonTextract('amazon_textract', 'Amazon Textract', 'an optional tech field')
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
' loads the AmazonTextract element
include('aws-20210131/Architecture/MachineLearning/AmazonTextract')
AmazonTextractGroup('amazon_textract', 'Amazon Textract', 'an optional tech field'){
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
' loads the AmazonTextract element
include('aws-20210131/Architecture/MachineLearning/AmazonTextract')
AmazonTextractGroup('amazon_textract', 'Amazon Textract', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

