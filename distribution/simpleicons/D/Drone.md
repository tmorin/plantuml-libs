# Drone


```text
simpleicons/D/Drone
```

```text
include('simpleicons/D/Drone')
```



| Illustration | Drone |
| :---: | :---: |
| ![illustration for Illustration](../../simpleicons/D/Drone.png) | ![illustration for Drone](../../simpleicons/D/Drone.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$DroneXs>`
- `<$DroneSm>`
- `<$DroneMd>`
- `<$DroneLg>`





## Drone

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('simpleicons/bootstrap')

' loads the Item which embeds the element Drone
include('simpleicons/D/Drone')

' renders the element
Drone('Drone', 'Drone', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element Drone
include('simpleicons/D/Drone')

' renders the element
Drone('Drone', 'Drone', 'an optional tech label', 'an optional description')
@enduml
```

