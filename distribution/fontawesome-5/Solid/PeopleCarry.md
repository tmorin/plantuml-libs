# PeopleCarry


```text
fontawesome-5/Solid/PeopleCarry
```

```text
include('fontawesome-5/Solid/PeopleCarry')
```



| Illustration | PeopleCarry |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/PeopleCarry.png) | ![illustration for PeopleCarry](../../fontawesome-5/Solid/PeopleCarry.Local.png) |




## PeopleCarry

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element PeopleCarry
include('fontawesome-5/Solid/PeopleCarry')

' renders the element
PeopleCarry('PeopleCarry', 'People Carry', 'an optional tech label')
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

' loads the Item which embeds the element PeopleCarry
include('fontawesome-5/Solid/PeopleCarry')

' renders the element
PeopleCarry('PeopleCarry', 'People Carry', 'an optional tech label')
@enduml
```

