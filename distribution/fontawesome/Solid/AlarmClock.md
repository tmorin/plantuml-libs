# AlarmClock


```text
fontawesome/Solid/AlarmClock
```

```text
include('fontawesome/Solid/AlarmClock')
```



| Illustration | AlarmClock |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/AlarmClock.png) | ![illustration for AlarmClock](../../fontawesome/Solid/AlarmClock.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$AlarmClockXs>`
- `<$AlarmClockSm>`
- `<$AlarmClockMd>`
- `<$AlarmClockLg>`





## AlarmClock

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element AlarmClock
include('fontawesome/Solid/AlarmClock')

' renders the element
AlarmClock('AlarmClock', 'Alarm Clock', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element AlarmClock
include('fontawesome/Solid/AlarmClock')

' renders the element
AlarmClock('AlarmClock', 'Alarm Clock', 'an optional tech label', 'an optional description')
@enduml
```

