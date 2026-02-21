# UsersSlash


```text
fontawesome/Solid/UsersSlash
```

```text
include('fontawesome/Solid/UsersSlash')
```



| Illustration | UsersSlash |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/UsersSlash.png) | ![illustration for UsersSlash](../../fontawesome/Solid/UsersSlash.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$UsersSlashXs>`
- `<$UsersSlashSm>`
- `<$UsersSlashMd>`
- `<$UsersSlashLg>`





## UsersSlash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element UsersSlash
include('fontawesome/Solid/UsersSlash')

' renders the element
UsersSlash('UsersSlash', 'Users Slash', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element UsersSlash
include('fontawesome/Solid/UsersSlash')

' renders the element
UsersSlash('UsersSlash', 'Users Slash', 'an optional tech label', 'an optional description')
@enduml
```

