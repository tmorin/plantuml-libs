# TicketSimple


```text
fontawesome-6/Solid/TicketSimple
```

```text
include('fontawesome-6/Solid/TicketSimple')
```



| Illustration | TicketSimple |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/TicketSimple.png) | ![illustration for TicketSimple](../../fontawesome-6/Solid/TicketSimple.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TicketSimpleXs>`
- `<$TicketSimpleSm>`
- `<$TicketSimpleMd>`
- `<$TicketSimpleLg>`





## TicketSimple

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element TicketSimple
include('fontawesome-6/Solid/TicketSimple')

' renders the element
TicketSimple('TicketSimple', 'Ticket Simple', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TicketSimple
include('fontawesome-6/Solid/TicketSimple')

' renders the element
TicketSimple('TicketSimple', 'Ticket Simple', 'an optional tech label', 'an optional description')
@enduml
```

