# Amazon Sage Maker

```text
aws-20210131/Architecture/MachineLearning/AmazonSageMaker
```

```text
include('aws-20210131/Architecture/MachineLearning/AmazonSageMaker')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonSageMaker.png)|![](AmazonSageMaker.card.png)|![](AmazonSageMaker.element.png)|![](AmazonSageMaker.group.png)|



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
' loads the AmazonSageMaker element
include('aws-20210131/Architecture/MachineLearning/AmazonSageMaker')
AmazonSageMakerCard('amazon_sage_maker', 'Amazon Sage Maker', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonSageMaker element
include('aws-20210131/Architecture/MachineLearning/AmazonSageMaker')
AmazonSageMakerCard('amazon_sage_maker', 'Amazon Sage Maker', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonSageMaker element
include('aws-20210131/Architecture/MachineLearning/AmazonSageMaker')
AmazonSageMaker('amazon_sage_maker', 'Amazon Sage Maker', 'an optional tech field')
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
' loads the AmazonSageMaker element
include('aws-20210131/Architecture/MachineLearning/AmazonSageMaker')
AmazonSageMaker('amazon_sage_maker', 'Amazon Sage Maker', 'an optional tech field')
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
' loads the AmazonSageMaker element
include('aws-20210131/Architecture/MachineLearning/AmazonSageMaker')
AmazonSageMakerGroup('amazon_sage_maker', 'Amazon Sage Maker', 'an optional tech field'){
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
' loads the AmazonSageMaker element
include('aws-20210131/Architecture/MachineLearning/AmazonSageMaker')
AmazonSageMakerGroup('amazon_sage_maker', 'Amazon Sage Maker', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

