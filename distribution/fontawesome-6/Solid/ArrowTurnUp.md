# ArrowTurnUp


```text
fontawesome-6/Solid/ArrowTurnUp
```

```text
include('fontawesome-6/Solid/ArrowTurnUp')
```



| Illustration | ArrowTurnUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ArrowTurnUp.png) | ![illustration for ArrowTurnUp](../../fontawesome-6/Solid/ArrowTurnUp.Local.png) |




## ArrowTurnUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ArrowTurnUp
include('fontawesome-6/Solid/ArrowTurnUp')

' renders the element
ArrowTurnUp('ArrowTurnUp', 'Arrow Turn Up', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ArrowTurnUp
include('fontawesome-6/Solid/ArrowTurnUp')

' renders the element
ArrowTurnUp('ArrowTurnUp', 'Arrow Turn Up', 'an optional tech label', 'an optional description')
@enduml
```

