# PermContactCalendar


```text
material/Action/PermContactCalendar
```

```text
include('material/Action/PermContactCalendar')
```



| Illustration | PermContactCalendar |
| :---: | :---: |
| ![illustration for Illustration](../../material/Action/PermContactCalendar.png) | ![illustration for PermContactCalendar](../../material/Action/PermContactCalendar.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$PermContactCalendarXs>`
- `<$PermContactCalendarSm>`
- `<$PermContactCalendarMd>`
- `<$PermContactCalendarLg>`





## PermContactCalendar

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element PermContactCalendar
include('material/Action/PermContactCalendar')

' renders the element
PermContactCalendar('PermContactCalendar', 'Perm Contact Calendar', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element PermContactCalendar
include('material/Action/PermContactCalendar')

' renders the element
PermContactCalendar('PermContactCalendar', 'Perm Contact Calendar', 'an optional tech label', 'an optional description')
@enduml
```

