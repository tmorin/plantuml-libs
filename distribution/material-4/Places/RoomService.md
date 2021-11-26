# RoomService


```text
material-4/Places/RoomService
```

```text
include('material-4/Places/RoomService')
```



| Illustration | RoomService |
| :---: | :---: |
| ![illustration for Illustration](../../material-4/Places/RoomService.png) | ![illustration for RoomService](../../material-4/Places/RoomService.Local.png) |




## RoomService

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material-4/bootstrap')

' loads the Item which embeds the element RoomService
include('material-4/Places/RoomService')

' renders the element
RoomService('RoomService', 'Room Service', 'an optional tech label')
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

' loads the Item which embeds the element RoomService
include('material-4/Places/RoomService')

' renders the element
RoomService('RoomService', 'Room Service', 'an optional tech label')
@enduml
```

