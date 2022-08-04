# UserLargeSlash


```text
fontawesome-6/Solid/UserLargeSlash
```

```text
include('fontawesome-6/Solid/UserLargeSlash')
```



| Illustration | UserLargeSlash |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/UserLargeSlash.png) | ![illustration for UserLargeSlash](../../fontawesome-6/Solid/UserLargeSlash.Local.png) |




## UserLargeSlash

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element UserLargeSlash
include('fontawesome-6/Solid/UserLargeSlash')

' renders the element
UserLargeSlash('UserLargeSlash', 'User Large Slash', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element UserLargeSlash
include('fontawesome-6/Solid/UserLargeSlash')

' renders the element
UserLargeSlash('UserLargeSlash', 'User Large Slash', 'an optional tech label', 'an optional description')
@enduml
```

