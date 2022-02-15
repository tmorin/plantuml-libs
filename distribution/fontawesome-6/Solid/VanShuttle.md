# VanShuttle


```text
fontawesome-6/Solid/VanShuttle
```

```text
include('fontawesome-6/Solid/VanShuttle')
```



| Illustration | VanShuttle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/VanShuttle.png) | ![illustration for VanShuttle](../../fontawesome-6/Solid/VanShuttle.Local.png) |




## VanShuttle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element VanShuttle
include('fontawesome-6/Solid/VanShuttle')

' renders the element
VanShuttle('VanShuttle', 'Van Shuttle', 'an optional tech label')
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

' loads the Item which embeds the element VanShuttle
include('fontawesome-6/Solid/VanShuttle')

' renders the element
VanShuttle('VanShuttle', 'Van Shuttle', 'an optional tech label')
@enduml
```

