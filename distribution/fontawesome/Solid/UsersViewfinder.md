# UsersViewfinder


```text
fontawesome/Solid/UsersViewfinder
```

```text
include('fontawesome/Solid/UsersViewfinder')
```



| Illustration | UsersViewfinder |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/UsersViewfinder.png) | ![illustration for UsersViewfinder](../../fontawesome/Solid/UsersViewfinder.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UsersViewfinderXs>`
- `<$UsersViewfinderSm>`
- `<$UsersViewfinderMd>`
- `<$UsersViewfinderLg>`





## UsersViewfinder

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element UsersViewfinder
include('fontawesome/Solid/UsersViewfinder')

' renders the element
UsersViewfinder('UsersViewfinder', 'Users Viewfinder', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element UsersViewfinder
include('fontawesome/Solid/UsersViewfinder')

' renders the element
UsersViewfinder('UsersViewfinder', 'Users Viewfinder', 'an optional tech label', 'an optional description')
@enduml
```

