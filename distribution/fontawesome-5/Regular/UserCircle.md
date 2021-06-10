# UserCircle


```text
fontawesome-5/Regular/UserCircle
```

```text
include('fontawesome-5/Regular/UserCircle')
```



| Illustration | UserCircle |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/UserCircle.png) | ![illustration for UserCircle](../../fontawesome-5/Regular/UserCircle.Local.png) |




## UserCircle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element UserCircle
include('fontawesome-5/Regular/UserCircle')

' renders the element
UserCircle('UserCircle', 'User Circle', 'an optional tech label')
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

' loads the Item which embeds the element UserCircle
include('fontawesome-5/Regular/UserCircle')

' renders the element
UserCircle('UserCircle', 'User Circle', 'an optional tech label')
@enduml
```

