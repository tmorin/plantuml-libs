# TicketAlt


```text
fontawesome/Solid/TicketAlt
```

```text
include('fontawesome/Solid/TicketAlt')
```



| Illustration | TicketAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/TicketAlt.png) | ![illustration for TicketAlt](../../fontawesome/Solid/TicketAlt.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TicketAltXs>`
- `<$TicketAltSm>`
- `<$TicketAltMd>`
- `<$TicketAltLg>`





## TicketAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element TicketAlt
include('fontawesome/Solid/TicketAlt')

' renders the element
TicketAlt('TicketAlt', 'Ticket Alt', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TicketAlt
include('fontawesome/Solid/TicketAlt')

' renders the element
TicketAlt('TicketAlt', 'Ticket Alt', 'an optional tech label', 'an optional description')
@enduml
```

