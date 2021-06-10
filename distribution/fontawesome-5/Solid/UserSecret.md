# UserSecret


```text
fontawesome-5/Solid/UserSecret
```

```text
include('fontawesome-5/Solid/UserSecret')
```



| Illustration | UserSecret |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/UserSecret.png) | ![illustration for UserSecret](../../fontawesome-5/Solid/UserSecret.Local.png) |




## UserSecret

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element UserSecret
include('fontawesome-5/Solid/UserSecret')

' renders the element
UserSecret('UserSecret', 'User Secret', 'an optional tech label')
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

' loads the Item which embeds the element UserSecret
include('fontawesome-5/Solid/UserSecret')

' renders the element
UserSecret('UserSecret', 'User Secret', 'an optional tech label')
@enduml
```

