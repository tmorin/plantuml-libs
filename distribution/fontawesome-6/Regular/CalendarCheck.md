# CalendarCheck


```text
fontawesome-6/Regular/CalendarCheck
```

```text
include('fontawesome-6/Regular/CalendarCheck')
```



| Illustration | CalendarCheck |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/CalendarCheck.png) | ![illustration for CalendarCheck](../../fontawesome-6/Regular/CalendarCheck.Local.png) |




## CalendarCheck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CalendarCheck
include('fontawesome-6/Regular/CalendarCheck')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CalendarCheck
include('fontawesome-6/Regular/CalendarCheck')

' renders the element
CalendarCheck('CalendarCheck', 'Calendar Check', 'an optional tech label')
@enduml
```

