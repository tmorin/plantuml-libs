# Bookingdotcom


```text
simpleicons-14/B/Bookingdotcom
```

```text
include('simpleicons-14/B/Bookingdotcom')
```



| Illustration | Bookingdotcom |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-14/B/Bookingdotcom.png) | ![illustration for Bookingdotcom](../../simpleicons-14/B/Bookingdotcom.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$BookingdotcomXs>`
- `<$BookingdotcomSm>`
- `<$BookingdotcomMd>`
- `<$BookingdotcomLg>`





## Bookingdotcom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-14/bootstrap')

' loads the Item which embeds the element Bookingdotcom
include('simpleicons-14/B/Bookingdotcom')

' renders the element
Bookingdotcom('Bookingdotcom', 'Bookingdotcom', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Bookingdotcom
include('simpleicons-14/B/Bookingdotcom')

' renders the element
Bookingdotcom('Bookingdotcom', 'Bookingdotcom', 'an optional tech label', 'an optional description')
@enduml
```

