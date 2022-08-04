# PersonWalkingLuggage


```text
fontawesome-6/Solid/PersonWalkingLuggage
```

```text
include('fontawesome-6/Solid/PersonWalkingLuggage')
```



| Illustration | PersonWalkingLuggage |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/PersonWalkingLuggage.png) | ![illustration for PersonWalkingLuggage](../../fontawesome-6/Solid/PersonWalkingLuggage.Local.png) |




## PersonWalkingLuggage

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element PersonWalkingLuggage
include('fontawesome-6/Solid/PersonWalkingLuggage')

' renders the element
PersonWalkingLuggage('PersonWalkingLuggage', 'Person Walking Luggage', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element PersonWalkingLuggage
include('fontawesome-6/Solid/PersonWalkingLuggage')

' renders the element
PersonWalkingLuggage('PersonWalkingLuggage', 'Person Walking Luggage', 'an optional tech label', 'an optional description')
@enduml
```

