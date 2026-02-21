# HockeyPuck


```text
fontawesome/Solid/HockeyPuck
```

```text
include('fontawesome/Solid/HockeyPuck')
```



| Illustration | HockeyPuck |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HockeyPuck.png) | ![illustration for HockeyPuck](../../fontawesome/Solid/HockeyPuck.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HockeyPuckXs>`
- `<$HockeyPuckSm>`
- `<$HockeyPuckMd>`
- `<$HockeyPuckLg>`





## HockeyPuck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HockeyPuck
include('fontawesome/Solid/HockeyPuck')

' renders the element
HockeyPuck('HockeyPuck', 'Hockey Puck', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element HockeyPuck
include('fontawesome/Solid/HockeyPuck')

' renders the element
HockeyPuck('HockeyPuck', 'Hockey Puck', 'an optional tech label', 'an optional description')
@enduml
```

