# BuildingUser


```text
fontawesome-6/Solid/BuildingUser
```

```text
include('fontawesome-6/Solid/BuildingUser')
```



| Illustration | BuildingUser |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/BuildingUser.png) | ![illustration for BuildingUser](../../fontawesome-6/Solid/BuildingUser.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BuildingUser
include('fontawesome-6/Solid/BuildingUser')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element BuildingUser
include('fontawesome-6/Solid/BuildingUser')

' renders the element
BuildingUser('BuildingUser', 'Building User', 'an optional tech label', 'an optional description')
@enduml
```

