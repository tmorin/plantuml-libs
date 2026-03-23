# UserFriends


```text
fontawesome/Solid/UserFriends
```

```text
include('fontawesome/Solid/UserFriends')
```



| Illustration | UserFriends |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/UserFriends.png) | ![illustration for UserFriends](../../fontawesome/Solid/UserFriends.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UserFriendsXs>`
- `<$UserFriendsSm>`
- `<$UserFriendsMd>`
- `<$UserFriendsLg>`





## UserFriends

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element UserFriends
include('fontawesome/Solid/UserFriends')

' renders the element
UserFriends('UserFriends', 'User Friends', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element UserFriends
include('fontawesome/Solid/UserFriends')

' renders the element
UserFriends('UserFriends', 'User Friends', 'an optional tech label', 'an optional description')
@enduml
```

