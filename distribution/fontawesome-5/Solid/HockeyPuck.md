# HockeyPuck


```text
fontawesome-5/Solid/HockeyPuck
```

```text
include('fontawesome-5/Solid/HockeyPuck')
```



| Illustration | HockeyPuck |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/HockeyPuck.png) | ![illustration for HockeyPuck](../../fontawesome-5/Solid/HockeyPuck.Local.png) |




## HockeyPuck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element HockeyPuck
include('fontawesome-5/Solid/HockeyPuck')

' renders the element
HockeyPuck('HockeyPuck', 'Hockey Puck', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element HockeyPuck
include('fontawesome-5/Solid/HockeyPuck')

' renders the element
HockeyPuck('HockeyPuck', 'Hockey Puck', 'an optional tech label')
@enduml
```

