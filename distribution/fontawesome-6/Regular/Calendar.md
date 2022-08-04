# Calendar


```text
fontawesome-6/Regular/Calendar
```

```text
include('fontawesome-6/Regular/Calendar')
```



| Illustration | Calendar |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/Calendar.png) | ![illustration for Calendar](../../fontawesome-6/Regular/Calendar.Local.png) |




## Calendar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Calendar
include('fontawesome-6/Regular/Calendar')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Calendar
include('fontawesome-6/Regular/Calendar')

' renders the element
Calendar('Calendar', 'Calendar', 'an optional tech label', 'an optional description')
@enduml
```

