# Robot


```text
fontawesome-5/Solid/Robot
```

```text
include('fontawesome-5/Solid/Robot')
```



| Illustration | Robot |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Robot.png) | ![illustration for Robot](../../fontawesome-5/Solid/Robot.Local.png) |




## Robot

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Robot
include('fontawesome-5/Solid/Robot')

' renders the element
Robot('Robot', 'Robot', 'an optional tech label')
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

' loads the Item which embeds the element Robot
include('fontawesome-5/Solid/Robot')

' renders the element
Robot('Robot', 'Robot', 'an optional tech label')
@enduml
```

