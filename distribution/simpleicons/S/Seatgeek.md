# Seatgeek


```text
simpleicons/S/Seatgeek
```

```text
include('simpleicons/S/Seatgeek')
```



| Illustration | Seatgeek |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/S/Seatgeek.png) | ![illustration for Seatgeek](../../simpleicons/S/Seatgeek.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SeatgeekXs>`
- `<$SeatgeekSm>`
- `<$SeatgeekMd>`
- `<$SeatgeekLg>`





## Seatgeek

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Seatgeek
include('simpleicons/S/Seatgeek')

' renders the element
Seatgeek('Seatgeek', 'Seatgeek', 'an optional tech label', 'an optional description')
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
include('simpleicons/bootstrap')

' loads the Item which embeds the element Seatgeek
include('simpleicons/S/Seatgeek')

' renders the element
Seatgeek('Seatgeek', 'Seatgeek', 'an optional tech label', 'an optional description')
@enduml
```

