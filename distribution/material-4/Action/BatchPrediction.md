# BatchPrediction


```text
material-4/Action/BatchPrediction
```

```text
include('material-4/Action/BatchPrediction')
```



| Illustration | BatchPrediction |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/BatchPrediction.png) | ![illustration for BatchPrediction](../../material-4/Action/BatchPrediction.Local.png) |




## BatchPrediction

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element BatchPrediction
include('material-4/Action/BatchPrediction')

' renders the element
BatchPrediction('BatchPrediction', 'Batch Prediction', 'an optional tech label')
@enduml
```

### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element BatchPrediction
include('material-4/Action/BatchPrediction')

' renders the element
BatchPrediction('BatchPrediction', 'Batch Prediction', 'an optional tech label')
@enduml
```

