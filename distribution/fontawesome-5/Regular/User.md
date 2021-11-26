# User


```text
fontawesome-5/Regular/User
```

```text
include('fontawesome-5/Regular/User')
```



| Illustration | User |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/User.png) | ![illustration for User](../../fontawesome-5/Regular/User.Local.png) |




## User

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element User
include('fontawesome-5/Regular/User')

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
include('fontawesome-5/Regular/User')

' renders the element
User('User', 'User', 'an optional tech label')
@enduml
```

