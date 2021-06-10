# TrafficLight


```text
fontawesome-5/Solid/TrafficLight
```

```text
include('fontawesome-5/Solid/TrafficLight')
```



| Illustration | TrafficLight |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-5/Solid/TrafficLight.png) | ![illustration for TrafficLight](../../fontawesome-5/Solid/TrafficLight.Local.png) |




## TrafficLight

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://github.com/tmorin/plantuml-libs/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element TrafficLight
include('fontawesome-5/Solid/TrafficLight')

' renders the element
TrafficLight('TrafficLight', 'Traffic Light', 'an optional tech label')
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
include('fontawesome-5/bootstrap')

' loads the Item which embeds the element TrafficLight
include('fontawesome-5/Solid/TrafficLight')

' renders the element
TrafficLight('TrafficLight', 'Traffic Light', 'an optional tech label')
@enduml
```

