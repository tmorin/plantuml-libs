# PersonCane


```text
fontawesome-6/Solid/PersonCane
```

```text
include('fontawesome-6/Solid/PersonCane')
```



| Illustration | PersonCane |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PersonCane.png) | ![illustration for PersonCane](../../fontawesome-6/Solid/PersonCane.Local.png) |




## PersonCane

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PersonCane
include('fontawesome-6/Solid/PersonCane')

' renders the element
PersonCane('PersonCane', 'Person Cane', 'an optional tech label')
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

' loads the Item which embeds the element PersonCane
include('fontawesome-6/Solid/PersonCane')

' renders the element
PersonCane('PersonCane', 'Person Cane', 'an optional tech label')
@enduml
```

