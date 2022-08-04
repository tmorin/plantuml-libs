# ArrowTurnDown


```text
fontawesome-6/Solid/ArrowTurnDown
```

```text
include('fontawesome-6/Solid/ArrowTurnDown')
```



| Illustration | ArrowTurnDown |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ArrowTurnDown.png) | ![illustration for ArrowTurnDown](../../fontawesome-6/Solid/ArrowTurnDown.Local.png) |




## ArrowTurnDown

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ArrowTurnDown
include('fontawesome-6/Solid/ArrowTurnDown')

' renders the element
ArrowTurnDown('ArrowTurnDown', 'Arrow Turn Down', 'an optional tech label', 'an optional description')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ArrowTurnDown
include('fontawesome-6/Solid/ArrowTurnDown')

' renders the element
ArrowTurnDown('ArrowTurnDown', 'Arrow Turn Down', 'an optional tech label', 'an optional description')
@enduml
```

