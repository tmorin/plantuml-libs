# Protoncalendar


```text
simpleicons/P/Protoncalendar
```

```text
include('simpleicons/P/Protoncalendar')
```



| Illustration | Protoncalendar |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/P/Protoncalendar.png) | ![illustration for Protoncalendar](../../simpleicons/P/Protoncalendar.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ProtoncalendarXs>`
- `<$ProtoncalendarSm>`
- `<$ProtoncalendarMd>`
- `<$ProtoncalendarLg>`





## Protoncalendar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Protoncalendar
include('simpleicons/P/Protoncalendar')

' renders the element
Protoncalendar('Protoncalendar', 'Protoncalendar', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Protoncalendar
include('simpleicons/P/Protoncalendar')

' renders the element
Protoncalendar('Protoncalendar', 'Protoncalendar', 'an optional tech label', 'an optional description')
@enduml
```

