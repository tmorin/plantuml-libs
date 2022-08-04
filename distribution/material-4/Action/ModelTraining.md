# ModelTraining


```text
material-4/Action/ModelTraining
```

```text
include('material-4/Action/ModelTraining')
```



| Illustration | ModelTraining |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/ModelTraining.png) | ![illustration for ModelTraining](../../material-4/Action/ModelTraining.Local.png) |




## ModelTraining

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ModelTraining
include('material-4/Action/ModelTraining')

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
include('material-4/bootstrap')

' loads the Item which embeds the element ModelTraining
include('material-4/Action/ModelTraining')

' renders the element
ModelTraining('ModelTraining', 'Model Training', 'an optional tech label', 'an optional description')
@enduml
```

