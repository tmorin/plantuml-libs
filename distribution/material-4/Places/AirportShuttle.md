# AirportShuttle


```text
material-4/Places/AirportShuttle
```

```text
include('material-4/Places/AirportShuttle')
```



| Illustration | AirportShuttle |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/AirportShuttle.png) | ![illustration for AirportShuttle](../../material-4/Places/AirportShuttle.Local.png) |




## AirportShuttle

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element AirportShuttle
include('material-4/Places/AirportShuttle')

' renders the element
AirportShuttle('AirportShuttle', 'Airport Shuttle', 'an optional tech label', 'an optional description')
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
include('material-4/bootstrap')

' loads the Item which embeds the element AirportShuttle
include('material-4/Places/AirportShuttle')

' renders the element
AirportShuttle('AirportShuttle', 'Airport Shuttle', 'an optional tech label', 'an optional description')
@enduml
```

