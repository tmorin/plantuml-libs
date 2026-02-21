# HouseChimneyUser


```text
fontawesome/Solid/HouseChimneyUser
```

```text
include('fontawesome/Solid/HouseChimneyUser')
```



| Illustration | HouseChimneyUser |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HouseChimneyUser.png) | ![illustration for HouseChimneyUser](../../fontawesome/Solid/HouseChimneyUser.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HouseChimneyUserXs>`
- `<$HouseChimneyUserSm>`
- `<$HouseChimneyUserMd>`
- `<$HouseChimneyUserLg>`





## HouseChimneyUser

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HouseChimneyUser
include('fontawesome/Solid/HouseChimneyUser')

' renders the element
HouseChimneyUser('HouseChimneyUser', 'House Chimney User', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HouseChimneyUser
include('fontawesome/Solid/HouseChimneyUser')

' renders the element
HouseChimneyUser('HouseChimneyUser', 'House Chimney User', 'an optional tech label', 'an optional description')
@enduml
```

