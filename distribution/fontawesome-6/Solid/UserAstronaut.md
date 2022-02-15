# UserAstronaut


```text
fontawesome-6/Solid/UserAstronaut
```

```text
include('fontawesome-6/Solid/UserAstronaut')
```



| Illustration | UserAstronaut |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/UserAstronaut.png) | ![illustration for UserAstronaut](../../fontawesome-6/Solid/UserAstronaut.Local.png) |




## UserAstronaut

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element UserAstronaut
include('fontawesome-6/Solid/UserAstronaut')

' renders the element
UserAstronaut('UserAstronaut', 'User Astronaut', 'an optional tech label')
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

' loads the Item which embeds the element UserAstronaut
include('fontawesome-6/Solid/UserAstronaut')

' renders the element
UserAstronaut('UserAstronaut', 'User Astronaut', 'an optional tech label')
@enduml
```

