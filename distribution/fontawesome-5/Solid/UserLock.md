# UserLock


```text
fontawesome-5/Solid/UserLock
```

```text
include('fontawesome-5/Solid/UserLock')
```



| Illustration | UserLock |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/UserLock.png) | ![illustration for UserLock](../../fontawesome-5/Solid/UserLock.Local.png) |




## UserLock

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element UserLock
include('fontawesome-5/Solid/UserLock')

' renders the element
UserLock('UserLock', 'User Lock', 'an optional tech label')
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

' loads the Item which embeds the element UserLock
include('fontawesome-5/Solid/UserLock')

' renders the element
UserLock('UserLock', 'User Lock', 'an optional tech label')
@enduml
```

