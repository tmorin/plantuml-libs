# UsersCog


```text
fontawesome-5/Solid/UsersCog
```

```text
include('fontawesome-5/Solid/UsersCog')
```



| Illustration | UsersCog |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/UsersCog.png) | ![illustration for UsersCog](../../fontawesome-5/Solid/UsersCog.Local.png) |




## UsersCog

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element UsersCog
include('fontawesome-5/Solid/UsersCog')

' renders the element
UsersCog('UsersCog', 'Users Cog', 'an optional tech label')
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

' loads the Item which embeds the element UsersCog
include('fontawesome-5/Solid/UsersCog')

' renders the element
UsersCog('UsersCog', 'Users Cog', 'an optional tech label')
@enduml
```

