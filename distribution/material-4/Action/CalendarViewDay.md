# CalendarViewDay


```text
material-4/Action/CalendarViewDay
```

```text
include('material-4/Action/CalendarViewDay')
```



| Illustration | CalendarViewDay |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Action/CalendarViewDay.png) | ![illustration for CalendarViewDay](../../material-4/Action/CalendarViewDay.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CalendarViewDayXs>`
- `<$CalendarViewDaySm>`
- `<$CalendarViewDayMd>`
- `<$CalendarViewDayLg>`





## CalendarViewDay

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element CalendarViewDay
include('material-4/Action/CalendarViewDay')

' renders the element
CalendarViewDay('CalendarViewDay', 'Calendar View Day', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CalendarViewDay
include('material-4/Action/CalendarViewDay')

' renders the element
CalendarViewDay('CalendarViewDay', 'Calendar View Day', 'an optional tech label', 'an optional description')
@enduml
```

