# TicketAlt


```text
fontawesome-5/Solid/TicketAlt
```

```text
include('fontawesome-5/Solid/TicketAlt')
```



| Illustration | TicketAlt |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/TicketAlt.png) | ![illustration for TicketAlt](../../fontawesome-5/Solid/TicketAlt.Local.png) |




## TicketAlt

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element TicketAlt
include('fontawesome-5/Solid/TicketAlt')

' renders the element
TicketAlt('TicketAlt', 'Ticket Alt', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element TicketAlt
include('fontawesome-5/Solid/TicketAlt')

' renders the element
TicketAlt('TicketAlt', 'Ticket Alt', 'an optional tech label')
@enduml
```

