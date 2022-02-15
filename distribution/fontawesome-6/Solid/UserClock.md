# UserClock


```text
fontawesome-6/Solid/UserClock
```

```text
include('fontawesome-6/Solid/UserClock')
```



| Illustration | UserClock |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/UserClock.png) | ![illustration for UserClock](../../fontawesome-6/Solid/UserClock.Local.png) |




## UserClock

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element UserClock
include('fontawesome-6/Solid/UserClock')

' renders the element
UserClock('UserClock', 'User Clock', 'an optional tech label')
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

' loads the Item which embeds the element UserClock
include('fontawesome-6/Solid/UserClock')

' renders the element
UserClock('UserClock', 'User Clock', 'an optional tech label')
@enduml
```

