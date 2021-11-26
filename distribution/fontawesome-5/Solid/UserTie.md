# UserTie


```text
fontawesome-5/Solid/UserTie
```

```text
include('fontawesome-5/Solid/UserTie')
```



| Illustration | UserTie |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/UserTie.png) | ![illustration for UserTie](../../fontawesome-5/Solid/UserTie.Local.png) |




## UserTie

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element UserTie
include('fontawesome-5/Solid/UserTie')

' renders the element
UserTie('UserTie', 'User Tie', 'an optional tech label')
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

' loads the Item which embeds the element UserTie
include('fontawesome-5/Solid/UserTie')

' renders the element
UserTie('UserTie', 'User Tie', 'an optional tech label')
@enduml
```

