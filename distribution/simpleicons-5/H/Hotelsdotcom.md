# Hotelsdotcom


```text
simpleicons-5/H/Hotelsdotcom
```

```text
include('simpleicons-5/H/Hotelsdotcom')
```



| Illustration | Hotelsdotcom |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/H/Hotelsdotcom.png) | ![illustration for Hotelsdotcom](../../simpleicons-5/H/Hotelsdotcom.Local.png) |




## Hotelsdotcom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Hotelsdotcom
include('simpleicons-5/H/Hotelsdotcom')

' renders the element
Hotelsdotcom('Hotelsdotcom', 'Hotelsdotcom', 'an optional tech label')
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

' loads the Item which embeds the element Hotelsdotcom
include('simpleicons-5/H/Hotelsdotcom')

' renders the element
Hotelsdotcom('Hotelsdotcom', 'Hotelsdotcom', 'an optional tech label')
@enduml
```

