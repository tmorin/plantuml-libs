# CalendarCheck


```text
fontawesome-5/Solid/CalendarCheck
```

```text
include('fontawesome-5/Solid/CalendarCheck')
```



| Illustration | CalendarCheck |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/CalendarCheck.png) | ![illustration for CalendarCheck](../../fontawesome-5/Solid/CalendarCheck.Local.png) |




## CalendarCheck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CalendarCheck
include('fontawesome-5/Solid/CalendarCheck')

' renders the element
CalendarCheck('CalendarCheck', 'Calendar Check', 'an optional tech label')
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

' loads the Item which embeds the element CalendarCheck
include('fontawesome-5/Solid/CalendarCheck')

' renders the element
CalendarCheck('CalendarCheck', 'Calendar Check', 'an optional tech label')
@enduml
```

