# Aws Forecast

```text
aws-20200430/Item/MachineLearning/AwsForecast
```

```text
include('aws-20200430/Item/MachineLearning/AwsForecast')
```

|icon|card|element|group|
|---|---|---|---|
|![](AwsForecast.png)|![](AwsForecast.card.png)|![](AwsForecast.element.png)|![](AwsForecast.group.png)|



## card
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsForecast element
include('aws-20200430/Item/MachineLearning/AwsForecast')
AwsForecastCard('aws_forecast', 'Aws Forecast', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsForecast element
include('aws-20200430/Item/MachineLearning/AwsForecast')
AwsForecastCard('aws_forecast', 'Aws Forecast', 'Molestiae praesentium aut natus dolorem. Aut consequatur fugiat a consequatur ut.')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsForecast element
include('aws-20200430/Item/MachineLearning/AwsForecast')
AwsForecast('aws_forecast', 'Aws Forecast', 'an optional tech field')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsForecast element
include('aws-20200430/Item/MachineLearning/AwsForecast')
AwsForecast('aws_forecast', 'Aws Forecast', 'an optional tech field')
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsForecast element
include('aws-20200430/Item/MachineLearning/AwsForecast')
AwsForecastGroup('aws_forecast', 'Aws Forecast', 'an optional tech field'){
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
' loads the aws-20200430 bootstrap
include('aws-20200430/bootstrap')
' loads the AwsForecast element
include('aws-20200430/Item/MachineLearning/AwsForecast')
AwsForecastGroup('aws_forecast', 'Aws Forecast', 'an optional tech field'){
note as note
the content of the group
end note
}
@enduml
```

