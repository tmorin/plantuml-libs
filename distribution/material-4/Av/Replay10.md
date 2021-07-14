# Replay10


```text
material-4/Av/Replay10
```

```text
include('material-4/Av/Replay10')
```



| Illustration | Replay10 |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/Replay10.png) | ![illustration for Replay10](../../material-4/Av/Replay10.Local.png) |




## Replay10

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Replay10
include('material-4/Av/Replay10')

' renders the element
Replay10('Replay10', 'Replay10', 'an optional tech label')
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

' loads the Item which embeds the element Replay10
include('material-4/Av/Replay10')

' renders the element
Replay10('Replay10', 'Replay10', 'an optional tech label')
@enduml
```

