# UserInjured


```text
fontawesome-6/Solid/UserInjured
```

```text
include('fontawesome-6/Solid/UserInjured')
```



| Illustration | UserInjured |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/UserInjured.png) | ![illustration for UserInjured](../../fontawesome-6/Solid/UserInjured.Local.png) |




## UserInjured

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element UserInjured
include('fontawesome-6/Solid/UserInjured')

' renders the element
UserInjured('UserInjured', 'User Injured', 'an optional tech label')
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

' loads the Item which embeds the element UserInjured
include('fontawesome-6/Solid/UserInjured')

' renders the element
UserInjured('UserInjured', 'User Injured', 'an optional tech label')
@enduml
```

