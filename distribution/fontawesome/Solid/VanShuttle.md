# VanShuttle


```text
fontawesome/Solid/VanShuttle
```

```text
include('fontawesome/Solid/VanShuttle')
```



| Illustration | VanShuttle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/VanShuttle.png) | ![illustration for VanShuttle](../../fontawesome/Solid/VanShuttle.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$VanShuttleXs>`
- `<$VanShuttleSm>`
- `<$VanShuttleMd>`
- `<$VanShuttleLg>`





## VanShuttle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element VanShuttle
include('fontawesome/Solid/VanShuttle')

' renders the element
VanShuttle('VanShuttle', 'Van Shuttle', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element VanShuttle
include('fontawesome/Solid/VanShuttle')

' renders the element
VanShuttle('VanShuttle', 'Van Shuttle', 'an optional tech label', 'an optional description')
@enduml
```

