# Amazon Rekognition

```text
aws-20210131/Architecture/MachineLearning/AmazonRekognition
```

```text
include('aws-20210131/Architecture/MachineLearning/AmazonRekognition')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonRekognition.png)|![](AmazonRekognition.card.png)|![](AmazonRekognition.element.png)|![](AmazonRekognition.group.png)|



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
' loads the AmazonRekognition element
include('aws-20210131/Architecture/MachineLearning/AmazonRekognition')
AmazonRekognitionCard('amazon_rekognition', 'Amazon Rekognition', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonRekognition element
include('aws-20210131/Architecture/MachineLearning/AmazonRekognition')
AmazonRekognitionCard('amazon_rekognition', 'Amazon Rekognition', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonRekognition element
include('aws-20210131/Architecture/MachineLearning/AmazonRekognition')
AmazonRekognition('amazon_rekognition', 'Amazon Rekognition', 'an optional tech field')
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
' loads the AmazonRekognition element
include('aws-20210131/Architecture/MachineLearning/AmazonRekognition')
AmazonRekognition('amazon_rekognition', 'Amazon Rekognition', 'an optional tech field')
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
' loads the AmazonRekognition element
include('aws-20210131/Architecture/MachineLearning/AmazonRekognition')
AmazonRekognitionGroup('amazon_rekognition', 'Amazon Rekognition', 'an optional tech field'){
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
' loads the AmazonRekognition element
include('aws-20210131/Architecture/MachineLearning/AmazonRekognition')
AmazonRekognitionGroup('amazon_rekognition', 'Amazon Rekognition', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

