# CalendarMinus


```text
fontawesome-5/Solid/CalendarMinus
```

```text
include('fontawesome-5/Solid/CalendarMinus')
```



| Illustration | CalendarMinus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/CalendarMinus.png) | ![illustration for CalendarMinus](../../fontawesome-5/Solid/CalendarMinus.Local.png) |




## CalendarMinus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CalendarMinus
include('fontawesome-5/Solid/CalendarMinus')

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
include('fontawesome-5/Solid/CalendarMinus')

' renders the element
CalendarMinus('CalendarMinus', 'Calendar Minus', 'an optional tech label')
@enduml
```

