# CalendarWeek


```text
fontawesome-5/Solid/CalendarWeek
```

```text
include('fontawesome-5/Solid/CalendarWeek')
```



| Illustration | CalendarWeek |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/CalendarWeek.png) | ![illustration for CalendarWeek](../../fontawesome-5/Solid/CalendarWeek.Local.png) |




## CalendarWeek

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CalendarWeek
include('fontawesome-5/Solid/CalendarWeek')

' renders the element
CalendarWeek('CalendarWeek', 'Calendar Week', 'an optional tech label')
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

' loads the Item which embeds the element CalendarWeek
include('fontawesome-5/Solid/CalendarWeek')

' renders the element
CalendarWeek('CalendarWeek', 'Calendar Week', 'an optional tech label')
@enduml
```

