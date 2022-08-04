# PeopleCarryBox


```text
fontawesome-6/Solid/PeopleCarryBox
```

```text
include('fontawesome-6/Solid/PeopleCarryBox')
```



| Illustration | PeopleCarryBox |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PeopleCarryBox.png) | ![illustration for PeopleCarryBox](../../fontawesome-6/Solid/PeopleCarryBox.Local.png) |




## PeopleCarryBox

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PeopleCarryBox
include('fontawesome-6/Solid/PeopleCarryBox')

' renders the element
PeopleCarryBox('PeopleCarryBox', 'People Carry Box', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PeopleCarryBox
include('fontawesome-6/Solid/PeopleCarryBox')

' renders the element
PeopleCarryBox('PeopleCarryBox', 'People Carry Box', 'an optional tech label', 'an optional description')
@enduml
```

