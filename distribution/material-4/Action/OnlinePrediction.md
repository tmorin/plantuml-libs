# OnlinePrediction


```text
material-4/Action/OnlinePrediction
```

```text
include('material-4/Action/OnlinePrediction')
```



| Illustration | OnlinePrediction |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/OnlinePrediction.png) | ![illustration for OnlinePrediction](../../material-4/Action/OnlinePrediction.Local.png) |




## OnlinePrediction

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element OnlinePrediction
include('material-4/Action/OnlinePrediction')

' renders the element
OnlinePrediction('OnlinePrediction', 'Online Prediction', 'an optional tech label')
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

' loads the Item which embeds the element OnlinePrediction
include('material-4/Action/OnlinePrediction')

' renders the element
OnlinePrediction('OnlinePrediction', 'Online Prediction', 'an optional tech label')
@enduml
```

