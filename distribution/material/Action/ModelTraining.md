# ModelTraining


```text
material/Action/ModelTraining
```

```text
include('material/Action/ModelTraining')
```



| Illustration | ModelTraining |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/ModelTraining.png) | ![illustration for ModelTraining](../../material/Action/ModelTraining.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ModelTrainingXs>`
- `<$ModelTrainingSm>`
- `<$ModelTrainingMd>`
- `<$ModelTrainingLg>`





## ModelTraining

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element ModelTraining
include('material/Action/ModelTraining')

' renders the element
ModelTraining('ModelTraining', 'Model Training', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ModelTraining
include('material/Action/ModelTraining')

' renders the element
ModelTraining('ModelTraining', 'Model Training', 'an optional tech label', 'an optional description')
@enduml
```

