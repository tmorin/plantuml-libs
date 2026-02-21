# Calendar


```text
fontawesome/Regular/Calendar
```

```text
include('fontawesome/Regular/Calendar')
```



| Illustration | Calendar |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/Calendar.png) | ![illustration for Calendar](../../fontawesome/Regular/Calendar.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CalendarXs>`
- `<$CalendarSm>`
- `<$CalendarMd>`
- `<$CalendarLg>`





## Calendar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element Calendar
include('fontawesome/Regular/Calendar')

' renders the element
Calendar('Calendar', 'Calendar', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Calendar
include('fontawesome/Regular/Calendar')

' renders the element
Calendar('Calendar', 'Calendar', 'an optional tech label', 'an optional description')
@enduml
```

