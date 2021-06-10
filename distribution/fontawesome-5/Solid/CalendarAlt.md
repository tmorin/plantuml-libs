# CalendarAlt


```text
fontawesome-5/Solid/CalendarAlt
```

```text
include('fontawesome-5/Solid/CalendarAlt')
```



| Illustration | CalendarAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/CalendarAlt.png) | ![illustration for CalendarAlt](../../fontawesome-5/Solid/CalendarAlt.Local.png) |




## CalendarAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element CalendarAlt
include('fontawesome-5/Solid/CalendarAlt')

' renders the element
CalendarAlt('CalendarAlt', 'Calendar Alt', 'an optional tech label')
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

' loads the Item which embeds the element CalendarAlt
include('fontawesome-5/Solid/CalendarAlt')

' renders the element
CalendarAlt('CalendarAlt', 'Calendar Alt', 'an optional tech label')
@enduml
```

