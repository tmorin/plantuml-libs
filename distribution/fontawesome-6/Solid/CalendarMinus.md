# CalendarMinus


```text
fontawesome-6/Solid/CalendarMinus
```

```text
include('fontawesome-6/Solid/CalendarMinus')
```



| Illustration | CalendarMinus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/CalendarMinus.png) | ![illustration for CalendarMinus](../../fontawesome-6/Solid/CalendarMinus.Local.png) |



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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CalendarMinus
include('fontawesome-6/Solid/CalendarMinus')

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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CalendarMinus
include('fontawesome-6/Solid/CalendarMinus')

' renders the element
CalendarMinus('CalendarMinus', 'Calendar Minus', 'an optional tech label', 'an optional description')
@enduml
```

