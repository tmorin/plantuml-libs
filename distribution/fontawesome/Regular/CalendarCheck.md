# CalendarCheck


```text
fontawesome/Regular/CalendarCheck
```

```text
include('fontawesome/Regular/CalendarCheck')
```



| Illustration | CalendarCheck |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Regular/CalendarCheck.png) | ![illustration for CalendarCheck](../../fontawesome/Regular/CalendarCheck.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CalendarCheckXs>`
- `<$CalendarCheckSm>`
- `<$CalendarCheckMd>`
- `<$CalendarCheckLg>`





## CalendarCheck

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element CalendarCheck
include('fontawesome/Regular/CalendarCheck')

' renders the element
CalendarCheck('CalendarCheck', 'Calendar Check', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CalendarCheck
include('fontawesome/Regular/CalendarCheck')

' renders the element
CalendarCheck('CalendarCheck', 'Calendar Check', 'an optional tech label', 'an optional description')
@enduml
```

