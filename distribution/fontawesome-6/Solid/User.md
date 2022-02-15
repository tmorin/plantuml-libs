# User


```text
fontawesome-6/Solid/User
```

```text
include('fontawesome-6/Solid/User')
```



| Illustration | User |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/User.png) | ![illustration for User](../../fontawesome-6/Solid/User.Local.png) |




## User

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element User
include('fontawesome-6/Solid/User')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element User
include('fontawesome-6/Solid/User')

' renders the element
User('User', 'User', 'an optional tech label')
@enduml
```

