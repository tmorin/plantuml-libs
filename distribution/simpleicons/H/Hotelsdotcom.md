# Hotelsdotcom


```text
simpleicons/H/Hotelsdotcom
```

```text
include('simpleicons/H/Hotelsdotcom')
```



| Illustration | Hotelsdotcom |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/H/Hotelsdotcom.png) | ![illustration for Hotelsdotcom](../../simpleicons/H/Hotelsdotcom.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$HotelsdotcomXs>`
- `<$HotelsdotcomSm>`
- `<$HotelsdotcomMd>`
- `<$HotelsdotcomLg>`





## Hotelsdotcom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Hotelsdotcom
include('simpleicons/H/Hotelsdotcom')

' renders the element
Hotelsdotcom('Hotelsdotcom', 'Hotelsdotcom', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Hotelsdotcom
include('simpleicons/H/Hotelsdotcom')

' renders the element
Hotelsdotcom('Hotelsdotcom', 'Hotelsdotcom', 'an optional tech label', 'an optional description')
@enduml
```

