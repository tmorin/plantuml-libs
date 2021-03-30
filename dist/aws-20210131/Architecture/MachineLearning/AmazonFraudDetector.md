# Amazon Fraud Detector

```text
aws-20210131/Architecture/MachineLearning/AmazonFraudDetector
```

```text
include('aws-20210131/Architecture/MachineLearning/AmazonFraudDetector')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonFraudDetector.png)|![](AmazonFraudDetector.card.png)|![](AmazonFraudDetector.element.png)|![](AmazonFraudDetector.group.png)|



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
' loads the AmazonFraudDetector element
include('aws-20210131/Architecture/MachineLearning/AmazonFraudDetector')
AmazonFraudDetectorCard('amazon_fraud_detector', 'Amazon Fraud Detector', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonFraudDetector element
include('aws-20210131/Architecture/MachineLearning/AmazonFraudDetector')
AmazonFraudDetectorCard('amazon_fraud_detector', 'Amazon Fraud Detector', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonFraudDetector element
include('aws-20210131/Architecture/MachineLearning/AmazonFraudDetector')
AmazonFraudDetector('amazon_fraud_detector', 'Amazon Fraud Detector', 'an optional tech field')
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
' loads the AmazonFraudDetector element
include('aws-20210131/Architecture/MachineLearning/AmazonFraudDetector')
AmazonFraudDetector('amazon_fraud_detector', 'Amazon Fraud Detector', 'an optional tech field')
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
' loads the AmazonFraudDetector element
include('aws-20210131/Architecture/MachineLearning/AmazonFraudDetector')
AmazonFraudDetectorGroup('amazon_fraud_detector', 'Amazon Fraud Detector', 'an optional tech field'){
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
' loads the AmazonFraudDetector element
include('aws-20210131/Architecture/MachineLearning/AmazonFraudDetector')
AmazonFraudDetectorGroup('amazon_fraud_detector', 'Amazon Fraud Detector', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

