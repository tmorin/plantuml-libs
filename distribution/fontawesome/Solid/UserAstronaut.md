# UserAstronaut


```text
fontawesome/Solid/UserAstronaut
```

```text
include('fontawesome/Solid/UserAstronaut')
```



| Illustration | UserAstronaut |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/UserAstronaut.png) | ![illustration for UserAstronaut](../../fontawesome/Solid/UserAstronaut.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UserAstronautXs>`
- `<$UserAstronautSm>`
- `<$UserAstronautMd>`
- `<$UserAstronautLg>`





## UserAstronaut

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element UserAstronaut
include('fontawesome/Solid/UserAstronaut')

' renders the element
UserAstronaut('UserAstronaut', 'User Astronaut', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element UserAstronaut
include('fontawesome/Solid/UserAstronaut')

' renders the element
UserAstronaut('UserAstronaut', 'User Astronaut', 'an optional tech label', 'an optional description')
@enduml
```

