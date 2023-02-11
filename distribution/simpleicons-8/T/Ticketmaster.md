# Ticketmaster


```text
simpleicons-8/T/Ticketmaster
```

```text
include('simpleicons-8/T/Ticketmaster')
```



| Illustration | Ticketmaster |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/T/Ticketmaster.png) | ![illustration for Ticketmaster](../../simpleicons-8/T/Ticketmaster.Local.png) |




## Ticketmaster

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Ticketmaster
include('simpleicons-8/T/Ticketmaster')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Ticketmaster
include('simpleicons-8/T/Ticketmaster')

' renders the element
Ticketmaster('Ticketmaster', 'Ticketmaster', 'an optional tech label', 'an optional description')
@enduml
```

