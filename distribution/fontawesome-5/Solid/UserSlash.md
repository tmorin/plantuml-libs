# UserSlash


```text
fontawesome-5/Solid/UserSlash
```

```text
include('fontawesome-5/Solid/UserSlash')
```



| Illustration | UserSlash |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/UserSlash.png) | ![illustration for UserSlash](../../fontawesome-5/Solid/UserSlash.Local.png) |




## UserSlash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element UserSlash
include('fontawesome-5/Solid/UserSlash')

' renders the element
UserSlash('UserSlash', 'User Slash', 'an optional tech label')
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

' loads the Item which embeds the element UserSlash
include('fontawesome-5/Solid/UserSlash')

' renders the element
UserSlash('UserSlash', 'User Slash', 'an optional tech label')
@enduml
```

