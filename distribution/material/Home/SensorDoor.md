# SensorDoor


```text
material/Home/SensorDoor
```

```text
include('material/Home/SensorDoor')
```



| Illustration | SensorDoor |
| :---: | :---: |
| ![illustration for Illustration](../../material/Home/SensorDoor.png) | ![illustration for SensorDoor](../../material/Home/SensorDoor.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$SensorDoorXs>`
- `<$SensorDoorSm>`
- `<$SensorDoorMd>`
- `<$SensorDoorLg>`





## SensorDoor

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('material/bootstrap')

' loads the Item which embeds the element SensorDoor
include('material/Home/SensorDoor')

' renders the element
SensorDoor('SensorDoor', 'Sensor Door', 'an optional tech label', 'an optional description')
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
include('material/bootstrap')

' loads the Item which embeds the element SensorDoor
include('material/Home/SensorDoor')

' renders the element
SensorDoor('SensorDoor', 'Sensor Door', 'an optional tech label', 'an optional description')
@enduml
```

