# UsersRectangle


```text
fontawesome/Solid/UsersRectangle
```

```text
include('fontawesome/Solid/UsersRectangle')
```



| Illustration | UsersRectangle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/UsersRectangle.png) | ![illustration for UsersRectangle](../../fontawesome/Solid/UsersRectangle.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UsersRectangleXs>`
- `<$UsersRectangleSm>`
- `<$UsersRectangleMd>`
- `<$UsersRectangleLg>`





## UsersRectangle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element UsersRectangle
include('fontawesome/Solid/UsersRectangle')

' renders the element
UsersRectangle('UsersRectangle', 'Users Rectangle', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element UsersRectangle
include('fontawesome/Solid/UsersRectangle')

' renders the element
UsersRectangle('UsersRectangle', 'Users Rectangle', 'an optional tech label', 'an optional description')
@enduml
```

