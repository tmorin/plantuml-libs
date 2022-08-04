# ReplayCircleFilled


```text
material-4/Av/ReplayCircleFilled
```

```text
include('material-4/Av/ReplayCircleFilled')
```



| Illustration | ReplayCircleFilled |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/ReplayCircleFilled.png) | ![illustration for ReplayCircleFilled](../../material-4/Av/ReplayCircleFilled.Local.png) |




## ReplayCircleFilled

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element ReplayCircleFilled
include('material-4/Av/ReplayCircleFilled')

' renders the element
ReplayCircleFilled('ReplayCircleFilled', 'Replay Circle Filled', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ReplayCircleFilled
include('material-4/Av/ReplayCircleFilled')

' renders the element
ReplayCircleFilled('ReplayCircleFilled', 'Replay Circle Filled', 'an optional tech label', 'an optional description')
@enduml
```

