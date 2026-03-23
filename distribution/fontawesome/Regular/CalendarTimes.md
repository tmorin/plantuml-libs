# CalendarTimes


```text
fontawesome/Regular/CalendarTimes
```

```text
include('fontawesome/Regular/CalendarTimes')
```



| Illustration | CalendarTimes |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/CalendarTimes.png) | ![illustration for CalendarTimes](../../fontawesome/Regular/CalendarTimes.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CalendarTimesXs>`
- `<$CalendarTimesSm>`
- `<$CalendarTimesMd>`
- `<$CalendarTimesLg>`





## CalendarTimes

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CalendarTimes
include('fontawesome/Regular/CalendarTimes')

' renders the element
CalendarTimes('CalendarTimes', 'Calendar Times', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element CalendarTimes
include('fontawesome/Regular/CalendarTimes')

' renders the element
CalendarTimes('CalendarTimes', 'Calendar Times', 'an optional tech label', 'an optional description')
@enduml
```

