# CalendarXmark


```text
fontawesome-6/Solid/CalendarXmark
```

```text
include('fontawesome-6/Solid/CalendarXmark')
```



| Illustration | CalendarXmark |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/CalendarXmark.png) | ![illustration for CalendarXmark](../../fontawesome-6/Solid/CalendarXmark.Local.png) |




## CalendarXmark

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CalendarXmark
include('fontawesome-6/Solid/CalendarXmark')

' renders the element
CalendarXmark('CalendarXmark', 'Calendar Xmark', 'an optional tech label')
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

' loads the Item which embeds the element CalendarXmark
include('fontawesome-6/Solid/CalendarXmark')

' renders the element
CalendarXmark('CalendarXmark', 'Calendar Xmark', 'an optional tech label')
@enduml
```

