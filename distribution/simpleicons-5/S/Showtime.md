# Showtime


```text
simpleicons-5/S/Showtime
```

```text
include('simpleicons-5/S/Showtime')
```



| Illustration | Showtime |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-5/S/Showtime.png) | ![illustration for Showtime](../../simpleicons-5/S/Showtime.Local.png) |




## Showtime

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-5/bootstrap')

' loads the Item which embeds the element Showtime
include('simpleicons-5/S/Showtime')

' renders the element
Showtime('Showtime', 'Showtime', 'an optional tech label')
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

' loads the Item which embeds the element Showtime
include('simpleicons-5/S/Showtime')

' renders the element
Showtime('Showtime', 'Showtime', 'an optional tech label')
@enduml
```

