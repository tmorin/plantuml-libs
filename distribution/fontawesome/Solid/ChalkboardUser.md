# ChalkboardUser


```text
fontawesome/Solid/ChalkboardUser
```

```text
include('fontawesome/Solid/ChalkboardUser')
```



| Illustration | ChalkboardUser |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/ChalkboardUser.png) | ![illustration for ChalkboardUser](../../fontawesome/Solid/ChalkboardUser.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ChalkboardUserXs>`
- `<$ChalkboardUserSm>`
- `<$ChalkboardUserMd>`
- `<$ChalkboardUserLg>`





## ChalkboardUser

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element ChalkboardUser
include('fontawesome/Solid/ChalkboardUser')

' renders the element
ChalkboardUser('ChalkboardUser', 'Chalkboard User', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element ChalkboardUser
include('fontawesome/Solid/ChalkboardUser')

' renders the element
ChalkboardUser('ChalkboardUser', 'Chalkboard User', 'an optional tech label', 'an optional description')
@enduml
```

