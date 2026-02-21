# Robot


```text
fontawesome/Solid/Robot
```

```text
include('fontawesome/Solid/Robot')
```



| Illustration | Robot |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Robot.png) | ![illustration for Robot](../../fontawesome/Solid/Robot.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RobotXs>`
- `<$RobotSm>`
- `<$RobotMd>`
- `<$RobotLg>`





## Robot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Robot
include('fontawesome/Solid/Robot')

' renders the element
Robot('Robot', 'Robot', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Robot
include('fontawesome/Solid/Robot')

' renders the element
Robot('Robot', 'Robot', 'an optional tech label', 'an optional description')
@enduml
```

