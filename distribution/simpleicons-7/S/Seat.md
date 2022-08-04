# Seat


```text
simpleicons-7/S/Seat
```

```text
include('simpleicons-7/S/Seat')
```



| Illustration | Seat |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-7/S/Seat.png) | ![illustration for Seat](../../simpleicons-7/S/Seat.Local.png) |




## Seat

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Seat
include('simpleicons-7/S/Seat')

' renders the element
Seat('Seat', 'Seat', 'an optional tech label', 'an optional description')
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
include('simpleicons-7/bootstrap')

' loads the Item which embeds the element Seat
include('simpleicons-7/S/Seat')

' renders the element
Seat('Seat', 'Seat', 'an optional tech label', 'an optional description')
@enduml
```

