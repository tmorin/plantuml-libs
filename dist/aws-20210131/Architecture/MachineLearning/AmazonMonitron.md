# Amazon Monitron

```text
aws-20210131/Architecture/MachineLearning/AmazonMonitron
```

```text
include('aws-20210131/Architecture/MachineLearning/AmazonMonitron')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonMonitron.png)|![](AmazonMonitron.card.png)|![](AmazonMonitron.element.png)|![](AmazonMonitron.group.png)|



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
' loads the AmazonMonitron element
include('aws-20210131/Architecture/MachineLearning/AmazonMonitron')
AmazonMonitronCard('amazon_monitron', 'Amazon Monitron', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonMonitron element
include('aws-20210131/Architecture/MachineLearning/AmazonMonitron')
AmazonMonitronCard('amazon_monitron', 'Amazon Monitron', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonMonitron element
include('aws-20210131/Architecture/MachineLearning/AmazonMonitron')
AmazonMonitron('amazon_monitron', 'Amazon Monitron', 'an optional tech field')
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
' loads the AmazonMonitron element
include('aws-20210131/Architecture/MachineLearning/AmazonMonitron')
AmazonMonitron('amazon_monitron', 'Amazon Monitron', 'an optional tech field')
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
' loads the AmazonMonitron element
include('aws-20210131/Architecture/MachineLearning/AmazonMonitron')
AmazonMonitronGroup('amazon_monitron', 'Amazon Monitron', 'an optional tech field'){
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
' loads the AmazonMonitron element
include('aws-20210131/Architecture/MachineLearning/AmazonMonitron')
AmazonMonitronGroup('amazon_monitron', 'Amazon Monitron', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

