# PeopleRobbery


```text
fontawesome-6/Solid/PeopleRobbery
```

```text
include('fontawesome-6/Solid/PeopleRobbery')
```



| Illustration | PeopleRobbery |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PeopleRobbery.png) | ![illustration for PeopleRobbery](../../fontawesome-6/Solid/PeopleRobbery.Local.png) |




## PeopleRobbery

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PeopleRobbery
include('fontawesome-6/Solid/PeopleRobbery')

' renders the element
PeopleRobbery('PeopleRobbery', 'People Robbery', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PeopleRobbery
include('fontawesome-6/Solid/PeopleRobbery')

' renders the element
PeopleRobbery('PeopleRobbery', 'People Robbery', 'an optional tech label', 'an optional description')
@enduml
```

