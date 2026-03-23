# BriefcaseClock


```text
fontawesome/Solid/BriefcaseClock
```

```text
include('fontawesome/Solid/BriefcaseClock')
```



| Illustration | BriefcaseClock |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/BriefcaseClock.png) | ![illustration for BriefcaseClock](../../fontawesome/Solid/BriefcaseClock.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BriefcaseClockXs>`
- `<$BriefcaseClockSm>`
- `<$BriefcaseClockMd>`
- `<$BriefcaseClockLg>`





## BriefcaseClock

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element BriefcaseClock
include('fontawesome/Solid/BriefcaseClock')

' renders the element
BriefcaseClock('BriefcaseClock', 'Briefcase Clock', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element BriefcaseClock
include('fontawesome/Solid/BriefcaseClock')

' renders the element
BriefcaseClock('BriefcaseClock', 'Briefcase Clock', 'an optional tech label', 'an optional description')
@enduml
```

