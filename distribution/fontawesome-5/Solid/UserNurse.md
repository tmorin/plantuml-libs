# UserNurse


```text
fontawesome-5/Solid/UserNurse
```

```text
include('fontawesome-5/Solid/UserNurse')
```



| Illustration | UserNurse |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/UserNurse.png) | ![illustration for UserNurse](../../fontawesome-5/Solid/UserNurse.Local.png) |




## UserNurse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element UserNurse
include('fontawesome-5/Solid/UserNurse')

' renders the element
UserNurse('UserNurse', 'User Nurse', 'an optional tech label')
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

' loads the Item which embeds the element UserNurse
include('fontawesome-5/Solid/UserNurse')

' renders the element
UserNurse('UserNurse', 'User Nurse', 'an optional tech label')
@enduml
```

