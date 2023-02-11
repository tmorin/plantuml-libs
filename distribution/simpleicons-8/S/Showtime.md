# Showtime


```text
simpleicons-8/S/Showtime
```

```text
include('simpleicons-8/S/Showtime')
```



| Illustration | Showtime |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons-8/S/Showtime.png) | ![illustration for Showtime](../../simpleicons-8/S/Showtime.Local.png) |




## Showtime

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons-8/bootstrap')

' loads the Item which embeds the element Showtime
include('simpleicons-8/S/Showtime')

' renders the element
Showtime('Showtime', 'Showtime', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Showtime
include('simpleicons-8/S/Showtime')

' renders the element
Showtime('Showtime', 'Showtime', 'an optional tech label', 'an optional description')
@enduml
```

