# Clock


```text
fontawesome-6/Regular/Clock
```

```text
include('fontawesome-6/Regular/Clock')
```



| Illustration | Clock |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Regular/Clock.png) | ![illustration for Clock](../../fontawesome-6/Regular/Clock.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$ClockXs>`
- `<$ClockSm>`
- `<$ClockMd>`
- `<$ClockLg>`





## Clock

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element Clock
include('fontawesome-6/Regular/Clock')

' renders the element
Clock('Clock', 'Clock', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Clock
include('fontawesome-6/Regular/Clock')

' renders the element
Clock('Clock', 'Clock', 'an optional tech label', 'an optional description')
@enduml
```

