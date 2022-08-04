# TurnUp


```text
fontawesome-6/Solid/TurnUp
```

```text
include('fontawesome-6/Solid/TurnUp')
```



| Illustration | TurnUp |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/TurnUp.png) | ![illustration for TurnUp](../../fontawesome-6/Solid/TurnUp.Local.png) |




## TurnUp

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element TurnUp
include('fontawesome-6/Solid/TurnUp')

' renders the element
TurnUp('TurnUp', 'Turn Up', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TurnUp
include('fontawesome-6/Solid/TurnUp')

' renders the element
TurnUp('TurnUp', 'Turn Up', 'an optional tech label', 'an optional description')
@enduml
```

