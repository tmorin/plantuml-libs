# PauseCircleOutline


```text
material-4/Av/PauseCircleOutline
```

```text
include('material-4/Av/PauseCircleOutline')
```



| Illustration | PauseCircleOutline |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/PauseCircleOutline.png) | ![illustration for PauseCircleOutline](../../material-4/Av/PauseCircleOutline.Local.png) |




## PauseCircleOutline

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element PauseCircleOutline
include('material-4/Av/PauseCircleOutline')

' renders the element
PauseCircleOutline('PauseCircleOutline', 'Pause Circle Outline', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PauseCircleOutline
include('material-4/Av/PauseCircleOutline')

' renders the element
PauseCircleOutline('PauseCircleOutline', 'Pause Circle Outline', 'an optional tech label', 'an optional description')
@enduml
```

