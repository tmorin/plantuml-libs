# Replay


```text
material-4/Av/Replay
```

```text
include('material-4/Av/Replay')
```



| Illustration | Replay |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/Replay.png) | ![illustration for Replay](../../material-4/Av/Replay.Local.png) |




## Replay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Replay
include('material-4/Av/Replay')

' renders the element
Replay('Replay', 'Replay', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Replay
include('material-4/Av/Replay')

' renders the element
Replay('Replay', 'Replay', 'an optional tech label', 'an optional description')
@enduml
```

