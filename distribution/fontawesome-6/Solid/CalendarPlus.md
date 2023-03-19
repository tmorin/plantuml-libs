# CalendarPlus


```text
fontawesome-6/Solid/CalendarPlus
```

```text
include('fontawesome-6/Solid/CalendarPlus')
```



| Illustration | CalendarPlus |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/CalendarPlus.png) | ![illustration for CalendarPlus](../../fontawesome-6/Solid/CalendarPlus.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$CalendarPlusXs>`
- `<$CalendarPlusSm>`
- `<$CalendarPlusMd>`
- `<$CalendarPlusLg>`





## CalendarPlus

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element CalendarPlus
include('fontawesome-6/Solid/CalendarPlus')

' renders the element
CalendarPlus('CalendarPlus', 'Calendar Plus', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element CalendarPlus
include('fontawesome-6/Solid/CalendarPlus')

' renders the element
CalendarPlus('CalendarPlus', 'Calendar Plus', 'an optional tech label', 'an optional description')
@enduml
```

