# Amazon Elastic Inference

```text
aws-20210131/Architecture/MachineLearning/AmazonElasticInference
```

```text
include('aws-20210131/Architecture/MachineLearning/AmazonElasticInference')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonElasticInference.png)|![](AmazonElasticInference.card.png)|![](AmazonElasticInference.element.png)|![](AmazonElasticInference.group.png)|



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
' loads the AmazonElasticInference element
include('aws-20210131/Architecture/MachineLearning/AmazonElasticInference')
AmazonElasticInferenceCard('amazon_elastic_inference', 'Amazon Elastic Inference', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonElasticInference element
include('aws-20210131/Architecture/MachineLearning/AmazonElasticInference')
AmazonElasticInferenceCard('amazon_elastic_inference', 'Amazon Elastic Inference', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonElasticInference element
include('aws-20210131/Architecture/MachineLearning/AmazonElasticInference')
AmazonElasticInference('amazon_elastic_inference', 'Amazon Elastic Inference', 'an optional tech field')
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
' loads the AmazonElasticInference element
include('aws-20210131/Architecture/MachineLearning/AmazonElasticInference')
AmazonElasticInference('amazon_elastic_inference', 'Amazon Elastic Inference', 'an optional tech field')
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
' loads the AmazonElasticInference element
include('aws-20210131/Architecture/MachineLearning/AmazonElasticInference')
AmazonElasticInferenceGroup('amazon_elastic_inference', 'Amazon Elastic Inference', 'an optional tech field'){
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
' loads the AmazonElasticInference element
include('aws-20210131/Architecture/MachineLearning/AmazonElasticInference')
AmazonElasticInferenceGroup('amazon_elastic_inference', 'Amazon Elastic Inference', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

