# CircleUser


```text
fontawesome/Solid/CircleUser
```

```text
include('fontawesome/Solid/CircleUser')
```



| Illustration | CircleUser |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/CircleUser.png) | ![illustration for CircleUser](../../fontawesome/Solid/CircleUser.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CircleUserXs>`
- `<$CircleUserSm>`
- `<$CircleUserMd>`
- `<$CircleUserLg>`





## CircleUser

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CircleUser
include('fontawesome/Solid/CircleUser')

' renders the element
CircleUser('CircleUser', 'Circle User', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CircleUser
include('fontawesome/Solid/CircleUser')

' renders the element
CircleUser('CircleUser', 'Circle User', 'an optional tech label', 'an optional description')
@enduml
```

