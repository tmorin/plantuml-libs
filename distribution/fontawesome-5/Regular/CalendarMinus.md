# CalendarMinus


```text
fontawesome-5/Regular/CalendarMinus
```

```text
include('fontawesome-5/Regular/CalendarMinus')
```



| Illustration | CalendarMinus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Regular/CalendarMinus.png) | ![illustration for CalendarMinus](../../fontawesome-5/Regular/CalendarMinus.Local.png) |




## CalendarMinus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CalendarMinus
include('fontawesome-5/Regular/CalendarMinus')

' renders the element
CalendarMinus('CalendarMinus', 'Calendar Minus', 'an optional tech label')
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

' loads the Item which embeds the element CalendarMinus
include('fontawesome-5/Regular/CalendarMinus')

' renders the element
CalendarMinus('CalendarMinus', 'Calendar Minus', 'an optional tech label')
@enduml
```

