# Ticketmaster


```text
simpleicons-14/T/Ticketmaster
```

```text
include('simpleicons-14/T/Ticketmaster')
```



| Illustration | Ticketmaster |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/T/Ticketmaster.png) | ![illustration for Ticketmaster](../../simpleicons-14/T/Ticketmaster.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TicketmasterXs>`
- `<$TicketmasterSm>`
- `<$TicketmasterMd>`
- `<$TicketmasterLg>`





## Ticketmaster

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Ticketmaster
include('simpleicons-14/T/Ticketmaster')

' renders the element
Ticketmaster('Ticketmaster', 'Ticketmaster', 'an optional tech label', 'an optional description')
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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Ticketmaster
include('simpleicons-14/T/Ticketmaster')

' renders the element
Ticketmaster('Ticketmaster', 'Ticketmaster', 'an optional tech label', 'an optional description')
@enduml
```

