# UserLock


```text
fontawesome-6/Solid/UserLock
```

```text
include('fontawesome-6/Solid/UserLock')
```



| Illustration | UserLock |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/UserLock.png) | ![illustration for UserLock](../../fontawesome-6/Solid/UserLock.Local.png) |




## UserLock

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element UserLock
include('fontawesome-6/Solid/UserLock')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element UserLock
include('fontawesome-6/Solid/UserLock')

' renders the element
UserLock('UserLock', 'User Lock', 'an optional tech label')
@enduml
```

