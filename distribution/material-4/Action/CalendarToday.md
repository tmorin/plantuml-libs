# CalendarToday


```text
material-4/Action/CalendarToday
```

```text
include('material-4/Action/CalendarToday')
```



| Illustration | CalendarToday |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/CalendarToday.png) | ![illustration for CalendarToday](../../material-4/Action/CalendarToday.Local.png) |




## CalendarToday

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element CalendarToday
include('material-4/Action/CalendarToday')

' renders the element
CalendarToday('CalendarToday', 'Calendar Today', 'an optional tech label')
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
include('material-4/bootstrap')

' loads the Item which embeds the element CalendarToday
include('material-4/Action/CalendarToday')

' renders the element
CalendarToday('CalendarToday', 'Calendar Today', 'an optional tech label')
@enduml
```

