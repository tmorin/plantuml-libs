# BuildingUser


```text
fontawesome/Solid/BuildingUser
```

```text
include('fontawesome/Solid/BuildingUser')
```



| Illustration | BuildingUser |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BuildingUser.png) | ![illustration for BuildingUser](../../fontawesome/Solid/BuildingUser.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BuildingUserXs>`
- `<$BuildingUserSm>`
- `<$BuildingUserMd>`
- `<$BuildingUserLg>`





## BuildingUser

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BuildingUser
include('fontawesome/Solid/BuildingUser')

' renders the element
BuildingUser('BuildingUser', 'Building User', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BuildingUser
include('fontawesome/Solid/BuildingUser')

' renders the element
BuildingUser('BuildingUser', 'Building User', 'an optional tech label', 'an optional description')
@enduml
```

