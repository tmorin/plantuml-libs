# TrafficLight


```text
fontawesome/Solid/TrafficLight
```

```text
include('fontawesome/Solid/TrafficLight')
```



| Illustration | TrafficLight |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome/Solid/TrafficLight.png) | ![illustration for TrafficLight](../../fontawesome/Solid/TrafficLight.Local.png) |



## Sprites
The item provides the following sriptes:

- `<$TrafficLightXs>`
- `<$TrafficLightSm>`
- `<$TrafficLightMd>`
- `<$TrafficLightLg>`





## TrafficLight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome/bootstrap')

' loads the Item which embeds the element TrafficLight
include('fontawesome/Solid/TrafficLight')

' renders the element
TrafficLight('TrafficLight', 'Traffic Light', 'an optional tech label', 'an optional description')
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

' loads the Item which embeds the element TrafficLight
include('fontawesome/Solid/TrafficLight')

' renders the element
TrafficLight('TrafficLight', 'Traffic Light', 'an optional tech label', 'an optional description')
@enduml
```

