# CalendarWeek


```text
fontawesome/Solid/CalendarWeek
```

```text
include('fontawesome/Solid/CalendarWeek')
```



| Illustration | CalendarWeek |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/CalendarWeek.png) | ![illustration for CalendarWeek](../../fontawesome/Solid/CalendarWeek.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CalendarWeekXs>`
- `<$CalendarWeekSm>`
- `<$CalendarWeekMd>`
- `<$CalendarWeekLg>`





## CalendarWeek

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CalendarWeek
include('fontawesome/Solid/CalendarWeek')

' renders the element
CalendarWeek('CalendarWeek', 'Calendar Week', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CalendarWeek
include('fontawesome/Solid/CalendarWeek')

' renders the element
CalendarWeek('CalendarWeek', 'Calendar Week', 'an optional tech label', 'an optional description')
@enduml
```

