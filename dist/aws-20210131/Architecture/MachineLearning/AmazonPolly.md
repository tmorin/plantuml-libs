# Amazon Polly

```text
aws-20210131/Architecture/MachineLearning/AmazonPolly
```

```text
include('aws-20210131/Architecture/MachineLearning/AmazonPolly')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonPolly.png)|![](AmazonPolly.card.png)|![](AmazonPolly.element.png)|![](AmazonPolly.group.png)|



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
' loads the AmazonPolly element
include('aws-20210131/Architecture/MachineLearning/AmazonPolly')
AmazonPollyCard('amazon_polly', 'Amazon Polly', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonPolly element
include('aws-20210131/Architecture/MachineLearning/AmazonPolly')
AmazonPollyCard('amazon_polly', 'Amazon Polly', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonPolly element
include('aws-20210131/Architecture/MachineLearning/AmazonPolly')
AmazonPolly('amazon_polly', 'Amazon Polly', 'an optional tech field')
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
' loads the AmazonPolly element
include('aws-20210131/Architecture/MachineLearning/AmazonPolly')
AmazonPolly('amazon_polly', 'Amazon Polly', 'an optional tech field')
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
' loads the AmazonPolly element
include('aws-20210131/Architecture/MachineLearning/AmazonPolly')
AmazonPollyGroup('amazon_polly', 'Amazon Polly', 'an optional tech field'){
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
' loads the AmazonPolly element
include('aws-20210131/Architecture/MachineLearning/AmazonPolly')
AmazonPollyGroup('amazon_polly', 'Amazon Polly', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

