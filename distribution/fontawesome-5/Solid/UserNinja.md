# UserNinja


```text
fontawesome-5/Solid/UserNinja
```

```text
include('fontawesome-5/Solid/UserNinja')
```



| Illustration | UserNinja |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/UserNinja.png) | ![illustration for UserNinja](../../fontawesome-5/Solid/UserNinja.Local.png) |




## UserNinja

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element UserNinja
include('fontawesome-5/Solid/UserNinja')

' renders the element
UserNinja('UserNinja', 'User Ninja', 'an optional tech label')
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

' loads the Item which embeds the element UserNinja
include('fontawesome-5/Solid/UserNinja')

' renders the element
UserNinja('UserNinja', 'User Ninja', 'an optional tech label')
@enduml
```

