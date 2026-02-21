# OnlinePrediction


```text
material/Action/OnlinePrediction
```

```text
include('material/Action/OnlinePrediction')
```



| Illustration | OnlinePrediction |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/OnlinePrediction.png) | ![illustration for OnlinePrediction](../../material/Action/OnlinePrediction.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$OnlinePredictionXs>`
- `<$OnlinePredictionSm>`
- `<$OnlinePredictionMd>`
- `<$OnlinePredictionLg>`





## OnlinePrediction

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element OnlinePrediction
include('material/Action/OnlinePrediction')

' renders the element
OnlinePrediction('OnlinePrediction', 'Online Prediction', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element OnlinePrediction
include('material/Action/OnlinePrediction')

' renders the element
OnlinePrediction('OnlinePrediction', 'Online Prediction', 'an optional tech label', 'an optional description')
@enduml
```

