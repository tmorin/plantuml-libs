# UserTimes


```text
fontawesome-5/Solid/UserTimes
```

```text
include('fontawesome-5/Solid/UserTimes')
```



| Illustration | UserTimes |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/UserTimes.png) | ![illustration for UserTimes](../../fontawesome-5/Solid/UserTimes.Local.png) |




## UserTimes

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element UserTimes
include('fontawesome-5/Solid/UserTimes')

' renders the element
UserTimes('UserTimes', 'User Times', 'an optional tech label')
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

' loads the Item which embeds the element UserTimes
include('fontawesome-5/Solid/UserTimes')

' renders the element
UserTimes('UserTimes', 'User Times', 'an optional tech label')
@enduml
```

