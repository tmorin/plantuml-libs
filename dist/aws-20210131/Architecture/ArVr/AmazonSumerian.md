# Amazon Sumerian

```text
aws-20210131/Architecture/ArVr/AmazonSumerian
```

```text
include('aws-20210131/Architecture/ArVr/AmazonSumerian')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonSumerian.png)|![](AmazonSumerian.card.png)|![](AmazonSumerian.element.png)|![](AmazonSumerian.group.png)|



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
' loads the AmazonSumerian element
include('aws-20210131/Architecture/ArVr/AmazonSumerian')
AmazonSumerianCard('amazon_sumerian', 'Amazon Sumerian', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonSumerian element
include('aws-20210131/Architecture/ArVr/AmazonSumerian')
AmazonSumerianCard('amazon_sumerian', 'Amazon Sumerian', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonSumerian element
include('aws-20210131/Architecture/ArVr/AmazonSumerian')
AmazonSumerian('amazon_sumerian', 'Amazon Sumerian', 'an optional tech field')
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
' loads the AmazonSumerian element
include('aws-20210131/Architecture/ArVr/AmazonSumerian')
AmazonSumerian('amazon_sumerian', 'Amazon Sumerian', 'an optional tech field')
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
' loads the AmazonSumerian element
include('aws-20210131/Architecture/ArVr/AmazonSumerian')
AmazonSumerianGroup('amazon_sumerian', 'Amazon Sumerian', 'an optional tech field'){
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
' loads the AmazonSumerian element
include('aws-20210131/Architecture/ArVr/AmazonSumerian')
AmazonSumerianGroup('amazon_sumerian', 'Amazon Sumerian', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

