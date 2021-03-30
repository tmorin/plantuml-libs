# Amazon Translate

```text
aws-20210131/Architecture/MachineLearning/AmazonTranslate
```

```text
include('aws-20210131/Architecture/MachineLearning/AmazonTranslate')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonTranslate.png)|![](AmazonTranslate.card.png)|![](AmazonTranslate.element.png)|![](AmazonTranslate.group.png)|



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
' loads the AmazonTranslate element
include('aws-20210131/Architecture/MachineLearning/AmazonTranslate')
AmazonTranslateCard('amazon_translate', 'Amazon Translate', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonTranslate element
include('aws-20210131/Architecture/MachineLearning/AmazonTranslate')
AmazonTranslateCard('amazon_translate', 'Amazon Translate', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonTranslate element
include('aws-20210131/Architecture/MachineLearning/AmazonTranslate')
AmazonTranslate('amazon_translate', 'Amazon Translate', 'an optional tech field')
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
' loads the AmazonTranslate element
include('aws-20210131/Architecture/MachineLearning/AmazonTranslate')
AmazonTranslate('amazon_translate', 'Amazon Translate', 'an optional tech field')
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
' loads the AmazonTranslate element
include('aws-20210131/Architecture/MachineLearning/AmazonTranslate')
AmazonTranslateGroup('amazon_translate', 'Amazon Translate', 'an optional tech field'){
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
' loads the AmazonTranslate element
include('aws-20210131/Architecture/MachineLearning/AmazonTranslate')
AmazonTranslateGroup('amazon_translate', 'Amazon Translate', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

