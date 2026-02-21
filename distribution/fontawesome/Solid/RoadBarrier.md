# RoadBarrier


```text
fontawesome/Solid/RoadBarrier
```

```text
include('fontawesome/Solid/RoadBarrier')
```



| Illustration | RoadBarrier |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/RoadBarrier.png) | ![illustration for RoadBarrier](../../fontawesome/Solid/RoadBarrier.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RoadBarrierXs>`
- `<$RoadBarrierSm>`
- `<$RoadBarrierMd>`
- `<$RoadBarrierLg>`





## RoadBarrier

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element RoadBarrier
include('fontawesome/Solid/RoadBarrier')

' renders the element
RoadBarrier('RoadBarrier', 'Road Barrier', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element RoadBarrier
include('fontawesome/Solid/RoadBarrier')

' renders the element
RoadBarrier('RoadBarrier', 'Road Barrier', 'an optional tech label', 'an optional description')
@enduml
```

