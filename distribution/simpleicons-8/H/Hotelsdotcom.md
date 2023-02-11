# Hotelsdotcom


```text
simpleicons-8/H/Hotelsdotcom
```

```text
include('simpleicons-8/H/Hotelsdotcom')
```



| Illustration | Hotelsdotcom |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/H/Hotelsdotcom.png) | ![illustration for Hotelsdotcom](../../simpleicons-8/H/Hotelsdotcom.Local.png) |




## Hotelsdotcom

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Hotelsdotcom
include('simpleicons-8/H/Hotelsdotcom')

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
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Hotelsdotcom
include('simpleicons-8/H/Hotelsdotcom')

' renders the element
Hotelsdotcom('Hotelsdotcom', 'Hotelsdotcom', 'an optional tech label', 'an optional description')
@enduml
```

