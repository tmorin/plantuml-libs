# CalendarMinus


```text
fontawesome/Regular/CalendarMinus
```

```text
include('fontawesome/Regular/CalendarMinus')
```



| Illustration | CalendarMinus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/CalendarMinus.png) | ![illustration for CalendarMinus](../../fontawesome/Regular/CalendarMinus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CalendarMinusXs>`
- `<$CalendarMinusSm>`
- `<$CalendarMinusMd>`
- `<$CalendarMinusLg>`





## CalendarMinus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CalendarMinus
include('fontawesome/Regular/CalendarMinus')

' renders the element
CalendarMinus('CalendarMinus', 'Calendar Minus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CalendarMinus
include('fontawesome/Regular/CalendarMinus')

' renders the element
CalendarMinus('CalendarMinus', 'Calendar Minus', 'an optional tech label', 'an optional description')
@enduml
```

