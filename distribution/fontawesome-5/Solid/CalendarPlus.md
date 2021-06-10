# CalendarPlus


```text
fontawesome-5/Solid/CalendarPlus
```

```text
include('fontawesome-5/Solid/CalendarPlus')
```



| Illustration | CalendarPlus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/CalendarPlus.png) | ![illustration for CalendarPlus](../../fontawesome-5/Solid/CalendarPlus.Local.png) |




## CalendarPlus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CalendarPlus
include('fontawesome-5/Solid/CalendarPlus')

' renders the element
CalendarPlus('CalendarPlus', 'Calendar Plus', 'an optional tech label')
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

' loads the Item which embeds the element CalendarPlus
include('fontawesome-5/Solid/CalendarPlus')

' renders the element
CalendarPlus('CalendarPlus', 'Calendar Plus', 'an optional tech label')
@enduml
```

