# RoadSpikes


```text
fontawesome/Solid/RoadSpikes
```

```text
include('fontawesome/Solid/RoadSpikes')
```



| Illustration | RoadSpikes |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/RoadSpikes.png) | ![illustration for RoadSpikes](../../fontawesome/Solid/RoadSpikes.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$RoadSpikesXs>`
- `<$RoadSpikesSm>`
- `<$RoadSpikesMd>`
- `<$RoadSpikesLg>`





## RoadSpikes

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element RoadSpikes
include('fontawesome/Solid/RoadSpikes')

' renders the element
RoadSpikes('RoadSpikes', 'Road Spikes', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element RoadSpikes
include('fontawesome/Solid/RoadSpikes')

' renders the element
RoadSpikes('RoadSpikes', 'Road Spikes', 'an optional tech label', 'an optional description')
@enduml
```

