# Replay5


```text
material-4/Av/Replay5
```

```text
include('material-4/Av/Replay5')
```



| Illustration | Replay5 |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Av/Replay5.png) | ![illustration for Replay5](../../material-4/Av/Replay5.Local.png) |




## Replay5

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element Replay5
include('material-4/Av/Replay5')

' renders the element
Replay5('Replay5', 'Replay5', 'an optional tech label')
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

' loads the Item which embeds the element Replay5
include('material-4/Av/Replay5')

' renders the element
Replay5('Replay5', 'Replay5', 'an optional tech label')
@enduml
```

