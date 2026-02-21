# HouseUser


```text
fontawesome/Solid/HouseUser
```

```text
include('fontawesome/Solid/HouseUser')
```



| Illustration | HouseUser |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/HouseUser.png) | ![illustration for HouseUser](../../fontawesome/Solid/HouseUser.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HouseUserXs>`
- `<$HouseUserSm>`
- `<$HouseUserMd>`
- `<$HouseUserLg>`





## HouseUser

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element HouseUser
include('fontawesome/Solid/HouseUser')

' renders the element
HouseUser('HouseUser', 'House User', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element HouseUser
include('fontawesome/Solid/HouseUser')

' renders the element
HouseUser('HouseUser', 'House User', 'an optional tech label', 'an optional description')
@enduml
```

