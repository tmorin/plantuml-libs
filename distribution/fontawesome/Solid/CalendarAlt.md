# CalendarAlt


```text
fontawesome/Solid/CalendarAlt
```

```text
include('fontawesome/Solid/CalendarAlt')
```



| Illustration | CalendarAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/CalendarAlt.png) | ![illustration for CalendarAlt](../../fontawesome/Solid/CalendarAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CalendarAltXs>`
- `<$CalendarAltSm>`
- `<$CalendarAltMd>`
- `<$CalendarAltLg>`





## CalendarAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CalendarAlt
include('fontawesome/Solid/CalendarAlt')

' renders the element
CalendarAlt('CalendarAlt', 'Calendar Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CalendarAlt
include('fontawesome/Solid/CalendarAlt')

' renders the element
CalendarAlt('CalendarAlt', 'Calendar Alt', 'an optional tech label', 'an optional description')
@enduml
```

