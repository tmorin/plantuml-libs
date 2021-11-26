# CalendarDay


```text
fontawesome-5/Solid/CalendarDay
```

```text
include('fontawesome-5/Solid/CalendarDay')
```



| Illustration | CalendarDay |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/CalendarDay.png) | ![illustration for CalendarDay](../../fontawesome-5/Solid/CalendarDay.Local.png) |




## CalendarDay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CalendarDay
include('fontawesome-5/Solid/CalendarDay')

' renders the element
CalendarDay('CalendarDay', 'Calendar Day', 'an optional tech label')
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

' loads the Item which embeds the element CalendarDay
include('fontawesome-5/Solid/CalendarDay')

' renders the element
CalendarDay('CalendarDay', 'Calendar Day', 'an optional tech label')
@enduml
```

