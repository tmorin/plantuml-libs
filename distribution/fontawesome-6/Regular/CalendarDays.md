# CalendarDays


```text
fontawesome-6/Regular/CalendarDays
```

```text
include('fontawesome-6/Regular/CalendarDays')
```



| Illustration | CalendarDays |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/CalendarDays.png) | ![illustration for CalendarDays](../../fontawesome-6/Regular/CalendarDays.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CalendarDaysXs>`
- `<$CalendarDaysSm>`
- `<$CalendarDaysMd>`
- `<$CalendarDaysLg>`





## CalendarDays

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CalendarDays
include('fontawesome-6/Regular/CalendarDays')

' renders the element
CalendarDays('CalendarDays', 'Calendar Days', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CalendarDays
include('fontawesome-6/Regular/CalendarDays')

' renders the element
CalendarDays('CalendarDays', 'Calendar Days', 'an optional tech label', 'an optional description')
@enduml
```

