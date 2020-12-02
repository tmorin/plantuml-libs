# Users Cog

```text
fontawesome-5.15/Solid/UsersCog
```

```text
include('fontawesome-5.15/Solid/UsersCog')
```

|icon|element|
|---|---|
|![](UsersCog.png)|![](UsersCog.element.png)|



## element
### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/dist"
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the fontawesome-5.15 bootstrap
include('fontawesome-5.15/bootstrap')
' loads the UsersCog element
include('fontawesome-5.15/Solid/UsersCog')
UsersCog('users_cog', 'Users Cog', 'an optional tech field')
@enduml
```
### Load locally
```plantuml
@startuml
' configures the library
!global $INCLUSION_MODE="local"
!global $LIB_BASE_LOCATION="../.."
' loads the library
!include $LIB_BASE_LOCATION/bootstrap.puml
' loads the fontawesome-5.15 bootstrap
include('fontawesome-5.15/bootstrap')
' loads the UsersCog element
include('fontawesome-5.15/Solid/UsersCog')
UsersCog('users_cog', 'Users Cog', 'an optional tech field')
@enduml
```

