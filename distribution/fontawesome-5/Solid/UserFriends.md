# UserFriends


```text
fontawesome-5/Solid/UserFriends
```

```text
include('fontawesome-5/Solid/UserFriends')
```



| Illustration | UserFriends |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/UserFriends.png) | ![illustration for UserFriends](../../fontawesome-5/Solid/UserFriends.Local.png) |




## UserFriends

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element UserFriends
include('fontawesome-5/Solid/UserFriends')

' renders the element
UserFriends('UserFriends', 'User Friends', 'an optional tech label')
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

' loads the Item which embeds the element UserFriends
include('fontawesome-5/Solid/UserFriends')

' renders the element
UserFriends('UserFriends', 'User Friends', 'an optional tech label')
@enduml
```

