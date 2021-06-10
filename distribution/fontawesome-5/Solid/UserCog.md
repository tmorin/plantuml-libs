# UserCog


```text
fontawesome-5/Solid/UserCog
```

```text
include('fontawesome-5/Solid/UserCog')
```



| Illustration | UserCog |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/UserCog.png) | ![illustration for UserCog](../../fontawesome-5/Solid/UserCog.Local.png) |




## UserCog

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element UserCog
include('fontawesome-5/Solid/UserCog')

' renders the element
UserCog('UserCog', 'User Cog', 'an optional tech label')
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

' loads the Item which embeds the element UserCog
include('fontawesome-5/Solid/UserCog')

' renders the element
UserCog('UserCog', 'User Cog', 'an optional tech label')
@enduml
```

