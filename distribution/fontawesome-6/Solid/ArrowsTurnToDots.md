# ArrowsTurnToDots


```text
fontawesome-6/Solid/ArrowsTurnToDots
```

```text
include('fontawesome-6/Solid/ArrowsTurnToDots')
```



| Illustration | ArrowsTurnToDots |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/ArrowsTurnToDots.png) | ![illustration for ArrowsTurnToDots](../../fontawesome-6/Solid/ArrowsTurnToDots.Local.png) |




## ArrowsTurnToDots

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element ArrowsTurnToDots
include('fontawesome-6/Solid/ArrowsTurnToDots')

' renders the element
ArrowsTurnToDots('ArrowsTurnToDots', 'Arrows Turn To Dots', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ArrowsTurnToDots
include('fontawesome-6/Solid/ArrowsTurnToDots')

' renders the element
ArrowsTurnToDots('ArrowsTurnToDots', 'Arrows Turn To Dots', 'an optional tech label', 'an optional description')
@enduml
```

