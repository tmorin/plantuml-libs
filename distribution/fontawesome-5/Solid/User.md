# User


```text
fontawesome-5/Solid/User
```

```text
include('fontawesome-5/Solid/User')
```



| Illustration | User |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/User.png) | ![illustration for User](../../fontawesome-5/Solid/User.Local.png) |




## User

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element User
include('fontawesome-5/Solid/User')

' renders the element
User('User', 'User', 'an optional tech label')
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

' loads the Item which embeds the element User
include('fontawesome-5/Solid/User')

' renders the element
User('User', 'User', 'an optional tech label')
@enduml
```

