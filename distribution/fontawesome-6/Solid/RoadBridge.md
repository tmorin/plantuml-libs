# RoadBridge


```text
fontawesome-6/Solid/RoadBridge
```

```text
include('fontawesome-6/Solid/RoadBridge')
```



| Illustration | RoadBridge |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/RoadBridge.png) | ![illustration for RoadBridge](../../fontawesome-6/Solid/RoadBridge.Local.png) |




## RoadBridge

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element RoadBridge
include('fontawesome-6/Solid/RoadBridge')

' renders the element
RoadBridge('RoadBridge', 'Road Bridge', 'an optional tech label')
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
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element RoadBridge
include('fontawesome-6/Solid/RoadBridge')

' renders the element
RoadBridge('RoadBridge', 'Road Bridge', 'an optional tech label')
@enduml
```

