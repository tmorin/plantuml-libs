# Users


```text
fontawesome/Solid/Users
```

```text
include('fontawesome/Solid/Users')
```



| Illustration | Users |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/Users.png) | ![illustration for Users](../../fontawesome/Solid/Users.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UsersXs>`
- `<$UsersSm>`
- `<$UsersMd>`
- `<$UsersLg>`





## Users

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Users
include('fontawesome/Solid/Users')

' renders the element
Users('Users', 'Users', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Users
include('fontawesome/Solid/Users')

' renders the element
Users('Users', 'Users', 'an optional tech label', 'an optional description')
@enduml
```

