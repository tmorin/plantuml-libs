# PauseCircleFilled


```text
material-4/Av/PauseCircleFilled
```

```text
include('material-4/Av/PauseCircleFilled')
```



| Illustration | PauseCircleFilled |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/PauseCircleFilled.png) | ![illustration for PauseCircleFilled](../../material-4/Av/PauseCircleFilled.Local.png) |




## PauseCircleFilled

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PauseCircleFilled
include('material-4/Av/PauseCircleFilled')

' renders the element
PauseCircleFilled('PauseCircleFilled', 'Pause Circle Filled', 'an optional tech label')
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

' loads the Item which embeds the element PauseCircleFilled
include('material-4/Av/PauseCircleFilled')

' renders the element
PauseCircleFilled('PauseCircleFilled', 'Pause Circle Filled', 'an optional tech label')
@enduml
```

