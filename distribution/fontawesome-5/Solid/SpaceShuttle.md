# SpaceShuttle


```text
fontawesome-5/Solid/SpaceShuttle
```

```text
include('fontawesome-5/Solid/SpaceShuttle')
```



| Illustration | SpaceShuttle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/SpaceShuttle.png) | ![illustration for SpaceShuttle](../../fontawesome-5/Solid/SpaceShuttle.Local.png) |




## SpaceShuttle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element SpaceShuttle
include('fontawesome-5/Solid/SpaceShuttle')

' renders the element
SpaceShuttle('SpaceShuttle', 'Space Shuttle', 'an optional tech label')
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

' loads the Item which embeds the element SpaceShuttle
include('fontawesome-5/Solid/SpaceShuttle')

' renders the element
SpaceShuttle('SpaceShuttle', 'Space Shuttle', 'an optional tech label')
@enduml
```

