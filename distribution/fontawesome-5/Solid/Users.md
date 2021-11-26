# Users


```text
fontawesome-5/Solid/Users
```

```text
include('fontawesome-5/Solid/Users')
```



| Illustration | Users |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Users.png) | ![illustration for Users](../../fontawesome-5/Solid/Users.Local.png) |




## Users

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Users
include('fontawesome-5/Solid/Users')

' renders the element
Users('Users', 'Users', 'an optional tech label')
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

' loads the Item which embeds the element Users
include('fontawesome-5/Solid/Users')

' renders the element
Users('Users', 'Users', 'an optional tech label')
@enduml
```

