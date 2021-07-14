# FitScreen


```text
material-4/Action/FitScreen
```

```text
include('material-4/Action/FitScreen')
```



| Illustration | FitScreen |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/FitScreen.png) | ![illustration for FitScreen](../../material-4/Action/FitScreen.Local.png) |




## FitScreen

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element FitScreen
include('material-4/Action/FitScreen')

' renders the element
FitScreen('FitScreen', 'Fit Screen', 'an optional tech label')
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

' loads the Item which embeds the element FitScreen
include('material-4/Action/FitScreen')

' renders the element
FitScreen('FitScreen', 'Fit Screen', 'an optional tech label')
@enduml
```

