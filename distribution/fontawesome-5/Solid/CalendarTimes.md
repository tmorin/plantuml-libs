# CalendarTimes


```text
fontawesome-5/Solid/CalendarTimes
```

```text
include('fontawesome-5/Solid/CalendarTimes')
```



| Illustration | CalendarTimes |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/CalendarTimes.png) | ![illustration for CalendarTimes](../../fontawesome-5/Solid/CalendarTimes.Local.png) |




## CalendarTimes

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CalendarTimes
include('fontawesome-5/Solid/CalendarTimes')

' renders the element
CalendarTimes('CalendarTimes', 'Calendar Times', 'an optional tech label')
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

' loads the Item which embeds the element CalendarTimes
include('fontawesome-5/Solid/CalendarTimes')

' renders the element
CalendarTimes('CalendarTimes', 'Calendar Times', 'an optional tech label')
@enduml
```

