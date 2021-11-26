# UsersSlash


```text
fontawesome-5/Solid/UsersSlash
```

```text
include('fontawesome-5/Solid/UsersSlash')
```



| Illustration | UsersSlash |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/UsersSlash.png) | ![illustration for UsersSlash](../../fontawesome-5/Solid/UsersSlash.Local.png) |




## UsersSlash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element UsersSlash
include('fontawesome-5/Solid/UsersSlash')

' renders the element
UsersSlash('UsersSlash', 'Users Slash', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element UsersSlash
include('fontawesome-5/Solid/UsersSlash')

' renders the element
UsersSlash('UsersSlash', 'Users Slash', 'an optional tech label')
@enduml
```

