# UsersRays


```text
fontawesome/Solid/UsersRays
```

```text
include('fontawesome/Solid/UsersRays')
```



| Illustration | UsersRays |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/UsersRays.png) | ![illustration for UsersRays](../../fontawesome/Solid/UsersRays.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UsersRaysXs>`
- `<$UsersRaysSm>`
- `<$UsersRaysMd>`
- `<$UsersRaysLg>`





## UsersRays

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element UsersRays
include('fontawesome/Solid/UsersRays')

' renders the element
UsersRays('UsersRays', 'Users Rays', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element UsersRays
include('fontawesome/Solid/UsersRays')

' renders the element
UsersRays('UsersRays', 'Users Rays', 'an optional tech label', 'an optional description')
@enduml
```

