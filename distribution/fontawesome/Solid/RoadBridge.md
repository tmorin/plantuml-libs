# RoadBridge


```text
fontawesome/Solid/RoadBridge
```

```text
include('fontawesome/Solid/RoadBridge')
```



| Illustration | RoadBridge |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/RoadBridge.png) | ![illustration for RoadBridge](../../fontawesome/Solid/RoadBridge.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RoadBridgeXs>`
- `<$RoadBridgeSm>`
- `<$RoadBridgeMd>`
- `<$RoadBridgeLg>`





## RoadBridge

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element RoadBridge
include('fontawesome/Solid/RoadBridge')

' renders the element
RoadBridge('RoadBridge', 'Road Bridge', 'an optional tech label', 'an optional description')
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
include('fontawesome/bootstrap')

' loads the Item which embeds the element RoadBridge
include('fontawesome/Solid/RoadBridge')

' renders the element
RoadBridge('RoadBridge', 'Road Bridge', 'an optional tech label', 'an optional description')
@enduml
```

