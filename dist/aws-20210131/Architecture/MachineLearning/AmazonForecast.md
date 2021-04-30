# Amazon Forecast

```text
aws-20210131/Architecture/MachineLearning/AmazonForecast
```

```text
include('aws-20210131/Architecture/MachineLearning/AmazonForecast')
```

|icon|card|element|group|
|---|---|---|---|
|![](AmazonForecast.png)|![](AmazonForecast.card.png)|![](AmazonForecast.element.png)|![](AmazonForecast.group.png)|



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
' loads the AmazonForecast element
include('aws-20210131/Architecture/MachineLearning/AmazonForecast')
AmazonForecastCard('amazon_forecast', 'Amazon Forecast', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonForecast element
include('aws-20210131/Architecture/MachineLearning/AmazonForecast')
AmazonForecastCard('amazon_forecast', 'Amazon Forecast', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the AmazonForecast element
include('aws-20210131/Architecture/MachineLearning/AmazonForecast')
AmazonForecast('amazon_forecast', 'Amazon Forecast', 'an optional tech field')
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
' loads the AmazonForecast element
include('aws-20210131/Architecture/MachineLearning/AmazonForecast')
AmazonForecast('amazon_forecast', 'Amazon Forecast', 'an optional tech field')
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
' loads the AmazonForecast element
include('aws-20210131/Architecture/MachineLearning/AmazonForecast')
AmazonForecastGroup('amazon_forecast', 'Amazon Forecast', 'an optional tech field'){
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
' loads the AmazonForecast element
include('aws-20210131/Architecture/MachineLearning/AmazonForecast')
AmazonForecastGroup('amazon_forecast', 'Amazon Forecast', 'an optional tech field'){
  note as note
  the content of the group
  end note
}
@enduml
```

