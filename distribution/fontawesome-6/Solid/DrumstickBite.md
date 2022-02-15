# DrumstickBite


```text
fontawesome-6/Solid/DrumstickBite
```

```text
include('fontawesome-6/Solid/DrumstickBite')
```



| Illustration | DrumstickBite |
| :---: | :---: |
| ![illustration for Illustration](../../fontawesome-6/Solid/DrumstickBite.png) | ![illustration for DrumstickBite](../../fontawesome-6/Solid/DrumstickBite.Local.png) |




## DrumstickBite

### Load remotely
```plantuml
@startuml
' configures the library
!global $LIB_BASE_LOCATION="https://raw.githubusercontent.com/tmorin/plantuml-libs/master/distribution"

' loads the library's bootstrap
!include $LIB_BASE_LOCATION/bootstrap.puml

' loads the package bootstrap
include('fontawesome-6/bootstrap')

' loads the Item which embeds the element DrumstickBite
include('fontawesome-6/Solid/DrumstickBite')

' renders the element
DrumstickBite('DrumstickBite', 'Drumstick Bite', 'an optional tech label')
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

' loads the Item which embeds the element DrumstickBite
include('fontawesome-6/Solid/DrumstickBite')

' renders the element
DrumstickBite('DrumstickBite', 'Drumstick Bite', 'an optional tech label')
@enduml
```

