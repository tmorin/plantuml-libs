# Calendar


```text
fontawesome-5/Solid/Calendar
```

```text
include('fontawesome-5/Solid/Calendar')
```



| Illustration | Calendar |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/Calendar.png) | ![illustration for Calendar](../../fontawesome-5/Solid/Calendar.Local.png) |




## Calendar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element Calendar
include('fontawesome-5/Solid/Calendar')

' renders the element
Calendar('Calendar', 'Calendar', 'an optional tech label')
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

' loads the Item which embeds the element Calendar
include('fontawesome-5/Solid/Calendar')

' renders the element
Calendar('Calendar', 'Calendar', 'an optional tech label')
@enduml
```

