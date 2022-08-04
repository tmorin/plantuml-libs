# UsersSlash


```text
fontawesome-6/Solid/UsersSlash
```

```text
include('fontawesome-6/Solid/UsersSlash')
```



| Illustration | UsersSlash |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/UsersSlash.png) | ![illustration for UsersSlash](../../fontawesome-6/Solid/UsersSlash.Local.png) |




## UsersSlash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element UsersSlash
include('fontawesome-6/Solid/UsersSlash')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element UsersSlash
include('fontawesome-6/Solid/UsersSlash')

' renders the element
UsersSlash('UsersSlash', 'Users Slash', 'an optional tech label', 'an optional description')
@enduml
```

