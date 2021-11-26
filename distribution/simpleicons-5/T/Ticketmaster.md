# Ticketmaster


```text
simpleicons-5/T/Ticketmaster
```

```text
include('simpleicons-5/T/Ticketmaster')
```



| Illustration | Ticketmaster |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/T/Ticketmaster.png) | ![illustration for Ticketmaster](../../simpleicons-5/T/Ticketmaster.Local.png) |




## Ticketmaster

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Ticketmaster
include('simpleicons-5/T/Ticketmaster')

' renders the element
Ticketmaster('Ticketmaster', 'Ticketmaster', 'an optional tech label')
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
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Ticketmaster
include('simpleicons-5/T/Ticketmaster')

' renders the element
Ticketmaster('Ticketmaster', 'Ticketmaster', 'an optional tech label')
@enduml
```

