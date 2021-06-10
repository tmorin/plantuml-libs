# UserPlus


```text
fontawesome-5/Solid/UserPlus
```

```text
include('fontawesome-5/Solid/UserPlus')
```



| Illustration | UserPlus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/UserPlus.png) | ![illustration for UserPlus](../../fontawesome-5/Solid/UserPlus.Local.png) |




## UserPlus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element UserPlus
include('fontawesome-5/Solid/UserPlus')

' renders the element
UserPlus('UserPlus', 'User Plus', 'an optional tech label')
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

' loads the Item which embeds the element UserPlus
include('fontawesome-5/Solid/UserPlus')

' renders the element
UserPlus('UserPlus', 'User Plus', 'an optional tech label')
@enduml
```

