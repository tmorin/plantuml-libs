# UserNurse


```text
fontawesome-6/Solid/UserNurse
```

```text
include('fontawesome-6/Solid/UserNurse')
```



| Illustration | UserNurse |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/UserNurse.png) | ![illustration for UserNurse](../../fontawesome-6/Solid/UserNurse.Local.png) |




## UserNurse

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element UserNurse
include('fontawesome-6/Solid/UserNurse')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element UserNurse
include('fontawesome-6/Solid/UserNurse')

' renders the element
UserNurse('UserNurse', 'User Nurse', 'an optional tech label')
@enduml
```

