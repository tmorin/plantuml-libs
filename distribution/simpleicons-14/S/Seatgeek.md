# Seatgeek


```text
simpleicons-14/S/Seatgeek
```

```text
include('simpleicons-14/S/Seatgeek')
```



| Illustration | Seatgeek |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/S/Seatgeek.png) | ![illustration for Seatgeek](../../simpleicons-14/S/Seatgeek.Local.png) |



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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Seatgeek
include('simpleicons-14/S/Seatgeek')

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
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Seatgeek
include('simpleicons-14/S/Seatgeek')

' renders the element
Seatgeek('Seatgeek', 'Seatgeek', 'an optional tech label', 'an optional description')
@enduml
```

