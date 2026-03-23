# SpaceShuttle


```text
fontawesome/Solid/SpaceShuttle
```

```text
include('fontawesome/Solid/SpaceShuttle')
```



| Illustration | SpaceShuttle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/SpaceShuttle.png) | ![illustration for SpaceShuttle](../../fontawesome/Solid/SpaceShuttle.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SpaceShuttleXs>`
- `<$SpaceShuttleSm>`
- `<$SpaceShuttleMd>`
- `<$SpaceShuttleLg>`





## SpaceShuttle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element SpaceShuttle
include('fontawesome/Solid/SpaceShuttle')

' renders the element
SpaceShuttle('SpaceShuttle', 'Space Shuttle', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element SpaceShuttle
include('fontawesome/Solid/SpaceShuttle')

' renders the element
SpaceShuttle('SpaceShuttle', 'Space Shuttle', 'an optional tech label', 'an optional description')
@enduml
```

